import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
    title: '환불·취소 정책',
    description: '팜센스(FarmSense) 서비스 환불 및 취소 정책 안내입니다.',
};

export default function RefundPolicyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-5xl py-12">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl font-bold text-white mb-4 pb-4 border-b-4 border-green-600">
                            환불·취소 정책
                        </h1>
                        <p className="text-neutral-cream/70 mb-8">
                            시행일자: 2026년 2월 28일
                        </p>

                        <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                            <p className="text-neutral-cream/90 font-medium">
                                현재 팜센스(FarmSense)는 베타 운영 기간 중이며 유료 서비스가 제공되지 않습니다.
                                정식 출시 후 유료 서비스가 시작되는 시점부터 아래 환불·취소 정책이 적용됩니다.
                            </p>
                        </div>

                        <p className="text-neutral-cream/80 leading-relaxed mb-8">
                            팜센스(FarmSense)는 이용자의 권익 보호를 위해 「전자상거래 등에서의 소비자보호에 관한 법률」에 따라 다음과 같이 환불·취소 정책을 운영합니다.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제1조 (취소 및 환불 기준)
                        </h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-white/15">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">구분</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">환불 기준</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3 font-semibold">결제 후 7일 이내<br/>(서비스 미이용 시)</td>
                                        <td className="border border-white/15 px-4 py-3">전액 환불</td>
                                    </tr>
                                    <tr className="bg-white/5">
                                        <td className="border border-white/15 px-4 py-3 font-semibold">결제 후 7일 이내<br/>(서비스 이용 시)</td>
                                        <td className="border border-white/15 px-4 py-3">이용 기간에 해당하는 금액 차감 후 환불</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3 font-semibold">결제 후 7일 초과</td>
                                        <td className="border border-white/15 px-4 py-3">잔여 기간에 대해 일할 계산 후 환불<br/><span className="text-neutral-cream/60 text-sm">(단, 사용 기간 1개월 초과 시 환불 불가)</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제2조 (환불 불가 사유)
                        </h2>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>이용자의 단순 변심으로 결제일로부터 7일이 경과한 경우</li>
                            <li>이용자의 귀책 사유로 서비스 이용이 제한된 경우 (약관 위반 등)</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제3조 (환불 절차)
                        </h2>
                        <ol className="list-decimal pl-6 mb-8 space-y-3 text-neutral-cream/80">
                            <li>앱 내 설정 메뉴 또는 이메일(artmer3061@gmail.com)로 환불 신청</li>
                            <li>회사 확인 후 영업일 기준 3일 이내 처리</li>
                            <li>카드 결제의 경우 카드사 정책에 따라 실제 환불까지 3~5영업일 소요될 수 있음</li>
                        </ol>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제4조 (서비스 장애로 인한 환불)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            회사의 귀책 사유로 서비스가 24시간 이상 중단된 경우, 해당 기간에 대한 이용료를 일할 계산하여 환불 또는 이용 기간 연장으로 보상합니다.
                        </p>

                        <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-green-400 mb-3">환불 문의</h3>
                            <p className="text-neutral-cream/80 mb-1"><strong>이메일:</strong> artmer3061@gmail.com</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>처리 시간:</strong> 영업일 기준 3일 이내</p>
                            <p className="text-neutral-cream/80 text-sm mt-3">
                                문의 시 결제일, 이메일 주소, 환불 사유를 함께 기재해 주시면 더 빠른 처리가 가능합니다.
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/15 text-neutral-cream/70 text-sm">
                            © 2026 FarmSense. All rights reserved.
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
