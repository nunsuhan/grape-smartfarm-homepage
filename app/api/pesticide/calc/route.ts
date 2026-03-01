import { NextRequest, NextResponse } from 'next/server';

/**
 * FarmSense 농약 잔류 반감기 예측 API
 * 기반: Fantke et al. 2014, Wu & Nofziger, PMC9957015 (2023)
 *
 * POST /api/pesticide/calc
 */

// 농약별 참조 데이터 (DT50_ref: 20℃, RH 60% 기준)
const PESTICIDE_DB: Record<string, { dt50: number; mrl: number; nameKr: string }> = {
    deltamethrin:   { dt50: 5.8,  mrl: 0.1,  nameKr: '델타메트린' },
    abamectin:      { dt50: 4.0,  mrl: 0.02, nameKr: '아바멕틴' },
    spinosad:       { dt50: 7.0,  mrl: 0.5,  nameKr: '스피노사드' },
    tebuconazole:   { dt50: 10.2, mrl: 2.0,  nameKr: '테부코나졸' },
    flutriafol:     { dt50: 8.5,  mrl: 0.5,  nameKr: '플루트리아폴' },
    cyflufenamid:   { dt50: 6.3,  mrl: 1.0,  nameKr: '사이플루페나미드' },
    chlorpyrifos:   { dt50: 14.0, mrl: 0.5,  nameKr: '클로르피리포스' },
    imidacloprid:   { dt50: 11.0, mrl: 1.0,  nameKr: '이미다클로프리드' },
};

// 품종별 보정 계수
const CULTIVAR_DB: Record<string, number> = {
    shine_muscat: 1.00,  // 샤인머스켓 (기준)
    kyoho:        0.90,  // 거봉
    campbell:     1.05,  // MBA(캠벨)
    cheongsoo:    1.10,  // 청수
    hongisul:     0.95,  // 홍이슬
    other:        1.00,  // 기타 (기본값)
};

// C₀ 자동 환산용 입력 (c0 대신 사용 가능)
interface SprayParams {
    activeConc: number;      // 원액 유효성분 농도 (%, 예: 10)
    dilutionRatio: number;   // 희석배수 (예: 1000)
    sprayVolume: number;     // 살포량 (L/10a, 예: 200)
    cropWeight?: number;     // 작물 중량 (kg/10a, 기본: 1500 포도 기준)
    depositFactor?: number;  // 작물 부착율 (0~1, 기본: 0.15)
}

interface CalcRequest {
    pesticide: string;       // 농약 성분명 (영문 키)
    c0?: number;             // 살포 직후 초기 농도 (mg/kg) — sprayParams와 둘 중 하나
    sprayParams?: SprayParams; // 희석배수 기반 C₀ 자동 환산
    sprayDate: string;       // 살포일 (YYYY-MM-DD)
    targetDate?: string;     // 잔류량 확인일 (기본: 오늘)
    temperature: number;     // 평균 기온 (℃)
    humidity: number;        // 평균 상대습도 (%)
    cultivar?: string;       // 포도 품종 키
    // 직접 DT50 입력 (DB에 없는 농약용)
    customDt50?: number;
    customMrl?: number;
    customName?: string;
}

/**
 * 희석배수 → C₀ (mg/kg) 자동 환산
 *
 * 살포액 농도(mg/L) = 원액농도(%) × 10,000 / 희석배수
 * 단위면적 약량(mg) = 살포액 농도 × 살포량(L/10a)
 * C₀(mg/kg)        = 단위면적 약량 × 부착율 / 작물 중량(kg/10a)
 */
function calcC0(p: SprayParams): number {
    const cropWeight = p.cropWeight ?? 1500;    // 포도 기본 수확량 1,500 kg/10a
    const depositFactor = p.depositFactor ?? 0.15; // 작물 부착율 15%

    const sprayConcMgL = (p.activeConc * 10000) / p.dilutionRatio;
    const totalDoseMg = sprayConcMgL * p.sprayVolume;
    return (totalDoseMg * depositFactor) / cropWeight;
}

interface CalcResult {
    pesticide: string;
    nameKr: string;
    sprayDate: string;
    targetDate: string;
    elapsedDays: number;
    c0: number;
    c0Calculated: boolean;  // C₀ 자동 환산 여부
    residue: number;           // 예측 잔류량 (mg/kg)
    mrl: number;               // 잔류허용기준 (mg/kg)
    mrlRatio: number;          // MRL 대비 잔류 비율 (%)
    safetyDays: number;        // 안전일수 (잔류량 < MRL×0.7 까지)
    isSafe: boolean;           // targetDate 기준 안전 여부
    params: {
        kRef: number;
        kAdjusted: number;
        dt50Adjusted: number;
        q10Factor: number;
        rhFactor: number;
        cultivarFactor: number;
    };
}

