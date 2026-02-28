import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
    title: '이용약관 - FarmSense',
    description: 'FarmSense 서비스 이용약관 및 결제 안내',
};

export default function TermsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-5xl py-12">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl font-bold text-white mb-4 pb-4 border-b-4 border-green-600">
                            이용약관
                        </h1>
                        <p className="text-neutral-cream/70 mb-8">
                            시행일자: 2026년 2월 28일
                        </p>

                        <p className="text-neutral-cream/80 leading-relaxed mb-8">
                            본 약관은 <strong>팜센스(FarmSense)</strong>(이하 "회사")가 제공하는 스마트팜 관리 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정합니다.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제1조 (목적)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            이 약관은 팜센스(FarmSense) 앱 및 웹사이트(farmsense.kr)를 통해 제공되는 스마트팜 모니터링, AI 병해 진단, 영농일지 등 일체의 서비스 이용에 관한 사항을 규정함을 목적으로 합니다.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제2조 (서비스 요금제)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 다음과 같은 유료 구독 서비스를 제공합니다.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-white/15">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">플랜</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">월 구독</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">연 구독</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">주요 기능</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3 font-semibold text-white">일반</td>
                                        <td className="border border-white/15 px-4 py-3">5,000원</td>
                                        <td className="border border-white/15 px-4 py-3">20,000원</td>
                                        <td className="border border-white/15 px-4 py-3">기본 모니터링, 영농일지, AI 상담</td>
                                    </tr>
                                    <tr className="bg-white/5">
                                        <td className="border border-white/15 px-4 py-3 font-semibold text-green-400">프리미엄</td>
                                        <td className="border border-white/15 px-4 py-3">10,000원</td>
                                        <td className="border border-white/15 px-4 py-3">50,000원</td>
                                        <td className="border border-white/15 px-4 py-3">일반 기능 전체 + AI 병해 진단, 고급 분석, 우선 지원</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>결제는 <strong>팜센스 앱(FarmSense App)</strong> 내에서 이루어집니다.</li>
                            <li>연 구독은 월 구독 대비 할인이 적용됩니다.</li>
                            <li>구독 기간 만료 전까지 서비스를 이용할 수 있습니다.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제3조 (결제 수단)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 토스페이먼츠(주)를 결제대행사로 이용하며, 다음과 같은 결제 수단을 지원합니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>신용카드 / 체크카드</li>
                            <li>계좌이체</li>
                            <li>토스페이</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제4조 (구독 갱신 및 해지)
                        </h2>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>구독은 만료일에 자동 갱신되지 않으며, 이용자가 직접 앱에서 재결제해야 합니다.</li>
                            <li>해지는 앱 내 설정 메뉴 또는 이메일(contact@farmsense.kr)을 통해 요청할 수 있습니다.</li>
                            <li>환불·취소 정책은 별도 <a href="/refund-policy" className="text-green-400 hover:text-green-300 underline">환불·취소 정책 페이지</a>를 참고하십시오.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제5조 (서비스 이용 제한)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            이용자는 다음 행위를 해서는 안 됩니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>타인의 계정을 도용하거나 허위 정보를 등록하는 행위</li>
                            <li>서비스를 상업적으로 무단 이용하거나 재판매하는 행위</li>
                            <li>회사의 서비스 운영을 방해하는 일체의 행위</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제6조 (책임의 한계)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            회사는 천재지변, 통신 장애, 시스템 오류 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다. AI 진단 결과는 참고 정보로만 활용하시기 바라며, 최종 판단은 이용자 본인이 하여야 합니다.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제7조 (약관 변경)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            회사는 약관을 변경할 경우 시행 7일 전에 앱 공지 또는 홈페이지를 통해 고지합니다.
                        </p>

                        <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-green-400 mb-4">사업자 정보</h3>
                            <p className="text-neutral-cream/80 mb-1"><strong>상호:</strong> 팜센스(FarmSense)</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>대표자:</strong> 한문수</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>사업자등록번호:</strong> 646-18-02527</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>업태 / 종목:</strong> 정보통신업 / 앱개발</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>소재지:</strong> 대구광역시 북구 학남로 60, 704-905호</p>
                            <p className="text-neutral-cream/80"><strong>이메일:</strong> contact@farmsense.kr</p>
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
