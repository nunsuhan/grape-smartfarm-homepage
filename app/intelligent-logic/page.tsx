'use client';

import { Container } from '@/components/ui/container';
import Link from 'next/link';
import { Droplets, Bug, FlaskConical, BarChart, Grape, Gauge, ArrowRight } from 'lucide-react';

const logicCategories = [
    {
        title: '관수_물관리',
        href: '/intelligent-logic/irrigation-water',
        icon: Droplets,
        color: 'blue',
        description: '토양 수분 퍼텐셜 기반 정밀 관개 제어 로직'
    },
    {
        title: '병해충관리',
        href: '/intelligent-logic/pesticide-spray',
        icon: Bug,
        color: 'red',
        description: '병원균 생존 임계값·IPM 기반 방제 타이밍 결정'
    },
    {
        title: '비료_시비량',
        href: '/intelligent-logic/fertilizer-application',
        icon: FlaskConical,
        color: 'green',
        description: '생육 단계별 NPK 밸런싱 및 EC 피드백 제어'
    },
    {
        title: '수확량_예측',
        href: '/intelligent-logic/yield-prediction',
        icon: BarChart,
        color: 'yellow',
        description: 'GDD와 AI 비전을 결합한 하이브리드 수확량 예측'
    },
    {
        title: '포도_재배기술',
        href: '/intelligent-logic/grape-cultivation',
        icon: Grape,
        color: 'purple',
        description: '안토시아닌 합성 최적화 및 Soft Sensor 성장 분석'
    },
    {
        title: '환경제어_센서',
        href: '/intelligent-logic/environmental-control',
        icon: Gauge,
        color: 'indigo',
        description: '온도, 습도, 조도 등 환경 센서 기반 제어 로직'
    },
];

export default function IntelligentLogicPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            {/* Header */}
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-4xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-purple-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-purple-600"></span>
                            FarmSense 지능형 로직
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            지능형 로직
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed font-serif">
                            단순 요약이 아닌 논문 데이터를 기반으로 한 과학적 인과관계와 알고리즘을 공개합니다.
                            <br />
                            <span className="text-sm text-neutral-500">
                                토양수분장력(Ψ-soil) 임계값 제어 로직 등 핵심 수식과 알고리즘을 생략 없이 배치합니다.
                            </span>
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="max-w-4xl py-12">
                <div className="space-y-8">
                    {/* 소개 섹션 */}
                    <section className="bg-neutral-50 border border-neutral-200 rounded-xl p-8">
                        <h2 className="text-2xl font-bold text-neutral-900 mb-4">논리적 신뢰 기반 설계</h2>
                        <p className="text-neutral-700 leading-relaxed">
                            앱 화면의 단순함이 '기술의 가벼움'으로 오해받지 않도록, 그 이면에 흐르는 방대한 데이터와 이론적 근거를 무손실로 공개합니다.
                            <strong className="text-neutral-900"> '왜 지금 물을 주어야 하는가'</strong>에 대한 과학적 인과관계를 설명합니다.
                        </p>
                    </section>

                    {/* 로직 카테고리 그리드 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {logicCategories.map((category) => {
                            const Icon = category.icon;
                            const colorClasses = {
                                blue: 'bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100',
                                red: 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100',
                                green: 'bg-green-50 border-green-200 text-green-600 hover:bg-green-100',
                                yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600 hover:bg-yellow-100',
                                purple: 'bg-purple-50 border-purple-200 text-purple-600 hover:bg-purple-100',
                                indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600 hover:bg-indigo-100',
                            };

                            return (
                                <Link
                                    key={category.href}
                                    href={category.href}
                                    className={`group border-2 rounded-xl p-6 transition-all ${colorClasses[category.color as keyof typeof colorClasses]}`}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="bg-white p-3 rounded-lg shadow-sm">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <h3 className="text-xl font-bold text-neutral-900 mb-2">{category.title}</h3>
                                    <p className="text-sm text-neutral-600">{category.description}</p>
                                </Link>
                            );
                        })}
                    </div>

                    {/* 참고 자료 (검증·로직 이해용) */}
                    <section className="bg-neutral-50 border border-neutral-200 rounded-xl p-6">
                        <h3 className="font-bold text-neutral-900 mb-3">근거 문헌 및 검증</h3>
                        <p className="text-sm text-neutral-600 mb-3">
                            모든 로직은 <strong>참고 문헌(논문·보고서)</strong>을 기반으로 하며, 공무원·농가가 검증할 수 있도록 근거를 명시합니다.
                        </p>
                        <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside mb-4">
                            <li>스마트 정밀 관개 및 생육 환경 제어 로직 분석</li>
                            <li>포도 재배를 위한 정밀 시비 알고리즘 및 처방 로직</li>
                            <li>통합해충관리 기반의 최적 방제 시기 결정 모델과 알고리즘</li>
                            <li>포도 수확량 예측을 위한 데이터 분석 및 모델링 가이드</li>
                            <li>포도 수형 관리 및 고품질 생산을 위한 재배 로직</li>
                            <li>포도 재배 적지 분석 및 생육 단계별 정밀 관리 가이드</li>
                        </ul>
                        <p className="text-sm text-neutral-500">
                            전체 참고 문헌 목록·입력/출력 명세: <Link href="/technology/docs" className="text-green-600 font-medium hover:underline">기술 문서 (검증·로직)</Link>
                        </p>
                    </section>
                </div>
            </Container>
        </main>
    );
}
