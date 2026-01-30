import { Container } from '@/components/ui/container';
import Link from 'next/link';
import {
    FileText,
    BookOpen,
    Droplets,
    Bug,
    FlaskConical,
    BarChart,
    Grape,
    Gauge,
    Camera,
    Cpu,
    Database,
    ArrowRight,
    CheckCircle,
} from 'lucide-react';

/** text_data 기준 참고 문헌 (제안서·농가 검증용) */
const REFERENCE_DOCS = [
    { name: 'FarmSense 교육 가이드 및 지능형 로직 명세서', category: '로직 종합' },
    { name: 'FarmSense 센서 연동 통합 가이드 및 개발 전략', category: '센서' },
    { name: '스마트 정밀 관개 및 생육 환경 제어 로직 분석', category: '관수' },
    { name: '스마트팜 정밀 관개 및 데이터 기반 물관리 전략', category: '관수' },
    { name: '포도 재배를 위한 정밀 시비 알고리즘 및 처방 로직', category: '비료' },
    { name: '통합해충관리 기반의 최적 방제 시기 결정 모델과 알고리즘', category: '병해충' },
    { name: '포도 수확량 예측을 위한 데이터 분석 및 모델링 가이드', category: '수확량' },
    { name: 'AI와 머신러닝 기반 정밀 포도 수확량 예측 혁신', category: '수확량' },
    { name: '포도 수형 관리 및 고품질 생산을 위한 재배 로직', category: '재배' },
    { name: '포도 재배 적지 분석 및 생육 단계별 정밀 관리 가이드', category: '재배' },
    { name: '스마트팜 센서 데이터 통합 및 연동 기술 전략', category: '센서' },
    { name: 'RS-485 게이트웨이 설치 가이드 및 원가 분석', category: '센서' },
    { name: 'RS-485 게이트웨이 병렬 설치 및 데이터 수집 가이드', category: '센서' },
];

/** 로직별 입력·출력·근거 요약 (검증용) */
const LOGIC_SPEC = [
    {
        title: '관수_물관리',
        href: '/intelligent-logic/irrigation-water',
        input: '토양 수분 장력(Ψ-soil), 생육 단계(E-L)',
        output: '관개 시점·량 권장, 장력 임계값(kPa)',
        refs: '스마트 정밀 관개 및 생육 환경 제어 로직 분석, 스마트팜 정밀 관개 및 데이터 기반 물관리 전략',
    },
    {
        title: '병해충관리',
        href: '/intelligent-logic/pesticide-spray',
        input: '온도·습도·엽면습윤, 병원균별 임계값',
        output: '위험도·방제 타이밍, Natural Suppression 판단',
        refs: '통합해충관리 기반의 최적 방제 시기 결정 모델과 알고리즘',
    },
    {
        title: '비료_시비량',
        href: '/intelligent-logic/fertilizer-application',
        input: '생육 단계, 토양 EC, NPK 목표',
        output: '시비 처방(N-P-K 비율), EC 피드백 제어',
        refs: '포도 재배를 위한 정밀 시비 알고리즘 및 처방 로직',
    },
    {
        title: '수확량_예측',
        href: '/intelligent-logic/yield-prediction',
        input: 'GDD, LAI/캐노피, 품종·면적',
        output: '예상 수확량, 수확 시기 권장',
        refs: '포도 수확량 예측을 위한 데이터 분석 및 모델링 가이드, AI와 머신러닝 기반 정밀 포도 수확량 예측 혁신',
    },
    {
        title: '포도_재배기술',
        href: '/intelligent-logic/grape-cultivation',
        input: '품종, 생육 단계, 환경 데이터',
        output: '전정·적엽·착색 관리 권장',
        refs: '포도 수형 관리 및 고품질 생산을 위한 재배 로직, 포도 재배 적지 분석 및 생육 단계별 정밀 관리 가이드',
    },
    {
        title: '환경제어_센서',
        href: '/intelligent-logic/environmental-control',
        input: '온도·습도·조도·CO2 등 센서 값',
        output: '제어 권장(환기·난방·차광 등)',
        refs: 'FarmSense 센서 연동 통합 가이드, 스마트팜 센서 데이터 통합 및 연동 기술 전략',
    },
];

