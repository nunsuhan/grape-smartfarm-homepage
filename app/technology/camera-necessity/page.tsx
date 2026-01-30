import { Container } from '@/components/ui/container';
import Link from 'next/link';
import {
    Thermometer,
    Camera,
    AlertTriangle,
    CheckCircle,
    ArrowRight,
    FileText,
} from 'lucide-react';

export const metadata = {
    title: '열화상·RGB-D 카메라 설치 필요성 - FarmSense',
    description: '왜 열화상 카메라와 RGB-D 카메라가 필요한가? RGB 한계, 골든타임 확보, CWSI·수확량 예측·질병 감지 근거.',
};

export default function CameraNecessityPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-4xl py-16">
                    <div className="flex items-center gap-2 text-amber-600 font-bold tracking-wide text-sm uppercase mb-4">
                        <Camera className="w-5 h-5" />
                        검증·설득 자료
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight mb-4">
                        열화상·RGB-D 카메라 설치 필요성
                    </h1>
                    <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl">
                        &quot;굳이 비용이 드는 열화상·RGB-D 카메라가 왜 필요한가?&quot; — 기존 RGB·토양 센서만으로는 해결할 수 없는 문제와, FarmSense가 선택한 센서의 <strong>비용 대비 효용</strong>을 근거와 함께 정리합니다.
                    </p>
                </Container>
            </div>

            <Container className="max-w-4xl py-12 space-y-16">
                {/* 열화상 카메라 */}
                <section>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                        <Thermometer className="w-7 h-7 text-orange-500" />
                        왜 열화상 카메라인가?
                    </h2>
                    <p className="text-neutral-700 leading-relaxed mb-6">
                        정부·평가위원은 <strong>&quot;해당 기술이 기존 방식(RGB 카메라, 토양 센서)이 해결하지 못하는 어떤 문제를 해결하는가?&quot;</strong>에 집중합니다. 열화상 카메라는 단순 온도 측정이 아니라 <strong>식물의 생리학적 골든 타임</strong>을 확보하는 비파괴적 수단입니다.
                    </p>

                    <div className="space-y-6">
                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                            <h3 className="font-bold text-neutral-900 mb-2">A. 육안으로 보이지 않는 초기 스트레스 감지 (골든 타임)</h3>
                            <ul className="text-neutral-700 space-y-2 text-sm">
                                <li><strong>RGB 한계:</strong> 잎의 색 변화·시들음 등 가시적 증상이 나타난 뒤에야 감지 → 이미 손상이 진행된 상태.</li>
                                <li><strong>열화상 차별:</strong> 식물은 스트레스 시 기공을 닫아 증산이 멈추고 잎 표면 온도가 즉시 상승. 열화상은 이 미세 온도 변화를 포착해 <strong>증상 전(Pre-symptomatic)</strong> 진단 가능.</li>
                                <li><strong>설득 포인트:</strong> &quot;작물이 색이 변해 ‘아프다’고 보이기 전, ‘목마르다’는 체온 신호를 잡아 선제 대응합니다.&quot;</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                            <h3 className="font-bold text-neutral-900 mb-2">B. 점(Point)이 아닌 면(Area) 단위 정밀 관리</h3>
                            <ul className="text-neutral-700 space-y-2 text-sm">
                                <li><strong>기존 한계:</strong> 줄기 수분 포텐셜(Ψ-stem) 측정은 파괴적·노동 집약적. 토양 수분 센서는 설치 지점 한 곳만 대표.</li>
                                <li><strong>열화상 효용:</strong> 캐노피 전체 온도를 매핑해 관개 불균일 구역·질병 핫스팟을 면 단위로 파악.</li>
                                <li><strong>설득 포인트:</strong> &quot;점 관리가 아닌 면 단위 정밀 관리로 불필요한 물 사용을 줄이고 생산성을 극대화합니다.&quot;</li>
                            </ul>
                        </div>

                        <div className="border-l-4 border-orange-500 pl-6 py-2">
                            <h3 className="font-bold text-neutral-900 mb-2">C. 질병 조기 예찰 (비용 절감)</h3>
                            <p className="text-neutral-700 text-sm">
                                노균병 등 곰팡이 감염 초기에는 병원균 활동으로 잎 온도가 달라집니다. 열화상으로 육안 증상 전에 감지해 방제 비용을 줄이고 작물 손실을 예방합니다.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl">
                        <h4 className="font-bold text-amber-900 mb-2 flex items-center gap-2">
                            <FileText className="w-4 h-4" /> DSS 신뢰성: CWSI 기반 의사결정
                        </h4>
                        <p className="text-neutral-700 text-sm leading-relaxed">
                            단순 &quot;온도가 높다&quot;가 아니라 <strong>작물 수분 스트레스 지수(CWSI)</strong>를 0~1로 정량화합니다. 기상·열화상 데이터를 머신러닝에 학습시켜 CWSI와 줄기 수분 포텐셜(Ψ-stem) 간 상관관계(R² &gt; 0.6)를 검증해, 과학적으로 입증된 관개 시점을 제안합니다. 저가형 열화상의 낮은 해상도는 <strong>VisTA-SR(초해상도)·딥러닝 분할</strong>로 보완합니다.
                        </p>
                    </div>
                </section>

                {/* RGB-D 카메라 */}
                <section>
                    <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                        <Camera className="w-7 h-7 text-blue-500" />
                        왜 RGB-D(심도) 카메라인가?
                    </h2>
                    <p className="text-neutral-700 leading-relaxed mb-6">
                        RGB-D는 2D 색상에 <strong>거리(Depth)</strong> 정보를 더해 3차원 정보를 제공합니다. 포도 시설재배에서 잎·줄기 크기 측정을 넘어 수확량 예측, 전정 지원, 질병 감지 정확도 향상에 필수입니다.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="border border-neutral-200 rounded-xl p-4">
                            <h4 className="font-bold text-neutral-900 mb-2">1. 수확량 예측</h4>
                            <p className="text-sm text-neutral-600">
                                포도 송이를 잎·가지에 가려진 환경에서도 깊이로 분리해 개수·부피 추정. RGB-D 측정치는 실제와 약 2.8~3.5cm 오차 내로, 부피→무게 추정으로 비파괴 수확량 예측에 활용됩니다.
                            </p>
                        </div>
                        <div className="border border-neutral-200 rounded-xl p-4">
                            <h4 className="font-bold text-neutral-900 mb-2">2. 전정·바이오매스</h4>
                            <p className="text-sm text-neutral-600">
                                가지 3D 골격 추출로 전정 위치 파악. 전정 전 가지 부피로 전정 잔여물 무게 추정 가능(연구에서 Kinect 기준 R²=0.80). 나무 활력 평가와 다음 시즌 비료량 조절에 활용됩니다.
                            </p>
                        </div>
                        <div className="border border-neutral-200 rounded-xl p-4">
                            <h4 className="font-bold text-neutral-900 mb-2">3. 질병 감지 정확도</h4>
                            <p className="text-sm text-neutral-600">
                                <strong>거리로 배경 제거</strong> → 포도나무(0.5~1.0m)만 남기고 잡초·땅 마스킹. <strong>깊이 불연속으로 잎 경계</strong> 추출 → 겹친 잎을 개별 객체로 분리. RGB는 병반 색·질감, Depth는 &quot;그림자 vs 병반&quot; 구분에 사용되어 노균병 등 판독 정확도를 높입니다.
                            </p>
                        </div>
                        <div className="border border-neutral-200 rounded-xl p-4">
                            <h4 className="font-bold text-neutral-900 mb-2">4. 로봇·자동화</h4>
                            <p className="text-sm text-neutral-600">
                                장애물 감지·자율 주행, 수확·방제 로봇의 작업 대상 3D 위치(x,y,z) 파악에 사용됩니다. 조명 변화가 큰 야외에서도 거리 정보는 상대적으로 안정적입니다.
                            </p>
                        </div>
                    </div>

                    <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                        <h4 className="font-bold text-blue-900 mb-2">요약: RGB만으로 부족한 이유</h4>
                        <p className="text-neutral-700 text-sm leading-relaxed">
                            RGB는 색·형상만 제공합니다. 복잡한 포도원에서는 잡초와 잎이 비슷한 색으로 구분이 어렵고, 겹친 잎·그림자를 병반으로 오인할 수 있습니다. RGB-D는 &quot;거리 필터&quot;와 &quot;경계선(깊이 불연속)&quot;으로 관심 영역만 정제해 AI가 더 정확하게 수확량·질병을 판단하도록 합니다.
                        </p>
                    </div>
                </section>

                {/* 정리 */}
                <section className="border-t border-neutral-200 pt-10">
                    <h2 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        정리
                    </h2>
                    <p className="text-neutral-700 leading-relaxed mb-4">
                        FarmSense는 단순 카메라 도입이 아니라, <strong>식물의 생체 신호(열화상 온도)와 3차원 구조(RGB-D)</strong>를 AI(VisTA-SR, 딥러닝 분할·융합)로 해석해 관개·방제·수확 시점을 제안하는 지능형 농업 비서입니다. 열화상·RGB-D 설치 필요성은 위 근거로 검증·설득 자료로 활용할 수 있습니다.
                    </p>
                    <p className="text-sm text-neutral-500">
                        관련 로직: <Link href="/intelligent-logic/irrigation-water" className="text-green-600 hover:underline">관수_물관리</Link>(CWSI), <Link href="/intelligent-logic/yield-prediction" className="text-green-600 hover:underline">수확량_예측</Link>(RGB-D), <Link href="/technology/docs" className="text-green-600 hover:underline">기술 문서</Link>
                    </p>
                </section>
            </Container>
        </main>
    );
}
