'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Container } from '@/components/ui/container';

const SEASONS = [
  {
    period: '11~2월', label: '겨울 — 휴면기', icon: '❄️', color: 'blue',
    worry: '서리·한파에 나무가 얼진 않을까?',
    without: '기상청 예보만 보다가 새벽 서리를 놓침. 동해 피해 발생',
    alerts: [
      { sensor: '온습도', text: '영하 2℃ 이하 → 즉시 서리 경보 (새벽 3시도 알림)' },
      { sensor: '온습도', text: '동해 위험 누적 추적 — 나무가 얼마나 스트레스 받았는지' },
      { sensor: '흙 물기', text: '겨울 관수 필요 여부 알림 / 해동기 흙 물기 부족 감지' },
      { sensor: '기상스테이션+', text: '서리 정밀 예보 (온도+풍속+습도+기압 조합) — 기상청보다 내 밭에 정확' },
      { sensor: '온습도', text: '저온 요구도 누적 추적 (7.2℃ 이하 누적시간) → 내년 발아 예측' },
    ],
  },
  {
    period: '3~4월', label: '봄 — 발아·새순', icon: '🌱', color: 'green',
    worry: '발아 후 냉해·서리로 새순이 타버리면?',
    without: '냉해 조건을 모르고 환기를 너무 일찍 열어 새순 동해',
    alerts: [
      { sensor: '온습도', text: '냉해 경보 — 발아 후 6℃ 이하 3시간 노출 감지' },
      { sensor: '온습도', text: '비가림 안 환기 타이밍 — 30℃ 넘기 전에 알림' },
      { sensor: '온습도', text: '이슬점 계산 → 결로 위험 경보' },
      { sensor: '흙 물기', text: '발아기 관수 관리 — 균일 발아 유도' },
      { sensor: '정밀온도+', text: '흙 온도 15℃ 도달 → "관수 시작" 알림 (뿌리 활성 시작)' },
    ],
  },
  {
    period: '5~6월', label: '꽃·착과기', icon: '🌸', color: 'yellow',
    worry: '꽃떨이가 생기거나 지베렐린 처리 타이밍을 놓치면?',
    without: '고온·저습 조건을 모르고 꽃 관리 실패. 착과 불균일',
    alerts: [
      { sensor: '온습도', text: '꽃떨이 방지 — 고온·저습 조건 감지 즉시 알림' },
      { sensor: '온습도', text: '노균병·회색곰팡이 위험도 계산 — 습도 85% 이상 지속 시 "방제하세요"' },
      { sensor: '흙 물기', text: '지베렐린 처리 전 흙 물기 가이드' },
      { sensor: '흙 물기', text: '과관수 방지 — "수세 강할 때 물 줄이세요" / 물주기 추천 리터 단위' },
      { sensor: '일사량+', text: 'VPD(건조도) 계산 → 분무 살수 권장 알림' },
    ],
  },
  {
    period: '6~7월', label: '장마·비대기', icon: '🌧️', color: 'orange',
    worry: '장마 때 노균병·탄저병이 터지면? 과습으로 뿌리 썩으면?',
    without: '장마 중 적절한 환기 타이밍을 몰라 병 확산. 배수 문제 발견 늦음',
    alerts: [
      { sensor: '온습도', text: '장마철 탄저병·노균병 집중 경보' },
      { sensor: '온습도', text: '비 그친 틈새 환기 — "오후 2~4시 지금 열기"' },
      { sensor: '온습도', text: '고온 스트레스 경보 — 35℃ 이상 "차광·환기"' },
      { sensor: '흙 물기', text: '장마 중 과습 경보 — "배수 확인하세요"' },
      { sensor: '흙 물기', text: '장마 후 물주기 재개 타이밍 — "오늘부터 다시 물 주세요"' },
      { sensor: '기상스테이션+', text: '내 밭 강우량 정확 기록 — 기상청 수치와 다를 수 있음' },
    ],
  },
  {
    period: '8~9월', label: '착색·수확기', icon: '🍇', color: 'purple',
    worry: '열과가 생기거나 당도가 안 나오면?',
    without: '수확 전 과관수로 열과 발생. 당도 올리는 물주기 중단 타이밍 놓침',
    alerts: [
      { sensor: '흙 물기', text: '열과 방지 — "3일 간격 소량 관수" 알림' },
      { sensor: '흙 물기', text: '당도 올리기 — "수확 2주 전 물주기 멈추세요"' },
      { sensor: '온습도', text: '일교차 모니터링 — 착색·당도 향상 추적' },
      { sensor: '온습도', text: '후기 병해 경보' },
      { sensor: '정밀온도+', text: '일소(햇빛 화상) 경보 — 과실 표면 40℃ 이상 즉시 알림' },
      { sensor: '소금기(EC)+', text: '당도 극대화 — EC 조절로 포도 스트레스 관리' },
    ],
  },
  {
    period: '10~11월', label: '수확 후 관리', icon: '🍂', color: 'red',
    worry: '내년을 위한 나무 관리를 어떻게 해야 하나?',
    without: '밑거름 후 관수 타이밍 감으로 판단. 토양 상태 파악 안 됨',
    alerts: [
      { sensor: '흙 물기', text: '밑거름 후 물주기 가이드 / 흙 회복 관리' },
      { sensor: '온습도', text: '저온 요구도 추적 (7.2℃ 이하 누적시간) → 내년 발아 예측' },
      { sensor: '소금기(EC)+', text: '연간 흙 소금기 변화 리포트 — "내년 비료 계획 조정 필요"' },
      { sensor: 'pH+', text: '연간 흙 산도 변화 + 석회 시비 계획' },
    ],
  },
];

