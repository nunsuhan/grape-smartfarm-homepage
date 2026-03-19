import { Container } from '@/components/ui/container';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export const metadata = {
    title: '이용약관 - FarmSense',
    description: 'FarmSense 서비스 이용약관',
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
                            제2조 (서비스 이용)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            본 서비스는 현재 베타 운영 중이며, 서비스 요금 정책은 정식 출시 시 별도 안내됩니다. 베타 기간 중에는 모든 기능을 무료로 이용하실 수 있습니다.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제3조 (서비스 이용 제한)
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
                            제4조 (책임의 한계)
                        </h2>
                        <p className="text-neutral-cream/80 mb-8">
                            회사는 천재지변, 통신 장애, 시스템 오류 등 불가항력으로 인한 서비스 중단에 대해 책임을 지지 않습니다. AI 진단 결과는 참고 정보로만 활용하시기 바라며, 최종 판단은 이용자 본인이 하여야 합니다.
                        </p>

                        <h2 className="text-2xl font-bold text-white mt-10 mb-4 pl-3 border-l-4 border-green-600">
                            제5조 (약관 변경)
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
                            <p className="text-neutral-cream/80"><strong>이메일:</strong> artmer3061@gmail.com</p>
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