function calcResidue(req: CalcRequest): CalcResult {
    const {
        pesticide,
        sprayDate,
        targetDate,
        temperature,
        humidity,
        cultivar = 'other',
        customDt50,
        customMrl,
        customName,
        sprayParams,
    } = req;

    // C₀ 결정: 직접 입력 우선, 없으면 sprayParams로 자동 환산
    const c0Calculated = req.c0 == null && sprayParams != null;
    const c0 = req.c0 ?? (sprayParams ? calcC0(sprayParams) : null);

    if (c0 == null) {
        throw new Error('c0 또는 sprayParams 중 하나는 필수입니다');
    }

    // 농약 데이터 조회
    const db = PESTICIDE_DB[pesticide];
    const dt50Ref = customDt50 ?? db?.dt50;
    const mrl = customMrl ?? db?.mrl;
    const nameKr = customName ?? db?.nameKr ?? pesticide;

    if (!dt50Ref || !mrl) {
        throw new Error(`농약 정보를 찾을 수 없습니다: ${pesticide}`);
    }

    // 경과일 계산
    const spray = new Date(sprayDate);
    const target = new Date(targetDate ?? new Date().toISOString().slice(0, 10));
    const elapsedDays = Math.max(0, Math.floor((target.getTime() - spray.getTime()) / 86400000));

    // k_ref 계산
    const kRef = Math.LN2 / dt50Ref;

    // Q10 온도 보정 (Fantke et al. 2014, Q10 = 1.22, T_ref = 20℃)
    const Q10 = 1.22;
    const tRef = 20;
    const q10Factor = Math.pow(Q10, (temperature - tRef) / 10);

    // RH 보정 (PMC9957015, α = 0.5, RH_ref = 60%)
    const alpha = 0.5;
    const rhRef = 60;
    const rhFactor = 1 + alpha * ((humidity - rhRef) / 100);

    // 품종 보정
    const cultivarFactor = CULTIVAR_DB[cultivar] ?? 1.0;

    // 최종 k
    const kAdjusted = kRef * q10Factor * rhFactor * cultivarFactor;
    const dt50Adjusted = Math.LN2 / kAdjusted;

    // 잔류량 계산
    const residue = c0 * Math.exp(-kAdjusted * elapsedDays);

    // 안전일수 계산 (잔류량 < MRL × 0.7)
    const safeThreshold = mrl * 0.7;
    const safetyDays = safeThreshold >= c0
        ? 0
        : Math.ceil(Math.log(c0 / safeThreshold) / kAdjusted);

    const mrlRatio = (residue / mrl) * 100;
    const isSafe = residue < safeThreshold;

    return {
        pesticide,
        nameKr,
        sprayDate,
        targetDate: target.toISOString().slice(0, 10),
        elapsedDays,
        c0: Math.round(c0 * 10000) / 10000,
        c0Calculated,
        residue: Math.round(residue * 10000) / 10000,
        mrl,
        mrlRatio: Math.round(mrlRatio * 10) / 10,
        safetyDays,
        isSafe,
        params: {
            kRef: Math.round(kRef * 10000) / 10000,
            kAdjusted: Math.round(kAdjusted * 10000) / 10000,
            dt50Adjusted: Math.round(dt50Adjusted * 10) / 10,
            q10Factor: Math.round(q10Factor * 1000) / 1000,
            rhFactor: Math.round(rhFactor * 1000) / 1000,
            cultivarFactor,
        },
    };
}

export async function POST(req: NextRequest) {
    try {
        const body: CalcRequest = await req.json();

        const { pesticide, c0, sprayParams, sprayDate, temperature, humidity } = body;

        if (!pesticide || !sprayDate || temperature == null || humidity == null) {
            return NextResponse.json(
                { error: '필수 파라미터 누락', required: ['pesticide', 'sprayDate', 'temperature', 'humidity', 'c0 또는 sprayParams'] },
                { status: 400 }
            );
        }

        if (c0 == null && !sprayParams) {
            return NextResponse.json(
                { error: 'c0(직접 입력) 또는 sprayParams(희석배수 환산) 중 하나 필요',
                  sprayParams: { activeConc: '원액농도(%)', dilutionRatio: '희석배수', sprayVolume: '살포량(L/10a)', cropWeight: '작물중량(kg/10a, 선택)', depositFactor: '부착율(0~1, 선택)' }
                },
                { status: 400 }
            );
        }

        const result = calcResidue(body);
        return NextResponse.json(result);
    } catch (e) {
        return NextResponse.json({ error: String(e) }, { status: 400 });
    }
}

// 지원 농약 목록 조회
export async function GET() {
    return NextResponse.json({
        pesticides: Object.entries(PESTICIDE_DB).map(([key, v]) => ({
            key,
            nameKr: v.nameKr,
            dt50Ref: v.dt50,
            mrl: v.mrl,
        })),
        cultivars: Object.entries(CULTIVAR_DB).map(([key, factor]) => ({
            key,
            factor,
        })),
    });
}