const COLOR_MAP: Record<string, { bg: string; border: string; badge: string; text: string }> = {
  blue:   { bg: 'bg-blue-500/10',   border: 'border-blue-500/20',   badge: 'bg-blue-500/20 text-blue-300',   text: 'text-blue-400' },
  green:  { bg: 'bg-green-500/10',  border: 'border-green-500/20',  badge: 'bg-green-500/20 text-green-300',  text: 'text-green-400' },
  yellow: { bg: 'bg-yellow-500/10', border: 'border-yellow-500/20', badge: 'bg-yellow-500/20 text-yellow-300', text: 'text-yellow-400' },
  orange: { bg: 'bg-orange-500/10', border: 'border-orange-500/20', badge: 'bg-orange-500/20 text-orange-300', text: 'text-orange-400' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/20', badge: 'bg-purple-500/20 text-purple-300', text: 'text-purple-400' },
  red:    { bg: 'bg-red-500/10',    border: 'border-red-500/20',    badge: 'bg-red-500/20 text-red-300',    text: 'text-red-400' },
};

const EXTRA_SERVICES = [
  { icon: '☀️', sensor: '일사량 센서 추가', services: ['관수 정확도 30% 향상 (증발산량 자동 계산)', '광합성 효율 진단 — 차광 해제/유지 타이밍', '착색 예측 날짜 더 정확해짐'] },
  { icon: '💨', sensor: 'CO₂ 센서 추가 (하우스 전용)', services: ['환기 타이밍 고도화 — CO₂ 농도로 환기 효율 측정', '광합성 한계 진단 — CO₂ < 350ppm 경보', '하우스 공기 순환 상태 간접 모니터링'] },
  { icon: '🧂', sensor: '소금기(EC) 센서 추가', services: ['비료 과다 실시간 감지 — "EC 3.2, 씻어내세요"', '물주기+비료 자동 추천 (물만 vs 물+비료)', '당도 극대화 — EC 조절 가이드'] },
  { icon: '🌤️', sensor: '기상스테이션 추가', services: ['서리 정밀 예보 — 기상청보다 내 밭에 정확', '내 밭 강우량 직접 측정', '풍속 경보 — 비닐 피해 사전 대비'] },
];

export default function ServicesPage() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
      {/* 시범 배너 */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white text-center py-3 px-4">
        <span className="font-bold">🎉 시범 농가 모집 중 — 전 제품 50% 할인</span>
        <span className="mx-3 opacity-60">|</span>
        <span className="text-sm opacity-90">5농가 선착순 · 마감 3/20</span>
        <Link href="/trial" className="ml-3 underline text-sm font-bold hover:opacity-80">신청하기 →</Link>
      </div>

      {/* 헤더 */}
      <div className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.08),transparent_60%)]" />
        <Container className="max-w-5xl py-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-green-400 font-bold tracking-wide text-sm uppercase">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              시기별 서비스 안내
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">
              센서 하나로<br />
              <span className="text-green-400">연중 35가지 알림</span>
            </h1>
            <p className="text-lg text-neutral-cream/70 max-w-2xl">
              기본 세트(온습도 + 흙 물기 센서)만 달아도 포도 생육 전 주기에 맞춰 필요한 알림이 자동으로 옵니다.
            </p>
          </div>
        </Container>
      </div>

      <Container className="max-w-5xl py-12 space-y-16">

        {/* 시기별 서비스 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white mb-6">시기별 알림 — 기본 세트 기준</h2>
          {SEASONS.map((season, i) => {
            const c = COLOR_MAP[season.color];
            const isOpen = active === i;
            return (
              <div key={i} className={`rounded-2xl border ${c.border} ${c.bg} overflow-hidden`}>
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{season.icon}</span>
                    <div>
                      <div className={`text-sm font-bold ${c.text} mb-0.5`}>{season.period}</div>
                      <div className="text-white font-bold text-lg">{season.label}</div>
                      <div className="text-sm text-neutral-cream/60 mt-0.5">{season.worry}</div>
                    </div>
                  </div>
                  <span className="text-neutral-cream/40 text-xl flex-shrink-0">{isOpen ? '▲' : '▼'}</span>
                </button>

                {isOpen && (
                  <div className="border-t border-white/10 px-6 pb-6 space-y-4">
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-sm text-red-200">
                      ❌ 센서 없으면: {season.without}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-green-400 mb-3">✅ FarmSense 알림</p>
                      <div className="space-y-2">
                        {season.alerts.map((a, j) => (
                          <div key={j} className="flex items-start gap-3 text-sm">
                            <span className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${a.sensor.includes('+') ? 'bg-blue-500/20 text-blue-300' : c.badge}`}>
                              {a.sensor}
                            </span>
                            <span className="text-neutral-cream/80 leading-relaxed">{a.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </section>

        {/* 추가 센서별 추가 서비스 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white">추가 센서를 달면 더 생기는 서비스</h2>
          <p className="text-neutral-cream/60 text-sm">기본 세트에 더하면 이런 알림이 추가됩니다</p>
          <div className="grid md:grid-cols-2 gap-4">
            {EXTRA_SERVICES.map((ex) => (
              <div key={ex.sensor} className="bg-white/5 border border-white/10 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{ex.icon}</span>
                  <h3 className="font-bold text-white text-sm">{ex.sensor}</h3>
                </div>
                <ul className="space-y-2">
                  {ex.services.map((s, i) => (
                    <li key={i} className="text-sm text-neutral-cream/70 flex items-start gap-2">
                      <span className="text-green-400 mt-0.5">+</span>{s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-10 text-center space-y-4">
          <h2 className="text-2xl font-bold text-white">지금 시범 농가로 신청하면</h2>
          <p className="text-neutral-cream/70">전 제품 50% 할인 + 첫 1년 통신비 무료 + 설치 가이드 제공</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/trial" className="px-8 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold transition-colors">
              시범 농가 신청 →
            </Link>
            <Link href="/sensors" className="px-8 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold transition-colors border border-white/20">
              센서 카탈로그 보기
            </Link>
          </div>
          <p className="text-sm text-neutral-cream/50">5농가 · 마감 3/20 · 지역별 선정</p>
        </section>
      </Container>
    </main>
  );
}
