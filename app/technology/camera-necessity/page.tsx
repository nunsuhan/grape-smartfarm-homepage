import { Container } from '@/components/ui/container';
import Link from 'next/link';
import {
    Thermometer,
    Camera,
    AlertTriangle,
    CheckCircle,
    ArrowRight,
    FileText,
    Leaf,
    Sun,
    Droplets,
    Bug,
    FlameKindling,
    Scan,
    MapPin,
    Activity,
    Waves,
} from 'lucide-react';

export const metadata = {
    title: '열화상·RGB-D 카메라 설치 필요성 - FarmSense',
    description: '왜 열화상 카메라와 RGB-D 카메라가 필요한가? RGB 한계, 골든타임 확보, CWSI·수확량 예측·질병 감지 근거.',
};

export default function CameraNecessityPage() {
    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-16">
                    <div className="flex items-center gap-2 text-amber-400 font-bold tracking-wide text-sm uppercase mb-4">
                        <Camera className="w-5 h-5" />
                        검증·설득 자료
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                        열화상·RGB-D 카메라 설치 필요성
                    </h1>
                    <p className="text-xl text-neutral-cream/70 leading-relaxed max-w-3xl">
                        &quot;굳이 비용이 드는 열화상·RGB-D 카메라가 왜 필요한가?&quot; — 기존 RGB·토양 센서만으로는 해결할 수 없는 문제와, FarmSense가 선택한 센서의 <strong>비용 대비 효용</strong>을 근거와 함께 정리합니다.
                    </p>
                </Container>
            </div>

            <Container className="max-w-5xl py-12 space-y-16">
                {/* 열화상 카메라 */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Thermometer className="w-7 h-7 text-orange-500" />
                        왜 열화상 카메라인가?
                    </h2>
                    <p className="text-neutral-cream/80 leading-relaxed mb-6">
                        정부·평가위원은 <strong>&quot;해당 기술이 기존 방식(RGB 카메라, 토양 센서)이 해결하지 못하는 어떤 문제를 해결하는가?&quot;</strong>에 집중합니다. 열화상 카메라는 단순 온도 측정이 아니라 <strong>식물의 생리학적 골든 타임</strong>을 확보하는 비파괴적 수단입니다.
                    </p>

                    <div className="space-y-6">
                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                            <h3 className="font-bold text-white mb-2">A. 육안으로 보이지 않는 초기 스트레스 감지 (골든 타임)</h3>
                            <ul className="text-neutral-cream/80 space-y-2 text-sm">
                                <li><strong>RGB 한계:</strong> 잎의 색 변화·시들음 등 가시적 증상이 나타난 뒤에야 감지 → 이미 손상이 진행된 상태.</li>
                                <li><strong>열화상 차별:</strong> 식물은 스트레스 시 기공을 닫아 증산이 멈추고 잎 표면 온도가 즉시 상승. 열화상은 이 미세 온도 변화를 포착해 <strong>증상 전(Pre-symptomatic)</strong> 진단 가능.</li>
                                <li><strong>설득 포인트:</strong> &quot;작물이 색이 변해 ‘아프다’고 보이기 전, ‘목마르다’는 체온 신호를 잡아 선제 대응합니다.&quot;</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                            <h3 className="font-bold text-white mb-2">B. 점(Point)이 아닌 면(Area) 단위 정밀 관리</h3>
                            <ul className="text-neutral-cream/80 space-y-2 text-sm">
                                <li><strong>기존 한계:</strong> 줄기 수분 포텐셜(Ψ-stem) 측정은 파괴적·노동 집약적. 토양 수분 센서는 설치 지점 한 곳만 대표.</li>
                                <li><strong>열화상 효용:</strong> 캐노피 전체 온도를 매핑해 관개 불균일 구역·질병 핫스팟을 면 단위로 파악.</li>
                                <li><strong>설득 포인트:</strong> &quot;점 관리가 아닌 면 단위 정밀 관리로 불필요한 물 사용을 줄이고 생산성을 극대화합니다.&quot;</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                            <h3 className="font-bold text-white mb-2">C. 질병 조기 예찰 (비용 절감)</h3>
                            <p className="text-neutral-cream/80 text-sm">
                                노균병 등 곰팡이 감염 초기에는 병원균 활동으로 잎 온도가 달라집니다. 열화상으로 육안 증상 전에 감지해 방제 비용을 줄이고 작물 손실을 예방합니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                        <h4 className="font-bold text-amber-400 mb-2 flex items-center gap-2">
                            <FileText className="w-4 h-4" /> DSS 신뢰성: CWSI 기반 의사결정
                        </h4>
                        <p className="text-neutral-cream/80 text-sm leading-relaxed">
                            단순 &quot;온도가 높다&quot;가 아니라 <strong>작물 수분 스트레스 지수(CWSI)</strong>를 0~1로 정량화합니다. 기상·열화상 데이터를 머신러닝에 학습시켜 CWSI와 줄기 수분 포텐셜(Ψ-stem) 간 상관관계(R² &gt; 0.6)를 검증해, 과학적으로 입증된 관개 시점을 제안합니다. 저가형 열화상의 낮은 해상도는 <strong>VisTA-SR(초해상도)·딥러닝 분할</strong>로 보완합니다.
                        </p>
                    </div>
                </section>

                {/* RGB-D 카메라 */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <Camera className="w-7 h-7 text-blue-500" />
                        왜 RGB-D(심도) 카메라인가?
                    </h2>
                    <p className="text-neutral-cream/80 leading-relaxed mb-6">
                        RGB-D는 2D 색상에 <strong>거리(Depth)</strong> 정보를 더해 3차원 정보를 제공합니다. 포도 시설재배에서 잎·줄기 크기 측정을 넘어 수확량 예측, 전정 지원, 질병 감지 정확도 향상에 필수입니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="border border-white/10 rounded-xl p-4">
                            <h4 className="font-bold text-white mb-2">1. 수확량 예측</h4>
                            <p className="text-sm text-neutral-cream/70">
                                포도 송이를 잎·가지에 가려진 환경에서도 깊이로 분리해 개수·부피 추정. RGB-D 측정치는 실제와 약 2.8~3.5cm 오차 내로, 부피→무게 추정으로 비파괴 수확량 예측에 활용됩니다.
                            </p>
                        </div>
                        <div className="border border-white/10 rounded-xl p-4">
                            <h4 className="font-bold text-white mb-2">2. 전정·바이오매스</h4>
                            <p className="text-sm text-neutral-cream/70">
                                가지 3D 골격 추출로 전정 위치 파악. 전정 전 가지 부피로 전정 잔여물 무게 추정 가능(연구에서 Kinect 기준 R²=0.80). 나무 활력 평가와 다음 시즌 비료량 조절에 활용됩니다.
                            </p>
                        </div>
                        <div className="border border-white/10 rounded-xl p-4">
                            <h4 className="font-bold text-white mb-2">3. 질병 감지 정확도</h4>
                            <p className="text-sm text-neutral-cream/70">
                                <strong>거리로 배경 제거</strong> → 포도나무(0.5~1.0m)만 남기고 잡초·땅 마스킹. <strong>깊이 불연속으로 잎 경계</strong> 추출 → 겹친 잎을 개별 객체로 분리. RGB는 병반 색·질감, Depth는 &quot;그림자 vs 병반&quot; 구분에 사용되어 노균병 등 판독 정확도를 높입니다.
                            </p>
                        </div>
                        <div className="border border-white/10 rounded-xl p-4">
                            <h4 className="font-bold text-white mb-2">4. 로봇·자동화</h4>
                            <p className="text-sm text-neutral-cream/70">
                                장애물 감지·자율 주행, 수확·방제 로봇의 작업 대상 3D 위치(x,y,z) 파악에 사용됩니다. 조명 변화가 큰 야외에서도 거리 정보는 상대적으로 안정적입니다.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                        <h4 className="font-bold text-blue-400 mb-2">요약: RGB만으로 부족한 이유</h4>
                        <p className="text-neutral-cream/80 text-sm leading-relaxed">
                            RGB는 색·형상만 제공합니다. 복잡한 포도원에서는 잡초와 잎이 비슷한 색으로 구분이 어렵고, 겹친 잎·그림자를 병반으로 오인할 수 있습니다. RGB-D는 &quot;거리 필터&quot;와 &quot;경계선(깊이 불연속)&quot;으로 관심 영역만 정제해 AI가 더 정확하게 수확량·질병을 판단하도록 합니다.
                        </p>
                    </div>
                </section>

                {/* CWSI 수관 온도 모니터링 — 메인 용도 */}
                <section className="border-t border-white/10 pt-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 text-xs font-bold uppercase tracking-wide mb-4">
                        <Activity className="w-3.5 h-3.5" />
                        열화상의 핵심 용도 (70%)
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Waves className="w-7 h-7 text-orange-500" />
                        수관(캐노피) 온도 모니터링 — CWSI 기반 구역 관리
                    </h2>
                    <p className="text-neutral-cream/70 leading-relaxed mb-2">
                        전 세계 정밀농업에서 열화상을 쓰는 이유의 <strong className="text-white">70% 이상이 수분 스트레스 감지(CWSI)</strong>입니다.
                        개별 잎의 병해 감지보다 먼저, 나무 전체의 건강 상태를 읽는 것이 열화상의 메인 역할입니다.
                    </p>
                    <p className="text-neutral-cream/70 leading-relaxed mb-8">
                        건강한 잎은 기공을 열고 증산해 잎 온도가 기온보다 <strong className="text-white">2~5℃ 낮습니다.</strong>
                        수분 스트레스·뿌리 문제가 생기면 기공을 닫아 증산이 줄고, 잎 온도가 기온과 같아지거나 높아집니다.
                        이 온도 차이를 <strong className="text-orange-400">CWSI(Crop Water Stress Index, 0~1)</strong>로 수치화해 관개 시점을 결정합니다.
                    </p>

                    {/* 색상 구역 안내 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-5">
                            <div className="text-2xl mb-2">🔵</div>
                            <h4 className="font-bold text-blue-300 mb-1 text-sm">정상 구역</h4>
                            <p className="text-neutral-cream/60 text-xs leading-relaxed">잎 온도 &lt; 기온 2~5℃<br />기공 개방, 증산 활발<br />수분·영양 공급 정상</p>
                        </div>
                        <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-5">
                            <div className="text-2xl mb-2">🟡</div>
                            <h4 className="font-bold text-yellow-300 mb-1 text-sm">주의 구역</h4>
                            <p className="text-neutral-cream/60 text-xs leading-relaxed">잎 온도 ≈ 기온<br />기공 부분 폐쇄, 증산 감소<br />관수 검토 필요</p>
                        </div>
                        <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-5">
                            <div className="text-2xl mb-2">🔴</div>
                            <h4 className="font-bold text-red-300 mb-1 text-sm">위험 구역</h4>
                            <p className="text-neutral-cream/60 text-xs leading-relaxed">잎 온도 &gt; 기온<br />기공 폐쇄, 증산 정지<br />즉시 관수 또는 원인 조사</p>
                        </div>
                    </div>

                    {/* 시기별 수관 온도 활용 */}
                    <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-orange-400" />
                        시기별 수관 온도 활용
                    </h3>
                    <div className="space-y-4 mb-8">
                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="shrink-0 w-16 text-center">
                                <span className="text-green-400 font-bold text-sm">5월</span>
                                <p className="text-neutral-cream/40 text-xs">전엽~신초</p>
                            </div>
                            <div>
                                <h4 className="text-white font-medium text-sm mb-1">나무별 건강 격차 파악</h4>
                                <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                    잎이 펴지기 시작하면 나무별 온도 차이가 드러납니다. 기온 25℃일 때 정상 나무 잎 온도 20~22℃, 문제 나무 24~26℃.
                                    눈으로는 멀쩡해 보여도 뿌리 활착 불량·토양 배수 문제·영양 결핍을 선행 감지합니다.
                                    <strong className="text-white"> 이 시점의 베이스라인 수집이 여름 관리의 기준점</strong>이 됩니다.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                            <div className="shrink-0 w-16 text-center">
                                <span className="text-orange-400 font-bold text-sm">6~8월</span>
                                <p className="text-neutral-cream/40 text-xs">본격 생육</p>
                            </div>
                            <div className="space-y-3">
                                <div>
                                    <h4 className="text-white font-medium text-sm mb-0.5">① 관수 구역 판단 (가장 실용적)</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        FLIR로 밭을 훑으면 수분 스트레스 구역이 색으로 바로 보입니다. 토양수분 센서는 꽂힌 한 지점만 대표하지만,
                                        열화상은 <strong className="text-white">밭 전체 면적을 한 번에</strong> 보여줍니다. "어디에 물을 줄지"를 직관적으로 결정.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm mb-0.5">② 병해 확산 범위 파악</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        감염이 어디까지 퍼졌는지 수관 전체로 범위를 가늠합니다. 국소 살포 범위를 정하는 데 직접 활용.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-white font-medium text-sm mb-0.5">③ 착색기 품질 구역 관리</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        수관 온도 불균일 → 착색 불균일. 온도 높은 구역 송이는 착색 빠르고, 낮은 구역은 느립니다.
                                        수확 시기를 구역별로 다르게 잡아 <strong className="text-white">전체 품질 균일도 향상.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FarmSense 워크플로우 */}
                    <div className="p-6 bg-neutral-900 border border-orange-500/20 rounded-xl font-mono text-xs leading-loose">
                        <p className="text-orange-400 font-bold mb-3 font-sans text-sm not-italic">[수관 온도 기반 구역 관리 워크플로우]</p>
                        <p className="text-neutral-cream/70">농민이 FLIR 들고 밭 끝에서 끝까지 걸으며 수관 스캔</p>
                        <p className="text-neutral-cream/50 mt-2">정상 구역: 파란색~초록색 (잎 온도 &lt; 기온)</p>
                        <p className="text-yellow-400/80">주의 구역: 노란색 (잎 온도 ≈ 기온) → 수분 스트레스</p>
                        <p className="text-red-400/80">위험 구역: 빨간색 (잎 온도 &gt; 기온) → 심각한 문제</p>
                        <div className="mt-3 border-t border-white/10 pt-3 space-y-1 text-neutral-cream/60">
                            <p>→ 주의 구역 발견 시 사진 촬영 후 FarmSense 앱 업로드</p>
                            <p className="text-green-400/80">→ 앱: &quot;3번 줄 수분 스트레스 감지. 관수 권장&quot;</p>
                            <p>→ 토양수분 센서 데이터와 교차 검증 → 정확도 향상</p>
                        </div>
                    </div>

                    <div className="mt-6 p-5 bg-white/5 border border-white/10 rounded-xl">
                        <p className="text-neutral-cream/80 text-sm leading-relaxed">
                            <strong className="text-orange-400">FarmSense 포지셔닝:</strong> "병해 감지용"으로만 팔면 병 많은 시즌에 한정됩니다.
                            <strong className="text-white"> "수관 온도 관리 + 병해 조기 감지"</strong>로 팔면 5월 베이스라인 수집부터 9월 수확까지
                            5개월 내내 가치를 제공하는 도구가 됩니다. 시범 농가 설득이 훨씬 쉬워지는 이유입니다.
                        </p>
                    </div>
                </section>

                {/* 생육 시기별 열화상 병해 감지 */}
                <section className="border-t border-white/10 pt-10">
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                        <Scan className="w-7 h-7 text-orange-500" />
                        열화상으로 잡을 수 있는 병·생리장해 — 생육 시기별 안내
                    </h2>
                    <p className="text-neutral-cream/70 leading-relaxed mb-8">
                        열화상 카메라는 식물의 <strong className="text-white">체온(잎 표면 온도)</strong>을 읽습니다.
                        병원균 활동·수분 스트레스·생리장해가 생기면 체온이 변하고, 열화상은 그 변화를 <strong className="text-orange-400">육안 증상보다 1~3일 먼저</strong> 포착합니다.
                        아래는 포도 생육 단계별로 열화상이 감지할 수 있는 주요 병해·생리장해입니다.
                    </p>

                    {/* 시기별 카드 */}
                    <div className="space-y-6">

                        {/* 5월 */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-3 px-6 py-4 bg-green-500/10 border-b border-white/10">
                                <Leaf className="w-5 h-5 text-green-400 shrink-0" />
                                <div>
                                    <span className="text-green-400 font-bold text-sm uppercase tracking-wide">5월</span>
                                    <span className="text-neutral-cream/60 text-sm ml-2">신초 신장기 · 잎 전개기</span>
                                </div>
                            </div>
                            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🌫 노균병 초기</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        균사 침투 직후 감염 잎의 기공이 부분 폐쇄 → 잎 온도 <strong className="text-orange-300">0.5~1.5℃ 상승</strong>. 육안으로는 아직 노란 반점 없음. 열화상으로 핫스팟 발견 즉시 예방약 살포 가능.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🤍 흰가루병 초기</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        분생포자 발아 시 잎 표면 대사 변화로 온도 미세 상승. 어린 잎에서 시작되므로 <strong className="text-orange-300">신초 끝 부위</strong>를 집중 스캔.
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-5">
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2 text-xs text-orange-300">
                                    <strong>열화상 촬영 팁:</strong> 오전 10~11시, 맑은 날 촬영 권장. 비 직후 또는 흐린 날은 온도 차이가 줄어 감도 저하.
                                </div>
                            </div>
                        </div>

                        {/* 6월 */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-3 px-6 py-4 bg-yellow-500/10 border-b border-white/10">
                                <Droplets className="w-5 h-5 text-yellow-400 shrink-0" />
                                <div>
                                    <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide">6월</span>
                                    <span className="text-neutral-cream/60 text-sm ml-2">개화기 · 착과기</span>
                                </div>
                            </div>
                            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🌫 노균병 급속 확산</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        장마 전후 포자 폭발적 증가. 감염 잎 온도가 <strong className="text-orange-300">건전 잎보다 1~2℃ 높음</strong>. 열화상으로 포장 내 감염 분포도 작성 → 집중 방제 구역 특정.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🤍 흰가루병 심화</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        어린 열매 표면 감염 시 과립 온도 차이 발생. 열화상으로 이삭 단위 감염 여부 스캔 가능. 육안 확인 전 <strong className="text-orange-300">2~3일 선행 감지</strong>.
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-5">
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2 text-xs text-orange-300">
                                    <strong>열화상 촬영 팁:</strong> 개화기 약제 살포 전 스캔 → 감염 구역 파악 후 살포. 약제 낭비 30% 이상 절감 가능.
                                </div>
                            </div>
                        </div>

                        {/* 7월 */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-3 px-6 py-4 bg-orange-500/10 border-b border-white/10">
                                <Bug className="w-5 h-5 text-orange-400 shrink-0" />
                                <div>
                                    <span className="text-orange-400 font-bold text-sm uppercase tracking-wide">7월</span>
                                    <span className="text-neutral-cream/60 text-sm ml-2">과립 비대기</span>
                                </div>
                            </div>
                            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🟤 탄저병</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        감염 과립은 수분 이동 장애로 표면 온도 <strong className="text-orange-300">0.8~1.2℃ 상승</strong>. 과방 내 감염 과립 위치 파악 → 조기 제거로 확산 차단.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🍂 갈색무늬병</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        병반 형성 잎은 광합성 저하로 온도 하강. 건전 잎과 <strong className="text-orange-300">온도 차 −0.5~−1℃</strong>의 저온 패치로 감지. 7월 중순 이후 집중 관찰.
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-5">
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2 text-xs text-orange-300">
                                    <strong>열화상 촬영 팁:</strong> 과립 비대기에는 과방 방향(아래쪽)으로 카메라 각도 조정. 잎이 아닌 열매 온도에 집중.
                                </div>
                            </div>
                        </div>

                        {/* 8월 */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-3 px-6 py-4 bg-red-500/10 border-b border-white/10">
                                <Sun className="w-5 h-5 text-red-400 shrink-0" />
                                <div>
                                    <span className="text-red-400 font-bold text-sm uppercase tracking-wide">8월</span>
                                    <span className="text-neutral-cream/60 text-sm ml-2">착색기 · 고온기</span>
                                </div>
                            </div>
                            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">☀️ 일소(Sunburn)</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        열화상의 <strong className="text-orange-300">가장 강력한 활용처</strong>. 과방 표면 온도 40℃ 이상이면 일소 위험. 열화상으로 고온 과방 실시간 모니터링 → 차광망·살수 등 즉각 대응. 예방 가능 손실 40~60%.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🫐 축과병(Berry Shrivel)</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        과립 내 수분 이동 차단 → 축과 부위 온도 <strong className="text-orange-300">주변 대비 1~2℃ 상승</strong>. 착색 불균일 발생 전, 열화상으로 위험 과방 사전 식별.
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-5">
                                <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2 text-xs text-red-300">
                                    <strong>⚠ 일소 경보:</strong> 열화상 연속 스캔(1시간 간격)으로 과방 온도 임계치(38℃) 도달 시 자동 알림 → FarmSense 앱 푸시 알림 연동.
                                </div>
                            </div>
                        </div>

                        {/* 9월 */}
                        <div className="rounded-2xl border border-white/10 overflow-hidden">
                            <div className="flex items-center gap-3 px-6 py-4 bg-purple-500/10 border-b border-white/10">
                                <FlameKindling className="w-5 h-5 text-purple-400 shrink-0" />
                                <div>
                                    <span className="text-purple-400 font-bold text-sm uppercase tracking-wide">9월</span>
                                    <span className="text-neutral-cream/60 text-sm ml-2">수확기</span>
                                </div>
                            </div>
                            <div className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">💥 열과(Cracking)</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        갑작스러운 수분 흡수로 과피 균열 직전 과립 내압 증가. 열화상으로 <strong className="text-orange-300">과방 온도 불균일 패턴</strong> 감지 → 균열 전 수확 시기 조정.
                                    </p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-1 text-sm">🩶 잿빛곰팡이병</h4>
                                    <p className="text-neutral-cream/60 text-xs leading-relaxed">
                                        감염 과방은 세포 붕괴로 온도 하강 패치 형성. 육안으로 회색 곰팡이 보이기 <strong className="text-orange-300">1~2일 전</strong> 저온 이상 패치로 감지 가능.
                                    </p>
                                </div>
                            </div>
                            <div className="px-6 pb-5">
                                <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2 text-xs text-orange-300">
                                    <strong>열화상 촬영 팁:</strong> 수확 2주 전부터 매일 아침 스캔. 저온 이상 패치 발견 즉시 수확 순서 조정 및 격리.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 요약 표 */}
                    <div className="mt-10 overflow-x-auto">
                        <table className="w-full text-sm border border-white/10 rounded-xl overflow-hidden">
                            <thead>
                                <tr className="bg-white/10 text-neutral-cream/90">
                                    <th className="text-left px-4 py-3 font-bold">시기</th>
                                    <th className="text-left px-4 py-3 font-bold">병해·장해</th>
                                    <th className="text-left px-4 py-3 font-bold">열화상 신호</th>
                                    <th className="text-left px-4 py-3 font-bold">선행 감지</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-green-400 font-medium">5월</td>
                                    <td className="px-4 py-3 text-neutral-cream/80">노균병·흰가루병 초기</td>
                                    <td className="px-4 py-3 text-orange-300">+0.5~1.5℃ 상승</td>
                                    <td className="px-4 py-3 text-neutral-cream/60">1~3일 선행</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-yellow-400 font-medium">6월</td>
                                    <td className="px-4 py-3 text-neutral-cream/80">노균병 확산·흰가루병</td>
                                    <td className="px-4 py-3 text-orange-300">+1~2℃ 상승</td>
                                    <td className="px-4 py-3 text-neutral-cream/60">2~3일 선행</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-orange-400 font-medium">7월</td>
                                    <td className="px-4 py-3 text-neutral-cream/80">탄저병·갈색무늬병</td>
                                    <td className="px-4 py-3 text-orange-300">±0.5~1.2℃ 변화</td>
                                    <td className="px-4 py-3 text-neutral-cream/60">1~2일 선행</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-red-400 font-medium">8월</td>
                                    <td className="px-4 py-3 text-neutral-cream/80">일소·축과병</td>
                                    <td className="px-4 py-3 text-orange-300">40℃ 초과 / +1~2℃</td>
                                    <td className="px-4 py-3 text-neutral-cream/60">실시간 예방</td>
                                </tr>
                                <tr className="hover:bg-white/5">
                                    <td className="px-4 py-3 text-purple-400 font-medium">9월</td>
                                    <td className="px-4 py-3 text-neutral-cream/80">열과·잿빛곰팡이</td>
                                    <td className="px-4 py-3 text-orange-300">저온 패치 / 불균일</td>
                                    <td className="px-4 py-3 text-neutral-cream/60">1~2일 선행</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 p-5 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                        <p className="text-amber-300 text-sm leading-relaxed">
                            <strong>FLIR One Pro 기준:</strong> −20~400℃ 측정, ±0.15℃ 정밀도, 160×120 열화상 해상도.
                            FarmSense는 저해상도 단점을 <strong>VisTA-SR 초해상도 처리</strong>로 보완해 농가가 고가 카메라 없이도 전문가 수준의 예찰이 가능하도록 지원합니다.
                        </p>
                    </div>
                </section>

                {/* 정리 */}
                <section className="border-t border-white/10 pt-10">
                    <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-400" />
                        정리
                    </h2>
                    <p className="text-neutral-cream/80 leading-relaxed mb-4">
                        FarmSense는 단순 카메라 도입이 아니라, <strong>식물의 생체 신호(열화상 온도)와 3차원 구조(RGB-D)</strong>를 AI(VisTA-SR, 딥러닝 분할·융합)로 해석해 관개·방제·수확 시점을 제안하는 지능형 농업 비서입니다. 열화상·RGB-D 설치 필요성은 위 근거로 검증·설득 자료로 활용할 수 있습니다.
                    </p>
                    <p className="text-sm text-neutral-cream/60">
                        관련 로직: <Link href="/intelligent-logic/irrigation-water" className="text-green-400 hover:underline">관수_물관리</Link>(CWSI), <Link href="/intelligent-logic/yield-prediction" className="text-green-400 hover:underline">수확량_예측</Link>(RGB-D), <Link href="/technology/docs" className="text-green-400 hover:underline">기술 문서</Link>
                    </p>
                </section>
            </Container>
        </main>
    );
}
