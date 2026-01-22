'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText } from 'lucide-react';
import { useModal } from './providers/modal-provider';

export function PolicyModal() {
    const { isOpen, closeModal, modalType } = useModal();

    const shouldRender = isOpen && modalType === 'policy';

    return (
        <AnimatePresence>
            {shouldRender && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    {/* Overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-neutral-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        className="relative w-full max-w-[800px] h-[80vh] flex flex-col bg-[#1A1A2E] border border-secondary-green rounded-xl shadow-[0_0_30px_rgba(75,183,117,0.15)] overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0 bg-[#1A1A2E] z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-secondary-green/20 flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-secondary-green" />
                                </div>
                                <h2 className="text-xl font-serif font-bold text-white">
                                    정책 건의안 전문
                                </h2>
                            </div>
                            <button onClick={closeModal} className="text-neutral-cream/50 hover:text-white transition-colors">
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto p-8 text-neutral-cream/80 leading-relaxed font-sans space-y-6 scrollbar-thin scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">

                            <div className="border-b border-white/10 pb-6 mb-6">
                                <h1 className="text-2xl font-bold text-white mb-2">농업 데이터 독점 방지 및 이동권 보장을 위한 정책 건의서</h1>
                                <p className="text-secondary-green font-mono text-sm">디지털 농업의 공정 전환을 위하여</p>
                            </div>

                            <div className="bg-white/5 p-4 rounded text-sm space-y-1 text-neutral-400 font-mono mb-8">
                                <p>수신: 대한민국 국회 농림축산식품해양수산위원회, 농림축산식품부 장관</p>
                                <p>참조: 과학기술정보통신부, 공정거래위원회</p>
                                <p>작성자: 디지털농업정책연구소 (Digital Agriculture Policy Institute)</p>
                                <p>날짜: 2026년 1월 20일</p>
                                <p>문서 번호: DAPI-2026-KR-01</p>
                            </div>

                            <section>
                                <h3 className="text-lg font-bold text-white mb-3">1. 요약 (Executive Summary)</h3>
                                <p className="mb-2">대한민국 농업은 노동 집약적 산업에서 데이터 집약적 산업으로의 거대한 전환기를 맞이하고 있다. 스마트팜의 확산과 자율주행 농기계의 도입은 생산성 향상이라는 긍정적 효과를 가져왔으나, 동시에 '데이터 독점'과 '디지털 종속(Digital Lock-in)'이라는 새로운 구조적 위협을 야기하고 있다.</p>
                                <p className="mb-2">본 보고서는 농업 데이터의 생산 주체인 농민이 자신의 데이터에 대한 통제권을 상실하고, 거대 농기계 제조사 및 플랫폼 기업의 단순한 기술 소비자로 전락할 위험성을 경고한다. 이는 장기적으로 농민을 '디지털 소작농(Digital Sharecropper)'화 하여 농업 생태계의 혁신을 저해하고 불공정한 수익 구조를 고착화할 수 있다.</p>
                                <p>유럽연합(EU)의 「데이터법(Data Act)」 시행과 미국의 「수리할 권리(Right to Repair)」 운동 확산은 데이터 접근권과 이동권이 21세기 농업의 핵심 쟁점임을 방증한다. 이에 본 건의서는 '농업 데이터 이동권'과 '접근권'을 보장하기 위한 포괄적인 정책 로드맵을 제안한다.</p>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold text-white mb-3">2. 서론: 데이터, 농업의 새로운 토양과 쟁점</h3>
                                <h4 className="text-white font-bold mt-4 mb-2">2.1. 디지털 농업의 부상과 데이터의 자원화</h4>
                                <p>인류 문명의 시작과 함께해 온 농업은 기계화 혁명(Agriculture 3.0)을 넘어 디지털 혁명(Agriculture 4.0)의 시대로 진입했다. 과거의 농업이 토양, 햇빛, 물에 의존했다면, 현대의 정밀 농업은 데이터를 제4의 핵심 생산 요소로 삼는다. 트랙터가 지나간 궤적, 드론이 촬영한 작물의 생육 상태, 온실 내부의 온도와 습도 변화 등 영농 활동의 모든 과정은 '0'과 '1'의 디지털 신호로 기록된다.</p>
                                <h4 className="text-white font-bold mt-4 mb-2">2.2. 연구의 배경 및 목적: 디지털 소작농화의 위기</h4>
                                <p>이 새로운 '디지털 토양'의 소유권과 통제권은 모호한 상태에 놓여 있다. 농민은 자신의 경작지에서 기계와 설비를 운용하며 데이터를 '생성'하지만, 그 데이터를 수집하고 저장하며 분석하는 주체는 대부분 농기계 제조사나 플랫폼 기업이다. 데이터는 농업 생산성을 높이는 도구가 되어야 하지만, 현재는 특정 기업의 생태계에 농민을 가두는 울타리가 되고 있다.</p>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold text-white mb-3">3. 현황 분석: 한국 농업 데이터 생태계의 구조적 문제</h3>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li><strong>국내 스마트 농업의 확산과 기업의 데이터 전략:</strong> 대동, LS엠트론 등 국내 농기계 3사는 데이터 서비스 기업으로 변모를 꾀하고 있다. 데이터 수집이 기업 경쟁력 강화에는 기여하지만, 농민에게 충분한 가치를 환원하지 못하고 있다.</li>
                                    <li><strong>불공정 약관과 데이터 소유권의 향방:</strong> 약관 분석 결과, 데이터에 대한 포괄적 권리 귀속 조항과 제3자 제공 동의를 필수 조건화하는 등 농민의 권리가 침해되고 있다.</li>
                                    <li><strong>기술적 장벽(상호운용성 부재):</strong> 표준화 실패와 데이터 사일로 현상으로 인해 서로 다른 제조사의 기기 간 데이터 호환이 불가능하다.</li>
                                    <li><strong>수리할 권리와 기술 통제:</strong> 제조사들은 보안을 이유로 진단기와 소프트웨어 접근 권한을 독점하여, 농민의 자가 수리를 원천 차단하고 있다.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold text-white mb-3">4. 진단: 현행 법제도의 공백과 한계</h3>
                                <p>2024년 7월 시행된 「스마트농업 육성 및 지원에 관한 법률」은 산업 육성에 초점이 맞춰져 있어, 농민의 데이터 권리 보호 측면에서는 공백이 크다.</p>
                                <ul className="list-disc pl-5 space-y-2 mt-2">
                                    <li>정의의 부재: '스마트농업데이터'의 소유권 및 처분 권한에 대한 규정이 전무하다.</li>
                                    <li>플랫폼 중심의 사고: 데이터를 국가나 기업이 관리해야 할 자원으로만 인식한다.</li>
                                    <li>민간 의무 조항 부재: 기업이 농민에게 데이터를 개방하거나 이동시켜야 할 의무가 없다.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold text-white mb-3">5. 정책 건의: 한국형 농업 데이터 주권 확보 방안</h3>
                                <div className="bg-secondary-green/5 border border-secondary-green/20 p-4 rounded mb-4">
                                    <h4 className="text-secondary-green font-bold mb-2">[입법] (가칭) 「농업 데이터 주권 및 공정 거래에 관한 특별법」 제정</h4>
                                    <ul className="list-none space-y-2 text-sm">
                                        <li>✅ <strong>'농업 데이터 이동권' 명문화:</strong> 농민이 원할 경우 데이터를 제3자에게 전송하도록 요구할 권리 보장</li>
                                        <li>✅ <strong>불공정 약관 무효화:</strong> 데이터 독점 조항 무효화 및 표준계약서 의무화</li>
                                    </ul>
                                </div>
                                <div className="bg-secondary-green/5 border border-secondary-green/20 p-4 rounded mb-4">
                                    <h4 className="text-secondary-green font-bold mb-2">[기술] 개방형 데이터 생태계 조성</h4>
                                    <ul className="list-none space-y-2 text-sm">
                                        <li>✅ <strong>정부 보조금 연계:</strong> 표준 API를 제공하지 않는 기자재는 정부 지원 대상에서 배제</li>
                                        <li>✅ <strong>K-농업 데이터 스페이스(K-ADE) 구축:</strong> 데이터의 물리적 이동 없이 권한 관리만으로 활용 가능한 연합형 플랫폼</li>
                                    </ul>
                                </div>
                                <div className="bg-secondary-green/5 border border-secondary-green/20 p-4 rounded">
                                    <h4 className="text-secondary-green font-bold mb-2">[거버넌스] 분쟁 조정 및 협동조합 육성</h4>
                                    <ul className="list-none space-y-2 text-sm">
                                        <li>✅ <strong>분쟁조정위원회 설치:</strong> 데이터 유실, 해킹 등 분쟁의 신속한 해결</li>
                                        <li>✅ <strong>데이터 협동조합 지원:</strong> 농민이 주도하는 데이터 거버넌스 구축 지원</li>
                                    </ul>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-lg font-bold text-white mb-3">6. 결론: '데이터 주권'은 미래 농업의 주춧돌</h3>
                                <p>디지털 전환은 거스를 수 없는 흐름이지만, 그 과실이 소수 기업에 집중되어서는 안 된다. 데이터를 독점하는 자가 지배하는 '디지털 소작농'의 시대가 아닌, 데이터가 자유롭게 흘러 상생하는 '데이터 민주주의'의 시대로 나아가야 한다. 「농업 데이터 이동권」의 보장은 그 첫걸음이 될 것이다.</p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
