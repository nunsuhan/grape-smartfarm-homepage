import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';

export const metadata = {
    title: '환불정책 | 팜센스(FarmSense)',
    description: '팜센스(FarmSense) 서비스 환불 및 취소 정책 안내입니다.',
};

export default function RefundPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-5xl py-12">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl font-bold text-white mb-4 pb-4 border-b-4 border-green-600">
                            환불정책
                        </h1>
                        <p className="text-neutral-cream/70 mb-8">
                            시행일자: 2026년 1월 1일
                        </p>

                        <p className="text-neutral-cream/80 leading-relaxed mb-8">
                            <strong>팜센스(FarmSense)</strong>(이하 &ldquo;회사&rdquo;)는 이용자의 권익 보호를 위해 「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 다음과 같이 환불정책을 운영합니다.
                        </p>

                        {/* 제1조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제1조 (서비스 요금 안내)
                        </h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-white/15">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">구독 유형</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">요금</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">결제 방식</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3">월간 구독</td>
                                        <td className="border border-white/15 px-4 py-3 font-semibold">10,000원/월</td>
                                        <td className="border border-white/15 px-4 py-3">자동결제 (빌링키 방식)</td>
                                    </tr>
                                    <tr className="bg-white/5">
                                        <td className="border border-white/15 px-4 py-3">연간 구독</td>
                                        <td className="border border-white/15 px-4 py-3 font-semibold">100,000원/년</td>
                                        <td className="border border-white/15 px-4 py-3">단건 결제</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 제2조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제2조 (월간 구독 중도해지)
                        </h2>
                        <div className="bg-yellow-500/10 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                            <p className="text-neutral-cream/90 font-semibold mb-2">
                                월간 구독 중도해지 시 유의사항
                            </p>
                            <p className="text-neutral-cream/80">
                                월간 구독은 자동결제(빌링키) 방식으로 운영되며, 해지 시 아래 정책이 적용됩니다.
                            </p>
                        </div>
                        <ul className="list-disc pl-6 mb-4 space-y-3 text-neutral-cream/80">
                            <li>
                                <strong>해지 신청 시:</strong> 해지를 신청하면 다음 결제일부터 자동결제가 중단됩니다.
                            </li>
                            <li>
                                <strong>당월 이용:</strong> 해지 신청 후에도 현재 결제 주기의 남은 기간 동안은 서비스를 계속 이용할 수 있습니다.
                            </li>
                            <li className="font-semibold text-neutral-cream/90">
                                <strong>당월 결제분 환불 불가:</strong> 이미 결제된 당월 이용료는 환불되지 않습니다.
                            </li>
                        </ul>
                        <p className="text-neutral-cream/80 mb-8">
                            자동결제 해지는 다음 결제일 전일까지 신청해야 하며, 결제일 당일 해지 신청 시 해당 결제 건은 환불되지 않습니다.
                        </p>

                        {/* 제3조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제3조 (연간 구독 환불)
                        </h2>
                        <div className="overflow-x-auto mb-6">
                            <table className="min-w-full border-collapse border border-white/15">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">구분</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">환불 기준</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3 font-semibold">결제 후 7일 이내</td>
                                        <td className="border border-white/15 px-4 py-3">
                                            <span className="text-green-400 font-semibold">전액 환불</span>
                                        </td>
                                    </tr>
                                    <tr className="bg-white/5">
                                        <td className="border border-white/15 px-4 py-3 font-semibold">결제 후 7일 초과</td>
                                        <td className="border border-white/15 px-4 py-3">
                                            남은 개월 수 기준 일할 계산 환불<br />
                                            <span className="text-neutral-cream/60 text-sm">(월 10,000원 기준으로 이용 개월 수 차감 후 잔여 금액 환불)</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3 font-semibold">서비스 미이용 시</td>
                                        <td className="border border-white/15 px-4 py-3">
                                            결제 후 30일 이내 전액 환불 가능<br />
                                            <span className="text-neutral-cream/60 text-sm">(서비스 이용 이력이 전혀 없는 경우에 한함)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                            <h3 className="text-lg font-bold text-green-400 mb-3">연간 구독 환불 계산 예시</h3>
                            <p className="text-neutral-cream/80 mb-2">
                                연간 구독(100,000원) 결제 후 3개월 이용 시:
                            </p>
                            <p className="text-neutral-cream/80">
                                환불 금액 = 100,000원 - (10,000원 × 3개월) = <strong className="text-white">70,000원 환불</strong>
                            </p>
                        </div>

                        {/* 제4조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제4조 (환불 불가 사유)
                        </h2>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>월간 구독의 당월 결제분</li>
                            <li>이용자의 귀책 사유로 서비스 이용이 제한된 경우 (약관 위반 등)</li>
                            <li>연간 구독 결제 후 7일 초과 및 서비스 이용 이력이 있는 경우의 단순 변심</li>
                        </ul>

                        {/* 제5조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제5조 (환불 신청 방법)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            환불은 아래 방법으로 신청하실 수 있습니다.
                        </p>
                        <div className="bg-white/5 border border-white/10 rounded-lg p-6 mb-8 space-y-3">
                            <p className="text-neutral-cream/80">
                                <strong className="text-white">이메일:</strong>{' '}
                                <a href="mailto:contact@farmsense.kr" className="text-green-400 hover:text-green-300 transition-colors">
                                    contact@farmsense.kr
                                </a>
                            </p>
                            <p className="text-neutral-cream/80">
                                <strong className="text-white">전화:</strong>{' '}
                                <a href="tel:07080647956" className="text-green-400 hover:text-green-300 transition-colors">
                                    070-8064-7956
                                </a>
                            </p>
                            <p className="text-neutral-cream/60 text-sm mt-3">
                                환불 신청 시 결제일, 휴대폰 번호, 환불 사유를 함께 기재해 주시면 더 빠른 처리가 가능합니다.
                            </p>
                        </div>

                        {/* 제6조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제6조 (환불 처리 기간)
                        </h2>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>환불 신청 접수 후 <strong>영업일 기준 3~5일 이내</strong> 처리됩니다.</li>
                            <li>카드 결제의 경우 카드사 정책에 따라 실제 환불 반영까지 추가로 3~5영업일이 소요될 수 있습니다.</li>
                            <li>환불은 원결제 수단으로 처리됩니다.</li>
                        </ul>

                        {/* 제7조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제7조 (서비스 장애로 인한 보상)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            회사의 귀책 사유로 서비스가 24시간 이상 중단된 경우, 해당 기간에 대한 이용료를 일할 계산하여 환불 또는 이용 기간 연장으로 보상합니다.
                        </p>

                        {/* 문의 */}
                        <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-green-400 mb-3">환불 문의</h3>
                            <p className="text-neutral-cream/80 mb-1"><strong>이메일:</strong> contact@farmsense.kr</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>전화:</strong> 070-8064-7956</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>처리 기간:</strong> 영업일 기준 3~5일 이내</p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/15 text-neutral-cream/70 text-sm">
                            © 2026 FarmSense. All rights reserved.
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}
