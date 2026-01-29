'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import { CodeBlock } from '@/components/ui/code-block';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart, Sprout, Sun, Calculator, Scan, BookOpen, Camera, Database, Brain, AlertTriangle, TrendingUp } from 'lucide-react';
import { clsx } from 'clsx';

export default function YieldPredictionPage() {
    const [mode, setMode] = useState<'simple' | 'technical'>('simple');

    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            {/* Header Section */}
            <div className="border-b border-neutral-200 bg-neutral-50/50">
                <Container className="max-w-3xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-yellow-600 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-yellow-600"></span>
                            FarmSense Logic Vol.4
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                            수확량_예측
                        </h1>
                        <p className="text-xl text-neutral-600 leading-relaxed font-serif">
                            AI, 센서 기술, 데이터 분석을 통한 정밀 농업 기반 수확량 예측: 딥러닝과 컴퓨터 비전의 융합
                        </p>

                        {/* Mode Toggle */}
                        <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg w-fit">
                            <button
                                onClick={() => setMode('simple')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                    mode === 'simple' ? "bg-white text-neutral-900 shadow-sm border border-neutral-200" : "text-neutral-500 hover:text-neutral-900"
                                )}
                            >
                                요약 (Farmers)
                            </button>
                            <button
                                onClick={() => setMode('technical')}
                                className={clsx(
                                    "px-4 py-2 rounded-md text-sm font-medium transition-all",
                                    mode === 'technical' ? "bg-white text-yellow-600 shadow-sm border border-neutral-200" : "text-neutral-500 hover:text-neutral-900"
                                )}
                            >
                                상세 (Engineers)
                            </button>
                        </div>
                    </div>
                </Container>
            </div>

            <Container className="max-w-3xl py-12">
                <AnimatePresence mode="wait">
                    {mode === 'simple' ? (
                        <motion.div
                            key="simple"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-12"
                        >
                            {/* 개요 및 전통적 방식의 한계 */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg mb-8">
                                <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    전통적 방식의 한계
                                </h4>
                                <p className="text-neutral-700 leading-relaxed">
                                    전통적인 수확량 예측은 현장 작업자가 직접 샘플링하는 '수동 샘플링'과 과거 데이터 기반 외삽법에 의존했습니다. 
                                    이러한 방식은 <strong>파괴적이고, 노동 집약적이며, 시간이 많이 소요</strong>될 뿐만 아니라, 
                                    샘플링의 공간적 대표성이 부족하여 <strong>예측 오차가 최대 30% 이상</strong>입니다.
                                </p>
                            </div>

                            {/* Simple Content */}
                            <div className="border border-neutral-200 rounded-xl p-8 bg-white shadow-sm mb-8">
                                <h2 className="text-2xl font-bold text-neutral-900 mb-4 flex items-center gap-3">
                                    <BarChart className="text-yellow-600 w-8 h-8" />
                                    "올해 몇 박스나 나올까?" 미리 알려드립니다
                                </h2>
                                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                                    FarmSense는 데이터 기반의 자동화된 정밀 농업 기술을 통해 수확량을 예측합니다.
                                    <strong>AI 비전</strong>, <strong>센서 데이터</strong>, <strong>기상 정보</strong>를 종합하여 
                                    수확 60일 전에도 높은 정확도로 예측합니다.
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 text-center">
                                        <Camera className="w-8 h-8 mx-auto text-blue-500 mb-2" />
                                        <div className="font-bold text-neutral-900">1. AI 비전 분석</div>
                                        <div className="text-xs text-neutral-500 mt-1">RGB-D 카메라로 송이 수 자동 계수</div>
                                    </div>
                                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 text-center">
                                        <Sun className="w-8 h-8 mx-auto text-yellow-500 mb-2" />
                                        <div className="font-bold text-neutral-900">2. 기상 데이터 분석</div>
                                        <div className="text-xs text-neutral-500 mt-1">GDD, 이상 기후 반영</div>
                                    </div>
                                    <div className="bg-neutral-50 p-4 rounded-lg border border-neutral-100 text-center">
                                        <Brain className="w-8 h-8 mx-auto text-purple-500 mb-2" />
                                        <div className="font-bold text-neutral-900">3. AI 모델 예측</div>
                                        <div className="text-xs text-neutral-500 mt-1">딥러닝 앙상블 학습</div>
                                    </div>
                                </div>
                            </div>

                            {/* 데이터 수집 기술 */}
                            <div className="border border-neutral-200 rounded-xl p-6 bg-white mb-8">
                                <h4 className="font-bold text-neutral-900 mb-4">데이터 수집 기술</h4>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-blue-500 pl-4">
                                        <h5 className="font-semibold text-neutral-900 mb-2">RGB-D 카메라</h5>
                                        <p className="text-sm text-neutral-600">
                                            깊이 정보를 포함한 3차원 측정으로 포도송이의 부피나 크기를 정확히 추정합니다. 
                                            인텔 리얼센스와 같은 저가형 RGB-D 카메라는 약 2.9~3.6cm 오차 범위 내에서 추정 가능합니다.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-green-500 pl-4">
                                        <h5 className="font-semibold text-neutral-900 mb-2">분광 이미징</h5>
                                        <p className="text-sm text-neutral-600">
                                            드론이나 위성에 장착된 다중분광 센서는 NDVI(정규 식생 지수)를 산출하여 포도원의 활력도 지도를 작성하고, 
                                            수확량의 공간적 변동성을 파악합니다.
                                        </p>
                                    </div>
                                    <div className="border-l-4 border-purple-500 pl-4">
                                        <h5 className="font-semibold text-neutral-900 mb-2">스마트폰 기반 센싱</h5>
                                        <p className="text-sm text-neutral-600">
                                            PocketLAI와 같은 앱은 엽면적지수(LAI)를 저비용으로 신속하게 추정하여 캐노피의 밀도와 생육 상태를 파악합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* AI 기반 예측 */}
                            <div className="border border-neutral-200 rounded-xl p-6 bg-white mb-8">
                                <h4 className="font-bold text-neutral-900 mb-4">AI 기반 예측 모델링</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-neutral-50 p-4 rounded-lg">
                                        <h5 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                            <Database className="w-4 h-4 text-blue-600" />
                                            머신러닝
                                        </h5>
                                        <p className="text-xs text-neutral-600">
                                            랜덤 포레스트(RF), SVM, PLS 등이 다양한 환경 변수 간의 복잡한 상호작용을 포착합니다.
                                        </p>
                                    </div>
                                    <div className="bg-neutral-50 p-4 rounded-lg">
                                        <h5 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                            <Brain className="w-4 h-4 text-purple-600" />
                                            딥러닝
                                        </h5>
                                        <p className="text-xs text-neutral-600">
                                            CNN(컴퓨터 비전), RNN/LSTM(시계열 분석), 앙상블 학습으로 높은 정확도를 달성합니다.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* 핵심 변수 */}
                            <div className="border border-neutral-200 rounded-xl p-6 bg-white">
                                <h4 className="font-bold text-neutral-900 mb-4">수확량 예측의 핵심 변수</h4>
                                <div className="space-y-3">
                                    <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                                        <div className="text-sm font-semibold text-neutral-900 mb-1">수확량 구성 요소</div>
                                        <div className="text-xs text-neutral-600">
                                            포도송이 수(cluster number)와 포도알 수(berry number)가 가장 직접적인 예측 변수입니다. 
                                            잎에 가려진 포도알도 보정하여 예측합니다.
                                        </div>
                                    </div>
                                    <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                                        <div className="text-sm font-semibold text-neutral-900 mb-1">환경 및 기후 요인</div>
                                        <div className="text-xs text-neutral-600">
                                            가뭄, 폭염, 불규칙한 강우 등 이상 기후와 토양 수분, 온도, 꽃가루 농도 등을 반영합니다.
                                        </div>
                                    </div>
                                    <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                                        <div className="text-sm font-semibold text-neutral-900 mb-1">생리적 및 병리학적 요인</div>
                                        <div className="text-xs text-neutral-600">
                                            질병 감염, 영양 스트레스 등이 장기적으로 수확량에 영향을 미칩니다.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="technical"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="space-y-16"
                        >
                            <div className="prose prose-neutral max-w-none">
                                <h2>1. 개요 및 전통적 방식의 한계</h2>
                                <p>
                                    수확량 예측은 농가와 생산자가 재배 관리(관개, 비료, 솎아내기 등), 수확 일정, 노동력 배치, 저장 및 마케팅 전략을 최적화하는 데 필수적인 요소입니다. 
                                    전통적인 수확량 예측 방식은 주로 현장 작업자가 직접 작물을 샘플링하여 포도송이 수나 무게를 측정하는 '수동 샘플링'과 과거 데이터를 기반으로 한 외삽법(extrapolation)에 의존했습니다.
                                </p>
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded my-4">
                                    <p className="text-sm text-neutral-700">
                                        <strong>전통적 방식의 한계:</strong> 파괴적이고, 노동 집약적이며, 시간이 많이 소요될 뿐만 아니라, 
                                        샘플링의 공간적 대표성이 부족하여 예측 오차가 최대 30% 이상입니다. 
                                        최근에는 기후 변화와 이상 기후로 인한 변동성이 커지면서, 데이터 기반의 자동화된 예측 기술의 필요성이 대두되고 있습니다.
                                    </p>
                                </div>

                                <h2>2. Yield Component Weighting Analysis</h2>
                                <p>
                                    수확량 예측 모델의 정확도를 높이기 위해 각 요소별 가중치를 할당합니다.
                                    Cluster Count(송이 수)가 가장 결정적(Critical)이며,
                                    그 다음으로 Berry Count(알 수), Weight(무게) 순으로 영향력을 가집니다.
                                </p>
                            </div>

                            <div className="flex flex-col md:flex-row gap-6 items-center justify-center py-8 bg-neutral-50 rounded-xl border border-neutral-200">
                                <div className="text-center">
                                    <div className="w-32 h-32 rounded-full border-8 border-yellow-400 flex items-center justify-center bg-white shadow-sm">
                                        <span className="text-2xl font-bold text-neutral-900">60%</span>
                                    </div>
                                    <div className="mt-3 font-bold text-neutral-900">Cluster Count</div>
                                </div>
                                <div className="text-2xl text-neutral-300">&gt;</div>
                                <div className="text-center">
                                    <div className="w-24 h-24 rounded-full border-4 border-blue-400 flex items-center justify-center bg-white shadow-sm">
                                        <span className="text-xl font-bold text-neutral-900">30%</span>
                                    </div>
                                    <div className="mt-3 font-bold text-neutral-900">Berry Count</div>
                                </div>
                                <div className="text-2xl text-neutral-300">&gt;</div>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full border-2 border-neutral-400 flex items-center justify-center bg-white shadow-sm">
                                        <span className="text-lg font-bold text-neutral-900">10%</span>
                                    </div>
                                    <div className="mt-3 font-bold text-neutral-900">Weight</div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-xl font-bold text-neutral-900 flex items-center gap-2">
                                    <Calculator className="w-5 h-5 text-yellow-600" />
                                    Growing Degree Days (GDD) Calculation
                                </h3>
                                <div className="bg-neutral-900 p-6 rounded-lg text-white shadow-lg">
                                    <div className="flex justify-center mb-6">
                                        <code className="text-lg md:text-xl font-mono">
                                            GDD = Σ((T_max + T_min) / 2 - T_base)
                                        </code>
                                    </div>
                                    <ul className="space-y-2 text-sm text-neutral-400 border-t border-neutral-800 pt-4">
                                        <li>T_max: Daily Maximum Temperature</li>
                                        <li>T_min: Daily Minimum Temperature</li>
                                        <li>T_base: Base Temperature (10°C for Grapes)</li>
                                    </ul>
                                </div>

                                <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                                    <CodeBlock
                                        language="python"
                                        filename="Yield_Model.py"
                                        code={`def calculate_accumulated_gdd(weather_data, t_base=10):
    total_gdd = 0
    for day in weather_data:
        avg_temp = (day.t_max + day.t_min) / 2
        gdd = avg_temp - t_base
        
        # GDD cannot be negative (no growth below base temp)
        if gdd < 0: 
            gdd = 0
            
        total_gdd += gdd
    return total_gdd

def estimate_harvest_date(current_gdd):
    TARGET_GDD = 1800 # Example for Shine Muscat
    return estimate_days_remaining(TARGET_GDD - current_gdd)`}
                                    />
                                </div>
                            </div>

                            {/* 데이터 수집 기술 상세 */}
                            <div className="bg-white border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">3. 데이터 수집 기술의 진화 (Sensing Technologies)</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">3.1. 원격 및 근접 센싱</h4>
                                        
                                        <div className="space-y-4">
                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                                    <Camera className="w-4 h-4" />
                                                    RGB 및 RGB-D 카메라
                                                </h5>
                                                <p className="text-sm text-neutral-600 mb-2">
                                                    가장 널리 사용되는 센서로, 지상 로봇이나 차량(ATV, 트랙터)에 장착하여 이동 중에 데이터를 수집합니다.
                                                </p>
                                                <ul className="text-xs text-neutral-600 space-y-1 list-disc list-inside">
                                                    <li>단순 RGB 이미지는 2차원 정보만 제공</li>
                                                    <li><strong>RGB-D(Depth) 센서</strong>는 깊이 정보를 포함하여 포도송이의 부피나 크기를 3차원으로 측정</li>
                                                    <li>인텔 리얼센스(RealSense)와 같은 저가형 RGB-D 카메라는 야외 환경에서도 포도송이의 크기를 약 2.9~3.6cm 오차 범위 내에서 추정 가능</li>
                                                </ul>
                                            </div>

                                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">분광 이미징 (Hyperspectral & Multispectral)</h5>
                                                <p className="text-sm text-neutral-600 mb-2">
                                                    가시광선 및 근적외선(VNIR)과 단파적외선(SWIR) 영역을 포함하는 초분광 센서는 작물의 생리적 상태와 성숙도를 비파괴적으로 평가합니다.
                                                </p>
                                                <p className="text-xs text-neutral-600">
                                                    드론(UAV)이나 위성에 장착된 다중분광 센서는 NDVI(정규 식생 지수)와 같은 식생 지수를 산출하여 포도원의 활력도(vigor) 지도를 작성하고, 
                                                    이를 기반으로 수확량의 공간적 변동성을 파악합니다.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">스마트폰 기반 센싱</h5>
                                                <p className="text-sm text-neutral-600">
                                                    <strong>PocketLAI</strong>와 같은 스마트폰 앱은 엽면적지수(LAI)를 저비용으로 신속하게 추정하는 데 활용됩니다. 
                                                    이는 고가의 장비 없이도 캐노피의 밀도와 생육 상태를 파악하여 수확량 예측 모델의 입력 변수로 활용될 수 있습니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">3.2. 최적화된 샘플링 프로토콜</h4>
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <p className="text-sm text-neutral-600">
                                                위성 이미지(예: Landsat)의 NDVI 데이터를 활용하여 포도원 내에서 가장 대표성이 높은 위치를 선정하는 알고리즘(예: NDVI3 프로토콜)이 개발되었습니다. 
                                                이는 무작위 샘플링보다 더 적은 지점을 조사하면서도 전체 포도원의 당도(Brix), 산도(pH), 안토시아닌 함량 등을 더 정확하게 대변할 수 있어 노동 효율성을 극대화합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* AI 기반 예측 모델링 상세 */}
                            <div className="bg-white border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">4. 인공지능(AI) 기반 예측 모델링</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">4.1. 머신러닝 (Machine Learning)</h4>
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <p className="text-sm font-semibold text-neutral-700 mb-2">알고리즘:</p>
                                            <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside mb-3">
                                                <li><strong>랜덤 포레스트(Random Forest, RF):</strong> 다양한 환경 변수 간의 복잡한 상호작용을 포착하고 과적합(Overfitting)에 강해 콩, 밀, 쌀 등의 수확량 예측에 자주 활용</li>
                                                <li><strong>서포트 벡터 머신(SVM):</strong> 휴대용 분광계로 얻은 데이터를 입력하여 포도의 당도(°Brix)를 현장에서 실시간으로 예측</li>
                                                <li><strong>부분 최소 제곱 회귀(PLS):</strong> 다변량 데이터 분석에 효과적</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">4.2. 딥러닝 (Deep Learning)</h4>
                                        <div className="space-y-3">
                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">컴퓨터 비전 (CNN)</h5>
                                                <p className="text-sm text-neutral-600">
                                                    합성곱 신경망(CNN)은 이미지에서 과일의 수, 크기, 품종을 자동으로 식별하는 데 탁월한 성능을 보입니다. 
                                                    SegNet, Mask R-CNN, YOLO 등의 아키텍처가 포도알(berry)과 송이(cluster)를 분할(segmentation)하고 계수(counting)하는 데 주로 사용됩니다.
                                                </p>
                                            </div>

                                            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">시계열 분석 (RNN/LSTM)</h5>
                                                <p className="text-sm text-neutral-600">
                                                    기상 데이터나 작물의 생육 시계열 데이터를 처리하기 위해 순환 신경망(RNN)이나 장단기 메모리(LSTM) 모델이 사용되며, 
                                                    이는 가뭄이나 강수량 변화와 같은 시간적 변수가 수확량에 미치는 영향을 모델링하는 데 효과적입니다.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">앙상블 학습 (Ensemble Learning)</h5>
                                                <p className="text-sm text-neutral-600">
                                                    여러 모델(ML과 DL 혼합 등)의 예측 결과를 결합하는 스태킹(Stacking) 기법은 단일 모델보다 예측 정확도와 안정성을 높이는 데 기여합니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">4.3. 설명 가능한 AI (XAI)</h4>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
                                            <p className="text-sm text-neutral-600">
                                                AI 모델의 '블랙박스' 문제를 해결하기 위해 XAI 기술이 도입되고 있습니다. 
                                                이는 모델이 특정 수확량을 예측할 때 기후, 토양, 엽면적 등 어떤 변수가 주요하게 작용했는지를 시각화(예: SHAP, LIME)하여 농업인에게 신뢰성을 제공합니다.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 수확량 예측의 핵심 변수 상세 */}
                            <div className="bg-white border border-neutral-200 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">5. 수확량 예측의 핵심 변수 및 고려 사항</h3>
                                
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">5.1. 수확량 구성 요소 (Yield Components)</h4>
                                        <div className="bg-neutral-50 p-4 rounded-lg">
                                            <p className="text-sm text-neutral-600 mb-3">
                                                가장 직접적인 예측 변수는 <strong>포도송이 수(cluster number)</strong>와 <strong>포도알 수(berry number)</strong>입니다.
                                            </p>
                                            <p className="text-sm text-neutral-600 mb-2">
                                                컴퓨터 비전 시스템은 잎에 가려진 '실제(actual)' 포도알 수를 '보이는(visible)' 포도알 수와 캐노피 특징(잎의 밀도 등)을 결합하여 예측합니다.
                                            </p>
                                            <div className="bg-white p-3 rounded border border-neutral-200">
                                                <p className="text-xs text-neutral-600">
                                                    최근 연구에서는 단순히 보이는 열매만 세는 것이 아니라, 잎에 의한 가림(occlusion) 현상을 보정하는 알고리즘이 높은 정확도(R² &gt; 0.8)를 보이고 있습니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">5.2. 환경 및 기후 요인</h4>
                                        <div className="space-y-3">
                                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">이상 기후</h5>
                                                <p className="text-sm text-neutral-600">
                                                    가뭄, 폭염, 불규칙한 강우 등은 수확량 감소의 주원인입니다. 
                                                    AI 모델은 이러한 기상 변수와 토양 수분, 온도 등을 학습하여 이상 기후 조건에서의 수확량을 예측합니다.
                                                </p>
                                            </div>

                                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">꽃가루(Pollen)</h5>
                                                <p className="text-sm text-neutral-600">
                                                    공기 중 꽃가루 농도를 모니터링하여 초기 개화기 수확 잠재력을 예측하는 모델도 지역 단위 예측에서 높은 정확도(R² &gt; 0.86)를 보입니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold text-neutral-900 mb-3">5.3. 생리적 및 병리학적 요인</h4>
                                        <div className="space-y-3">
                                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">질병</h5>
                                                <p className="text-sm text-neutral-600">
                                                    Eutypa lata와 같은 곰팡이 병원균 감염은 기공 전도도와 광합성을 감소시켜 장기적으로 수확량을 저하시킵니다. 
                                                    저항성 품종(예: Zinfandel)은 감염 시 가스 교환을 하향 조절하여 병원균 확산을 억제하는 반면, 
                                                    감수성 품종(예: Syrah)은 그렇지 못해 피해가 큽니다.
                                                </p>
                                            </div>

                                            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded">
                                                <h5 className="font-semibold text-neutral-900 mb-2">영양 스트레스</h5>
                                                <p className="text-sm text-neutral-600">
                                                    질소 결핍 시 식물은 스트리고락톤(strigolactones)과 같은 신호 물질을 뿌리로 배출하여 근권 미생물과의 상호작용을 조절하고 생존을 도모하며, 
                                                    이는 최종 수확량에 영향을 미칩니다.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 결론 및 향후 전망 */}
                            <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-neutral-900 mb-4">6. 결론 및 향후 전망</h3>
                                <p className="text-neutral-700 mb-4 font-semibold">
                                    현재의 수확량 예측 기술은 전통적인 수동 조사에서 <strong>데이터 기반의 자동화된 정밀 농업</strong>으로 전환되고 있습니다.
                                </p>
                                <div className="space-y-3">
                                    <div className="bg-white p-4 rounded border border-green-200">
                                        <p className="text-sm font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4 text-green-600" />
                                            정확도 향상
                                        </p>
                                        <p className="text-sm text-neutral-600">
                                            컴퓨터 비전과 머신러닝의 결합은 베리 수와 무게를 기반으로 수확 60일 전에도 높은 정확도로 수확량을 예측할 수 있게 했습니다.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-green-200">
                                        <p className="text-sm font-semibold text-neutral-900 mb-2">엣지 컴퓨팅(Edge Computing)</p>
                                        <p className="text-sm text-neutral-600">
                                            통신이 원활하지 않은 농장 환경에서도 실시간 처리가 가능하도록 트랙터나 드론에 탑재된 소형 장치에서 경량화된 AI 모델을 구동하는 기술이 발전하고 있습니다.
                                        </p>
                                    </div>
                                    <div className="bg-white p-4 rounded border border-green-200">
                                        <p className="text-sm font-semibold text-neutral-900 mb-2">통합 모델링</p>
                                        <p className="text-sm text-neutral-600">
                                            향후에는 기상 데이터, 위성 이미지, 지상 로봇의 근접 센싱 데이터, 그리고 식물의 생리적 반응(질병, 영양 상태)을 모두 통합하는 
                                            멀티모달(Multimodal) AI 모델이 주류가 될 것으로 전망됩니다.
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-neutral-700 mt-4 italic">
                                    이러한 기술들은 단순히 생산량을 맞추는 것을 넘어, 기후 위기에 대응하고 와인 품질을 일정하게 유지하며 농가의 수익성을 보장하는 핵심 도구가 될 것입니다.
                                </p>
                            </div>

                            {/* Reference */}
                            <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                                <h4 className="flex items-center gap-2 font-bold text-neutral-900 mb-2">
                                    <BookOpen className="w-4 h-4" /> Reference
                                </h4>
                                <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                                    <li>Research: AI와 머신러닝 기반 정밀 포도 수확량 예측 혼신.pdf</li>
                                    <li>Research: 포도 수확량 예측을 위한 데이터 분석 및 모델링 가이드.pdf</li>
                                    <li>Yield Component Weighting: Cluster Count (60%), Berry Count (30%), Weight (10%)</li>
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </Container>
        </main>
    );
}
