import Link from 'next/link';
import { Activity, Bot, ShieldCheck, Droplets, BarChart3, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FEATURES = [
  {
    icon: Activity,
    title: '실시간 센서 모니터링',
    desc: '온도, 습도, 토양수분 등 농장 환경을 실시간으로 확인합니다.',
  },
  {
    icon: ShieldCheck,
    title: 'AI 질병 진단',
    desc: '이미지 업로드만으로 포도 질병을 자동 감지하고 처방합니다.',
  },
  {
    icon: Bot,
    title: 'AI 재배 상담',
    desc: '포도 재배 전문 AI가 농장 데이터 기반으로 맞춤 답변을 드립니다.',
  },
  {
    icon: BarChart3,
    title: '질병 위험도 분석',
    desc: 'PMI 엔진과 환경 데이터로 노균병·흰가루병 위험을 예측합니다.',
  },
  {
    icon: Droplets,
    title: '관수 의사결정',
    desc: 'VPD, CWSI 분석으로 최적의 관수 시기와 양을 추천합니다.',
  },
  {
    icon: Bell,
    title: '스마트 알림',
    desc: '위험 수준 변화, 센서 이상 등을 실시간으로 알려드립니다.',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold">
              F
            </div>
            <span className="text-xl font-bold">FarmSense</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">로그인</Button>
            </Link>
            <Link href="/signup">
              <Button>시작하기</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          <span className="text-primary">스마트 포도농장</span>
          <br />
          통합 관리 플랫폼
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          AI 기반 질병 진단, 실시간 환경 모니터링, 관수 의사결정까지.
          <br />
          데이터로 포도 농장을 더 스마트하게 관리하세요.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link href="/signup">
            <Button size="lg" className="px-8">
              무료로 시작하기
            </Button>
          </Link>
          <Link href="/login">
            <Button size="lg" variant="outline" className="px-8">
              로그인
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">주요 기능</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-bold">지금 바로 시작하세요</h2>
          <p className="mt-4 text-muted-foreground">
            농장을 등록하고 센서를 연결하면 바로 사용할 수 있습니다.
          </p>
          <Link href="/signup">
            <Button size="lg" className="mt-8 px-8">
              무료 회원가입
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <p>&copy; 2026 FarmSense. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
