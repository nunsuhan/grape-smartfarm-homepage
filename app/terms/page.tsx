import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';

export const metadata = {
    title: '이용약관 | 팜센스(FarmSense)',
    description: '팜센스(FarmSense) 스마트팜 AI 솔루션 서비스 이용약관입니다.',
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
                            시행일자: 2026년 1월 1일
                        </p>

                        <p className="text-neutral-cream/80 leading-relaxed mb-8">
                            본 약관은 <strong>팜센스(FarmSense)</strong>(이하 &ldquo;회사&rdquo;)가 제공하는 스마트팜 포도 재배 AI 솔루션 서비스(이하 &ldquo;서비스&rdquo;)의 이용과 관련하여 회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
                        </p>

                        {/* 제1조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제1조 (목적)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            이 약관은 회사가 운영하는 웹사이트(farmsense.kr) 및 모바일 애플리케이션을 통해 제공하는 스마트팜 포도 재배 AI 솔루션, 센서 모니터링, AI 병해 진단, 영농일지 등 일체의 서비스 이용에 관한 조건과 절차를 규정함을 목적으로 합니다.
                        </p>

                        {/* 제2조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제2조 (용어의 정의)
                        </h2>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li><strong>&ldquo;서비스&rdquo;</strong>란 회사가 제공하는 스마트팜 포도 재배 AI 솔루션 및 이에 부수하는 제반 서비스를 말합니다.</li>
                            <li><strong>&ldquo;이용자&rdquo;</strong>란 본 약관에 동의하고 서비스를 이용하는 자를 말합니다.</li>
                            <li><strong>&ldquo;구독&rdquo;</strong>이란 이용자가 서비스 이용을 위해 정해진 요금을 지불하고 일정 기간 서비스를 이용하는 것을 말합니다.</li>
                        </ul>

                        {/* 제3조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제3조 (이용자 자격)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            본 서비스는 다음에 해당하는 자가 이용할 수 있습니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>농업인 및 농업 관련 사업자</li>
                            <li>스마트팜 관련 연구·교육 종사자</li>
                            <li>기타 회사가 서비스 이용을 승인한 자</li>
                        </ul>

                        {/* 제4조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제4조 (서비스 이용료 및 결제)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            서비스 이용료는 다음과 같습니다.
                        </p>
                        <div className="overflow-x-auto mb-6">
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
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>결제는 토스페이먼츠를 통해 처리되며, 이용자가 등록한 결제 수단으로 청구됩니다.</li>
                            <li>월간 구독의 경우 이용자가 해지하지 않는 한 매월 동일한 결제일에 자동으로 결제됩니다.</li>
                            <li>결제 수단 변경, 해지 등은 서비스 내 설정 또는 고객지원을 통해 가능합니다.</li>
                        </ul>

                        {/* 제5조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제5조 (자동결제 및 동의)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            월간 구독 이용자는 다음 사항에 동의한 것으로 간주합니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>이용자가 등록한 결제 수단(신용카드, 체크카드 등)을 통해 매월 자동으로 이용료가 결제됩니다.</li>
                            <li>자동결제는 이용자가 직접 해지하기 전까지 계속됩니다.</li>
                            <li>결제일은 최초 결제일을 기준으로 하며, 해당 일자가 없는 달에는 말일에 결제됩니다.</li>
                            <li>결제 수단의 유효기간 만료, 잔액 부족 등으로 결제가 실패할 경우 회사는 이용자에게 통지하며, 일정 기간 내 결제가 이루어지지 않을 경우 서비스가 중단될 수 있습니다.</li>
                            <li>자동결제 해지는 다음 결제일 전일까지 신청해야 하며, 해지 후에는 다음 결제일부터 결제가 중단됩니다.</li>
                        </ul>

                        {/* 제6조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제6조 (서비스 이용 제한)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 다음 각 호에 해당하는 경우 이용자의 서비스 이용을 제한 또는 중지할 수 있습니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>타인의 계정을 도용하거나 허위 정보를 등록하는 행위</li>
                            <li>서비스를 상업적으로 무단 이용하거나 재판매하는 행위</li>
                            <li>회사의 서비스 운영을 고의로 방해하는 행위</li>
                            <li>관련 법령 또는 본 약관을 위반하는 행위</li>
                            <li>이용료를 정당한 사유 없이 미납하는 경우</li>
                        </ul>

                        {/* 제7조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제7조 (책임의 한계)
                        </h2>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>회사는 천재지변, 통신 장애, 시스템 오류 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다.</li>
                            <li>AI 진단 결과는 참고 정보로만 활용하시기 바라며, 최종 판단과 책임은 이용자 본인에게 있습니다.</li>
                            <li>이용자가 서비스를 통해 취득한 정보에 의한 농업 경영 결과에 대해 회사는 책임을 지지 않습니다.</li>
                        </ul>

                        {/* 제8조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제8조 (분쟁 해결)
                        </h2>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>본 약관에 관한 분쟁은 대한민국 법령을 준거법으로 합니다.</li>
                            <li>서비스 이용과 관련하여 회사와 이용자 간에 분쟁이 발생한 경우, 양 당사자는 원만한 해결을 위해 성실히 협의합니다.</li>
                            <li>협의가 이루어지지 않을 경우, 관할 법원은 회사 소재지를 관할하는 법원으로 합니다.</li>
                        </ul>

                        {/* 제9조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제9조 (약관 변경)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            회사는 약관을 변경할 경우 시행일 7일 전에 서비스 내 공지 또는 이메일을 통해 고지합니다. 이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 이용 계약을 해지할 수 있습니다.
                        </p>

                        {/* 사업자 정보 */}
                        <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-green-400 mb-4">사업자 정보</h3>
                            <p className="text-neutral-cream/80 mb-1"><strong>상호:</strong> 팜센스(FarmSense)</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>대표자:</strong> 한문수</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>사업자등록번호:</strong> 646-18-02527</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>소재지:</strong> 대구광역시 북구 학남로 60, 704-905호</p>
                            <p className="text-neutral-cream/80 mb-1"><strong>대표전화:</strong> 070-8064-7956</p>
                            <p className="text-neutral-cream/80"><strong>이메일:</strong> contact@farmsense.kr</p>
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
