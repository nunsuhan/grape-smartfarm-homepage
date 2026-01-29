import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
    title: '계정 및 데이터 삭제 요청 - FarmSense',
    description: 'FarmSense 계정 삭제 및 개인정보 삭제 요청',
};

export default function DeleteAccountPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-100 text-neutral-900 pt-20 font-sans">
                <Container className="max-w-[600px] py-12">
                    <div className="bg-white rounded-lg shadow-sm p-8 md:p-10">
                        <h1 className="text-2xl font-bold text-[#2C5530] mb-2 pb-4 border-b-4 border-[#2C5530]">
                            🗑️ 계정 및 데이터 삭제 요청
                        </h1>
                        <p className="text-neutral-600 text-sm mb-8">
                            FarmSense 계정 삭제 및 개인정보 삭제 요청
                        </p>

                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-6">
                            <strong>📱 앱에서 직접 삭제하기</strong><br />
                            FarmSense 앱 → 설정 → 계정 정보 → 계정 삭제에서 직접 삭제할 수 있습니다.
                        </div>

                        <h2 className="text-lg font-bold text-[#3D7A42] mt-8 mb-3">삭제되는 데이터</h2>
                        <p className="text-neutral-600 mb-2">계정 삭제 시 다음 데이터가 영구적으로 삭제됩니다:</p>
                        <ul className="list-disc pl-6 space-y-1 text-neutral-600 mb-6">
                            <li>계정 정보 (이메일, 이름, 비밀번호)</li>
                            <li>농장 정보 (농장명, 주소, 재배 품종)</li>
                            <li>영농일지 기록</li>
                            <li>AI 진단 이력 및 이미지</li>
                            <li>AI 상담 대화 기록</li>
                            <li>센서 연동 데이터</li>
                            <li>앱 설정 및 환경설정</li>
                        </ul>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded mb-6">
                            <strong>⚠️ 주의사항</strong><br />
                            삭제된 데이터는 복구할 수 없습니다. 신중하게 결정해주세요.
                        </div>

                        <h2 className="text-lg font-bold text-[#3D7A42] mt-8 mb-3">삭제 요청 양식</h2>
                        <form action="mailto:artmer3061@gmail.com" method="post" encType="text/plain" className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block font-semibold text-neutral-800 mb-1">가입 이메일 주소 *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="FarmSense 가입 시 사용한 이메일"
                                    className="w-full px-3 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-[#2C5530]"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block font-semibold text-neutral-800 mb-1">이름 *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="가입 시 등록한 이름"
                                    className="w-full px-3 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-[#2C5530]"
                                />
                            </div>
                            <div>
                                <label htmlFor="reason" className="block font-semibold text-neutral-800 mb-1">삭제 사유 (선택)</label>
                                <select
                                    id="reason"
                                    name="reason"
                                    className="w-full px-3 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-[#2C5530]"
                                >
                                    <option value="">선택해주세요</option>
                                    <option value="no-longer-use">더 이상 사용하지 않음</option>
                                    <option value="privacy">개인정보 보호 우려</option>
                                    <option value="switch-service">다른 서비스로 전환</option>
                                    <option value="other">기타</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block font-semibold text-neutral-800 mb-1">추가 요청사항 (선택)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="추가로 전달할 내용이 있으면 입력해주세요."
                                    rows={4}
                                    className="w-full px-3 py-3 border border-neutral-300 rounded-md focus:outline-none focus:border-[#2C5530] resize-y"
                                />
                            </div>
                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="confirm"
                                    name="confirm"
                                    required
                                    className="mt-1 w-4 h-4 rounded border-neutral-300 text-[#2C5530] focus:ring-[#2C5530]"
                                />
                                <label htmlFor="confirm" className="text-sm text-neutral-600">
                                    위 내용을 확인했으며, 계정 및 모든 관련 데이터가 영구적으로 삭제되는 것에 동의합니다. 삭제된 데이터는 복구할 수 없음을 이해합니다.
                                </label>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-4 px-6 rounded-md transition-colors"
                            >
                                계정 삭제 요청
                            </button>
                        </form>

                        <h2 className="text-lg font-bold text-[#3D7A42] mt-10 mb-3">처리 절차</h2>
                        <ul className="list-disc pl-6 space-y-1 text-neutral-600 mb-6">
                            <li><strong>1단계:</strong> 삭제 요청 접수 (즉시)</li>
                            <li><strong>2단계:</strong> 본인 확인 (1-2일)</li>
                            <li><strong>3단계:</strong> 데이터 삭제 처리 (최대 7일)</li>
                            <li><strong>4단계:</strong> 삭제 완료 이메일 발송</li>
                        </ul>

                        <div className="bg-neutral-100 p-5 rounded-lg">
                            <h3 className="font-bold text-[#2C5530] mb-2">📧 문의</h3>
                            <p className="text-neutral-600">삭제 요청 관련 문의: <strong>artmer3061@gmail.com</strong></p>
                            <p className="text-neutral-600 text-sm mt-1">처리 기간: 요청일로부터 최대 7일 이내</p>
                        </div>

                        <p className="mt-10 pt-6 border-t border-neutral-200 text-neutral-500 text-sm">
                            © 2026 FarmSense. All rights reserved.<br />
                            <Link href="/privacy-policy" className="text-[#2C5530] hover:underline">
                                개인정보처리방침
                            </Link>
                        </p>
                    </div>
                </Container>
            </main>
            <Footer />
        </>
    );
}