export const metadata = {
    title: '기술 문서 (검증·로직) - FarmSense',
    description: '공무원·농가가 FarmSense 로직의 작동 원리와 근거 문헌을 확인하고 검증할 수 있는 기술 문서. 지능형 로직 입력/출력 명세, 참고 문헌 목록.',
};

export default function TechnologyDocsPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-4xl py-16">
                    <div className="flex items-center gap-2 text-green-600 font-bold tracking-wide text-sm uppercase mb-4">
                        <FileText className="w-5 h-5" />
                        검증 및 로직 이해를 위한 기술 문서
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-4">
                        기술 문서
                    </h1>
                    <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                        공무원·평가위원·농가가 <strong>어떤 로직으로 작동하는지</strong> 확인하고 검증할 수 있도록,
                        입력 데이터·처리 로직·출력 결과와 <strong>근거 문헌</strong>을 투명하게 공개합니다.
                    </p>
                </Container>
            </div>

            <Container className="max-w-4xl py-12 space-y-16">
                {/* 목적 */}
                <section className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg">
                    <h2 className="text-xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        이 문서의 목적
                    </h2>
                    <ul className="text-neutral-700 space-y-1 list-disc list-inside">
                        <li><strong>검증:</strong> 시범사업·정책 검토 시 FarmSense 로직의 과학적 근거와 산출 과정을 확인</li>
                        <li><strong>로직 이해:</strong> 농가·현장이 &quot;왜 이 시점에 물/비료/방제를 권장하는지&quot;를 이해</li>
                        <li><strong>근거 추적:</strong> 각 로직에 대응하는 참고 문헌(논문·보고서)을 명시하여 재현·검증 가능하도록 구성</li>
                    </ul>
                </section>

                {/* 지능형 로직 명세 요약표 */}
                <section>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                        <BookOpen className="w-6 h-6 text-green-600" />
                        지능형 로직 명세 요약
                    </h2>
                    <p className="text-neutral-600 mb-6">
                        각 로직의 <strong>입력(Input)</strong>·<strong>출력(Output)</strong>과 <strong>근거 문헌</strong>입니다. 상세 수식·임계값은 각 페이지에서 확인할 수 있습니다.
                    </p>
                    <div className="overflow-x-auto border border-neutral-200 rounded-xl">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-neutral-100 border-b border-neutral-200">
                                    <th className="text-left p-4 font-semibold text-neutral-900">로직</th>
                                    <th className="text-left p-4 font-semibold text-neutral-900">입력</th>
                                    <th className="text-left p-4 font-semibold text-neutral-900">출력</th>
                                    <th className="text-left p-4 font-semibold text-neutral-900">근거 문헌</th>
                                    <th className="text-left p-4 font-semibold text-neutral-900 w-20">상세</th>
                                </tr>
                            </thead>
                            <tbody>
                                {LOGIC_SPEC.map((row) => (
                                    <tr key={row.href} className="border-b border-neutral-100 hover:bg-neutral-50">
                                        <td className="p-4 font-medium text-neutral-900">{row.title}</td>
                                        <td className="p-4 text-neutral-600">{row.input}</td>
                                        <td className="p-4 text-neutral-600">{row.output}</td>
                                        <td className="p-4 text-neutral-500 text-xs">{row.refs}</td>
                                        <td className="p-4">
                                            <Link
                                                href={row.href}
                                                className="inline-flex items-center gap-1 text-green-600 font-medium hover:underline"
                                            >
                                                보기 <ArrowRight className="w-4 h-4" />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-4 text-sm text-neutral-500">
                        ※ 지능형 로직 전체 목차: <Link href="/intelligent-logic" className="text-green-600 hover:underline">지능형 로직</Link>
                    </p>
                </section>

                {/* 열화상·RGB-D 카메라 설치 필요성 */}
                <section className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                        <Camera className="w-6 h-6 text-amber-600" />
                        열화상·RGB-D 카메라 설치 필요성
                    </h2>
                    <p className="text-neutral-700 text-sm mb-4">
                        &quot;굳이 비용이 드는 열화상·RGB-D 카메라가 왜 필요한가?&quot; — RGB·토양 센서만으로는 해결할 수 없는 문제(골든타임 확보, CWSI 기반 관개, 수확량·질병 정밀 판독)와 FarmSense 선택 근거를 정리한 전용 문서입니다.
                    </p>
                    <Link
                        href="/technology/camera-necessity"
                        className="inline-flex items-center gap-2 text-amber-700 font-semibold hover:underline"
                    >
                        열화상·RGB-D 설치 필요성 상세 보기 <ArrowRight className="w-4 h-4" />
                    </Link>
                </section>

                {/* 기술력(Technology) 요약 */}
                <section>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                        <Cpu className="w-6 h-6 text-green-600" />
                        기술력(Technology) 요약
                    </h2>
                    <p className="text-neutral-600 mb-6">
                        AI 병해 진단, PMI-DSS, RAG, 센서 네트워크의 <strong>작동 원리</strong>와 <strong>검증 포인트</strong>입니다.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            href="/technology/ai-diagnosis"
                            className="flex items-start gap-4 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50"
                        >
                            <Camera className="w-8 h-8 text-blue-600 shrink-0" />
                            <div>
                                <h3 className="font-bold text-neutral-900">AI 병해충 진단 (Vision)</h3>
                                <p className="text-sm text-neutral-600">이미지 기반 병해·해충 분류, 환경 데이터 융합</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                        </Link>
                        <Link
                            href="/technology/pmi-dss"
                            className="flex items-start gap-4 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50"
                        >
                            <BarChart className="w-8 h-8 text-amber-600 shrink-0" />
                            <div>
                                <h3 className="font-bold text-neutral-900">PMI-DSS 의사결정</h3>
                                <p className="text-sm text-neutral-600">온습도·엽면습윤 기반 위험도 산출, 48시간 전 사전 경보</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                        </Link>
                        <Link
                            href="/technology/rag-system"
                            className="flex items-start gap-4 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50"
                        >
                            <Database className="w-8 h-8 text-purple-600 shrink-0" />
                            <div>
                                <h3 className="font-bold text-neutral-900">대화형 농업 비서 (RAG)</h3>
                                <p className="text-sm text-neutral-600">논문·지식베이스 기반 실행 가능한 답변</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                        </Link>
                        <Link
                            href="/technology/sensor-system"
                            className="flex items-start gap-4 p-4 border border-neutral-200 rounded-xl hover:bg-neutral-50"
                        >
                            <Gauge className="w-8 h-8 text-teal-600 shrink-0" />
                            <div>
                                <h3 className="font-bold text-neutral-900">IoT 센서 네트워크</h3>
                                <p className="text-sm text-neutral-600">환경·토양·기상 데이터 수집 및 연동</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-neutral-400 shrink-0 mt-1" />
                        </Link>
                    </div>
                </section>

                {/* 참고 문헌 목록 (text_data 기준) */}
                <section className="border border-neutral-200 rounded-xl p-6 bg-neutral-50">
                    <h2 className="text-2xl font-bold text-neutral-900 mb-2 flex items-center gap-2">
                        <FileText className="w-6 h-6 text-green-600" />
                        참고 문헌 목록
                    </h2>
                    <p className="text-neutral-600 mb-4 text-sm">
                        FarmSense 로직 및 기술 명세의 근거 자료입니다. (프로젝트 내 text_data 기준)
                    </p>
                    <ul className="space-y-2 text-sm">
                        {REFERENCE_DOCS.map((doc) => (
                            <li key={doc.name} className="flex items-center gap-2">
                                <span className="shrink-0 px-2 py-0.5 rounded bg-neutral-200 text-neutral-600 text-xs">
                                    {doc.category}
                                </span>
                                <span className="text-neutral-800">{doc.name}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* 제안서 맥락 */}
                <section className="border border-neutral-200 rounded-xl p-6">
                    <h2 className="text-xl font-bold text-neutral-900 mb-2">시범사업·제안서 검토 시</h2>
                    <p className="text-neutral-700 leading-relaxed">
                        본 기술 문서는 <strong>기후 적응형 포도 스마트팜 FarmSense 시범사업</strong> 제안 시, 
                        평가위원 및 담당 공무원이 &quot;어떤 로직으로 작동하는지&quot;, &quot;근거는 무엇인지&quot;를 
                        홈페이지에서 직접 확인·검증할 수 있도록 구성되었습니다. 
                        지능형 로직 각 페이지에는 요약(Farmers) / 상세(Engineers) 모드로 동일 내용의 이론적 근거와 수식이 배치되어 있습니다.
                    </p>
                </section>
            </Container>
        </main>
    );
}
