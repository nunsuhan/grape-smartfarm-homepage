import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';

export const metadata = {
    title: '개인정보처리방침 | 팜센스(FarmSense)',
    description: '팜센스(FarmSense) 개인정보처리방침 — 개인정보 수집·이용·보호에 관한 안내입니다.',
};

export default function PrivacyPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
                <Container className="max-w-5xl py-12">
                    <div className="prose prose-lg max-w-none">
                        <h1 className="text-4xl font-bold text-white mb-4 pb-4 border-b-4 border-green-600">
                            개인정보처리방침
                        </h1>
                        <p className="text-neutral-cream/70 mb-8">
                            시행일자: 2026년 1월 1일
                        </p>

                        <p className="text-neutral-cream/80 leading-relaxed mb-8">
                            <strong>팜센스(FarmSense)</strong>(이하 &ldquo;회사&rdquo;)는 「개인정보 보호법」에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
                        </p>

                        {/* 제1조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제1조 (개인정보의 처리 목적)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li><strong>본인 확인:</strong> 휴대폰 번호를 통한 회원 본인 식별 및 인증</li>
                            <li><strong>결제 처리:</strong> 서비스 이용료 결제 및 정산</li>
                            <li><strong>서비스 제공:</strong> 스마트팜 포도 재배 AI 솔루션, 센서 모니터링, AI 병해 진단, 영농일지 등 서비스 제공</li>
                        </ul>

                        {/* 제2조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제2조 (처리하는 개인정보 항목)
                        </h2>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-white/15">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">구분</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">수집 항목</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">수집 목적</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3">필수항목</td>
                                        <td className="border border-white/15 px-4 py-3">휴대폰 번호</td>
                                        <td className="border border-white/15 px-4 py-3">본인 확인, 회원 가입 및 서비스 이용</td>
                                    </tr>
                                    <tr className="bg-white/5">
                                        <td className="border border-white/15 px-4 py-3">결제 정보</td>
                                        <td className="border border-white/15 px-4 py-3">카드번호, 유효기간 등 (카드사 제공)</td>
                                        <td className="border border-white/15 px-4 py-3">서비스 이용료 결제 처리</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3">자동수집</td>
                                        <td className="border border-white/15 px-4 py-3">기기정보, 접속 로그, 앱 사용 기록</td>
                                        <td className="border border-white/15 px-4 py-3">서비스 품질 개선</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 제3조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제3조 (개인정보의 처리 및 보유 기간)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li><strong>회원 정보:</strong> 서비스 탈퇴 후 5년 (「전자상거래 등에서의 소비자보호에 관한 법률」에 따른 보존)</li>
                            <li><strong>결제 기록:</strong> 서비스 탈퇴 후 5년 (「전자상거래 등에서의 소비자보호에 관한 법률」에 따른 보존)</li>
                            <li><strong>접속 로그:</strong> 3개월 (「통신비밀보호법」에 따른 보존)</li>
                        </ul>

                        {/* 제4조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제4조 (개인정보의 제3자 제공)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 원칙적으로 정보주체의 개인정보를 제1조에서 명시한 범위 내에서만 처리하며, 다음의 경우에 한하여 개인정보를 제3자에게 제공합니다.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-white/15">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">제공받는 자</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">제공 목적</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">제공 항목</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3">토스페이먼츠</td>
                                        <td className="border border-white/15 px-4 py-3">결제 처리</td>
                                        <td className="border border-white/15 px-4 py-3">결제 정보 (카드번호, 유효기간 등)</td>
                                    </tr>
                                    <tr className="bg-white/5">
                                        <td className="border border-white/15 px-4 py-3">알리고</td>
                                        <td className="border border-white/15 px-4 py-3">SMS 발송 (본인인증)</td>
                                        <td className="border border-white/15 px-4 py-3">휴대폰 번호</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 제5조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제5조 (개인정보처리 위탁)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                        </p>
                        <div className="overflow-x-auto mb-8">
                            <table className="min-w-full border-collapse border border-white/15">
                                <thead>
                                    <tr className="bg-white/10">
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">수탁업체</th>
                                        <th className="border border-white/15 px-4 py-3 text-left font-semibold">위탁업무</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-white/15 px-4 py-3">토스페이먼츠</td>
                                        <td className="border border-white/15 px-4 py-3">결제 처리 및 정산</td>
                                    </tr>
                                    <tr className="bg-white/5">
                                        <td className="border border-white/15 px-4 py-3">알리고</td>
                                        <td className="border border-white/15 px-4 py-3">SMS 본인인증 발송</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* 제6조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제6조 (정보주체의 권리·의무 및 행사방법)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                        </p>
                        <ul className="list-disc pl-6 mb-4 space-y-2 text-neutral-cream/80">
                            <li>개인정보 열람 요구</li>
                            <li>오류 등이 있을 경우 정정 요구</li>
                            <li>삭제 요구</li>
                            <li>처리정지 요구</li>
                        </ul>
                        <p className="text-neutral-cream/80 mb-8">
                            위 권리 행사는 이메일(contact@farmsense.kr) 또는 전화(070-8064-7956)를 통해 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.
                        </p>

                        {/* 제7조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제7조 (개인정보의 파기)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li><strong>전자적 파일:</strong> 복구 및 재생이 불가능하도록 안전하게 삭제</li>
                            <li><strong>기타 기록물:</strong> 분쇄하거나 소각하여 파기</li>
                        </ul>

                        {/* 제8조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제8조 (개인정보의 안전성 확보조치)
                        </h2>
                        <p className="text-neutral-cream/80 mb-4">
                            회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                        </p>
                        <ul className="list-disc pl-6 mb-8 space-y-2 text-neutral-cream/80">
                            <li>개인정보 암호화 (전송 시 SSL/TLS, 저장 시 암호화)</li>
                            <li>해킹 등에 대비한 기술적 대책 (방화벽, 침입탐지시스템)</li>
                            <li>개인정보 접근 권한 제한</li>
                            <li>정기적인 보안 점검</li>
                        </ul>

                        {/* 제9조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제9조 (개인정보 보호책임자)
                        </h2>
                        <div className="bg-green-500/10 border-l-4 border-green-600 p-6 rounded-lg mb-8">
                            <h3 className="text-xl font-bold text-green-400 mb-4">개인정보 보호책임자</h3>
                            <p className="text-neutral-cream/80 mb-2"><strong>이름:</strong> 한문수</p>
                            <p className="text-neutral-cream/80 mb-2"><strong>이메일:</strong> contact@farmsense.kr</p>
                            <p className="text-neutral-cream/80 mb-4"><strong>전화:</strong> 070-8064-7956</p>
                            <p className="text-neutral-cream/80">
                                정보주체는 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 위 연락처로 문의하실 수 있습니다.
                            </p>
                        </div>

                        {/* 제10조 */}
                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제10조 (개인정보처리방침 변경)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            이 개인정보처리방침은 2026년 1월 1일부터 적용됩니다. 변경사항이 있을 경우 서비스 내 공지 또는 이메일을 통해 고지할 예정입니다.
                        </p>

                        <div className="mt-12 pt-8 border-t border-white/15 text-neutral-cream/70 text-sm">
                            © 2026 FarmSense. All rights reserved.
                        </div>
                    </div>
                </Container>
            </main>
        </>
    );
}
