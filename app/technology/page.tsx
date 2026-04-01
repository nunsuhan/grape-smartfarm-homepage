export const metadata = {
    title: '기술 개요',
    description: '팜센스(FarmSense)가 기존 스마트팜을 넘어 수출 신뢰 인프라로 진화하는 방법 — 농약 안전일수 계산, 블록체인 QR, PLS 자동 판정',
};

export default function TechnologyOverviewPage() {
    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20">

            {/* ── Hero ── */}
            <section className="py-20 px-6 text-center border-b border-white/10">
                <p className="text-secondary-gold text-sm font-semibold tracking-widest uppercase mb-4">Technology Overview</p>
                <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                    스마트팜을 넘어<br />
                    <span className="text-secondary-gold">수출 신뢰의 인프라</span>로
                </h1>
                <p className="text-neutral-cream/60 text-lg max-w-2xl mx-auto">
                    팜센스는 기존 스마트팜 장비에 꽂는 플러그인입니다.<br />
                    농약 안전일수 자동 계산부터 블록체인 원산지 증명까지,
                    농가가 데이터의 주인이 되는 구조를 만듭니다.
                </p>
            </section>

            {/* ── 1. 기존 스마트팜 vs 팜센스 ── */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-4">기존 스마트팜 vs 팜센스 플러그인</h2>
                <p className="text-neutral-cream/50 text-center mb-12">스마트하게 키우는 것에서, 신뢰받고 더 비싸게 파는 것으로</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* 기존 */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <p className="text-neutral-cream/40 text-sm font-semibold mb-4 tracking-widest uppercase">기존 스마트팜 기능 (생산)</p>
                        <ul className="space-y-4">
                            {[
                                ['현재 하우스 온도/습도 모니터링', '환경 데이터 수집에 그침'],
                                ['관수/환기 원격 제어', '영농 효율 향상'],
                                ['단순 영농 일지 기록', '수동 입력, 활용 제한'],
                            ].map(([title, desc]) => (
                                <li key={title} className="flex gap-3">
                                    <span className="w-2 h-2 rounded-full bg-white/20 mt-2 shrink-0" />
                                    <div>
                                        <p className="text-white font-medium">{title}</p>
                                        <p className="text-neutral-cream/40 text-sm">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-neutral-cream/40 text-sm">결과</p>
                            <p className="text-white font-semibold mt-1">그냥 스마트하게 키움</p>
                        </div>
                    </div>

                    {/* 팜센스 */}
                    <div className="bg-secondary-gold/5 border border-secondary-gold/30 rounded-2xl p-8">
                        <p className="text-secondary-gold text-sm font-semibold mb-4 tracking-widest uppercase">팜센스 플러그인 기능 (유통/신뢰)</p>
                        <ul className="space-y-4">
                            {[
                                ['수출국별 PLS 적합성 자동 판정', '국가별 농약 기준 실시간 검증'],
                                ['블록체인 기반 디지털 원산지 증명서 발행', '위변조 불가, 수입국 신뢰 확보'],
                                ['수출 필수 서류 자동 생성', 'Invoice·Packing List 원클릭'],
                            ].map(([title, desc]) => (
                                <li key={title} className="flex gap-3">
                                    <span className="w-2 h-2 rounded-full bg-secondary-gold mt-2 shrink-0" />
                                    <div>
                                        <p className="text-white font-medium">{title}</p>
                                        <p className="text-neutral-cream/50 text-sm">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-secondary-gold/20">
                            <p className="text-secondary-gold/60 text-sm">결과</p>
                            <p className="text-white font-semibold mt-1">수출 시장에서 <span className="text-secondary-gold">'신뢰'</span>받고 더 비싸게 팔림</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── 2. 농약 안전일수 계산 ── */}
            <section className="py-20 px-6 bg-white/[0.02] border-y border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">농약 안전일수 자동 계산</h2>
                    <p className="text-neutral-cream/50 text-center mb-12">
                        온도·습도·품종을 반영한 과학적 잔류 예측 — 수확일을 더 이상 감으로 잡지 않습니다
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {[
                            {
                                step: '01',
                                title: '살포 기록 입력',
                                desc: '농약명·희석배수·살포량을 앱에 기록하면 초기 농도(C₀)를 자동 환산합니다.',
                            },
                            {
                                step: '02',
                                title: '실시간 보정 계산',
                                desc: '온도(Q10=1.22)·상대습도·품종 계수를 적용한 반감기 모델(Fantke et al. 2014)로 잔류량을 예측합니다.',
                            },
                            {
                                step: '03',
                                title: '안전수확일 알림',
                                desc: 'MRL(잔류허용기준) 70% 이하가 되는 날을 자동 계산해 D-Day로 알려줍니다.',
                            },
                        ].map((item) => (
                            <div key={item.step} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <p className="text-secondary-gold text-3xl font-bold mb-4">{item.step}</p>
                                <p className="text-white font-semibold mb-2">{item.title}</p>
                                <p className="text-neutral-cream/50 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* 계산식 표시 */}
                    <div className="bg-black/40 border border-white/10 rounded-2xl p-6 font-mono text-sm">
                        <p className="text-neutral-cream/40 mb-3 text-xs">// 핵심 계산 로직 (온도·습도·품종 보정)</p>
                        <p className="text-green-400">k_ref  = ln(2) / DT50_ref</p>
                        <p className="text-blue-400">k_T    = k_ref × 1.22<span className="text-white">^</span>((T - 20) / 10)  <span className="text-white/30">// 온도 보정</span></p>
                        <p className="text-yellow-400">f_RH   = 1 + 0.5 × ((RH - 60) / 100)  <span className="text-white/30">// 습도 보정</span></p>
                        <p className="text-orange-400">k_fin  = k_T × f_RH × K_cultivar  <span className="text-white/30">// 품종 보정</span></p>
                        <p className="text-white mt-2">C(t)   = C₀ × exp(-k_fin × t)  <span className="text-white/30">// t일 후 잔류량</span></p>
                    </div>

                    <p className="text-neutral-cream/30 text-xs text-center mt-4">
                        기반 논문: Fantke et al. (2014) Environ. Sci. Technol. · Wu &amp; Nofziger · PMC9957015 (2023)
                    </p>
                </div>
            </section>

            {/* ── 3. 유사 특허 대비 차별점 ── */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-4">특허 차별점</h2>
                <p className="text-neutral-cream/50 text-center mb-12">기존 특허를 회피하면서도 더 높은 가치를 만드는 전략</p>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-white/10">
                                <th className="text-left py-4 px-4 text-neutral-cream/40 font-normal">유사 특허 분야</th>
                                <th className="text-left py-4 px-4 text-neutral-cream/40 font-normal">기존 특허의 특징</th>
                                <th className="text-left py-4 px-4 text-secondary-gold font-normal">팜센스만의 차별점 (회피 전략)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['식품 이력 관리', '단순 생산~소비 이력 기록', '수출국별 법적 기준(PLS)과 실시간 연동'],
                                ['블록체인 물류', '물류 이동 단계별 기록', '기존 스마트팜 하드웨어 데이터와의 플러그인 연동'],
                                ['위변조 방지 QR', '복제 방지 패턴 QR 기술', '시간 데이터(Timestamp)와 지리 정보를 결합한 동적 인증'],
                            ].map(([field, existing, diff]) => (
                                <tr key={field} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                    <td className="py-5 px-4 text-white font-medium">{field}</td>
                                    <td className="py-5 px-4 text-neutral-cream/50">{existing}</td>
                                    <td className="py-5 px-4 text-secondary-gold">{diff}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── 4. 기술 비교 5행 ── */}
            <section className="py-20 px-6 bg-white/[0.02] border-y border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">기존 시스템 vs 팜센스</h2>
                    <p className="text-neutral-cream/50 text-center mb-12">5가지 핵심 기술 영역에서의 차이</p>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-4 text-neutral-cream/40 font-normal w-8">구분</th>
                                    <th className="text-left py-4 px-4 text-neutral-cream/40 font-normal">기존 시스템</th>
                                    <th className="text-left py-4 px-4 text-secondary-gold font-normal">팜센스</th>
                                    <th className="text-left py-4 px-4 text-neutral-cream/40 font-normal">차별화 핵심</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['1. 데이터 수집', '농민이 일일이 수동 입력', '기존 스마트팜 HW 데이터 자동 연동', 'API 기반 데이터 자동 정제 기술'],
                                    ['2. 신뢰 검증', '"우리 포도 좋아요" 수준의 단순 기록', '수출국별 PLS 자동 매칭 검증', '국가별 통관 기준 DB 연동 및 자동 판정'],
                                    ['3. 물류 추적', '국내 택배 수준의 단순 위치 추적', '일회용 센서 기반 글로벌 콜드체인 기록', '저비용 센서 데이터-블록체인 동기화'],
                                    ['4. 보안 방식', '중앙 서버 저장 (해킹·조작 위험)', '도커 격리 및 블록체인 분산 기록', '가상 허니팟 기반 보안 강화 아키텍처'],
                                    ['5. 소비자 연결', '생산자 정보만 보여주는 정적 QR', '시간·위치 기반 동적 정품 인증 QR', '복제 QR 탐지 및 신선도 그래프'],
                                ].map(([no, old, farmsense, point]) => (
                                    <tr key={no} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-5 px-4 text-neutral-cream/40 text-xs whitespace-nowrap">{no}</td>
                                        <td className="py-5 px-4 text-neutral-cream/50">{old}</td>
                                        <td className="py-5 px-4 text-white font-medium">{farmsense}</td>
                                        <td className="py-5 px-4 text-secondary-gold text-xs">{point}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* ── 5. 블록체인 QR 설명 ── */}
            <section className="py-20 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-4">블록체인 QR은 왜 다른가</h2>
                <p className="text-neutral-cream/50 text-center mb-12">
                    기존 QR은 URL을 담은 스티커입니다. 팜센스 QR은 살아있는 이력서입니다.
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                        <p className="text-neutral-cream/40 text-sm font-semibold mb-6 tracking-widest uppercase">기존 QR코드</p>
                        <ul className="space-y-3 text-neutral-cream/60 text-sm">
                            <li className="flex gap-2"><span className="text-red-400 mt-0.5">✕</span> 단순 URL 링크 — 복사·위조 가능</li>
                            <li className="flex gap-2"><span className="text-red-400 mt-0.5">✕</span> 생성 이후 내용 변경 불가</li>
                            <li className="flex gap-2"><span className="text-red-400 mt-0.5">✕</span> 생산자 정보만 정적으로 표시</li>
                            <li className="flex gap-2"><span className="text-red-400 mt-0.5">✕</span> 유통 경로·온도 기록 없음</li>
                        </ul>
                    </div>
                    <div className="bg-secondary-gold/5 border border-secondary-gold/30 rounded-2xl p-8">
                        <p className="text-secondary-gold text-sm font-semibold mb-6 tracking-widest uppercase">팜센스 블록체인 QR</p>
                        <ul className="space-y-3 text-neutral-cream/80 text-sm">
                            <li className="flex gap-2"><span className="text-secondary-gold mt-0.5">✓</span> 타임스탬프 + GPS를 결합한 동적 인증</li>
                            <li className="flex gap-2"><span className="text-secondary-gold mt-0.5">✓</span> 블록체인에 분산 저장 — 위변조 불가</li>
                            <li className="flex gap-2"><span className="text-secondary-gold mt-0.5">✓</span> 생산→포장→냉장→이동→수입국 도착 전 이력</li>
                            <li className="flex gap-2"><span className="text-secondary-gold mt-0.5">✓</span> 냉장 온도 이탈 여부·신선도 그래프 실시간 표시</li>
                        </ul>
                    </div>
                </div>

                {/* QR 이력 흐름 */}
                <div className="bg-black/40 border border-white/10 rounded-2xl p-8">
                    <p className="text-neutral-cream/40 text-sm mb-6 text-center">QR 하나로 확인하는 전체 이력 흐름</p>
                    <div className="flex flex-wrap items-center justify-center gap-2 text-sm">
                        {['재배 환경 데이터', '농약 살포 기록', '수확일·안전일수', '포장·검수', '냉장 출하', '글로벌 물류 추적', '수입국 통관 도착'].map((step, i, arr) => (
                            <div key={step} className="flex items-center gap-2">
                                <span className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-neutral-cream/80">{step}</span>
                                {i < arr.length - 1 && <span className="text-secondary-gold">→</span>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 6. 비즈니스 모델 비교 + 농가 협상우위 ── */}
            <section className="py-20 px-6 bg-white/[0.02] border-t border-white/10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-4">농가가 협상 우위에 선다</h2>
                    <p className="text-neutral-cream/50 text-center mb-2 max-w-2xl mx-auto">
                        지금까지 유통업체가 비용을 대고 수익도 가져갔습니다.<br />
                        팜센스는 농가가 수고와 비용을 직접 부담하는 대신,
                        <span className="text-secondary-gold font-semibold"> 데이터 소유권과 협상력을 농가에게 돌려줍니다.</span>
                    </p>
                    <p className="text-neutral-cream/30 text-sm text-center mb-12">
                        비용을 유통업체가 대고 추가 수익도 유통업체가 가져가는 관행을 뒤집는 구조
                    </p>

                    <div className="overflow-x-auto mb-12">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-white/10">
                                    <th className="text-left py-4 px-4 text-neutral-cream/40 font-normal">구분</th>
                                    <th className="text-left py-4 px-4 text-neutral-cream/40 font-normal">기존 블록체인 모델</th>
                                    <th className="text-left py-4 px-4 text-secondary-gold font-normal">팜센스 모델</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ['데이터 입력', '농민이 별도 작업 (추가 노동)', '농사 도구 사용 중 자동 축적'],
                                    ['비용 부담', '유통업체가 시스템 구축', '농가가 앱을 무료/저가로 직접 사용'],
                                    ['프리미엄 수익', '유통업체가 흡수', '데이터 소유권이 농가 → 농가가 협상력 확보'],
                                    ['농가 동기', '없음 (추가 노동만 발생)', '병해 진단·농약 정보 등 직접적 이익 제공'],
                                ].map(([no, old, farmsense]) => (
                                    <tr key={no} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="py-5 px-4 text-neutral-cream/40">{no}</td>
                                        <td className="py-5 px-4 text-neutral-cream/50">{old}</td>
                                        <td className="py-5 px-4 text-white font-medium">{farmsense}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 강조 메시지 */}
                    <div className="bg-secondary-gold/10 border border-secondary-gold/30 rounded-2xl p-8 text-center">
                        <p className="text-secondary-gold text-2xl font-bold mb-3">
                            농가가 직접 데이터를 만들고, 직접 소유하고, 직접 협상한다
                        </p>
                        <p className="text-neutral-cream/60 max-w-xl mx-auto leading-relaxed">
                            팜센스를 쓰는 농가의 포도는 단순한 농산물이 아닙니다.<br />
                            생산부터 수입국 도착까지 모든 이력이 증명된 <strong className="text-white">신뢰 자산</strong>입니다.<br />
                            그 신뢰의 가치는 이제 농가의 것입니다.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    );
}
