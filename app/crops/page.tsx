import { Container } from '@/components/ui/container';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CropCommonTechSection } from '@/components/crops/crop-common-tech-section';

const crops = [
  {
    name: 'Strawberry',
    scientific: 'Fragaria × ananassa',
    description: '187농가 데이터 기반 딸기 재배 최적 전략. 품종별 특성부터 환경 관리까지 종합 솔루션.',
    features: ['품종 최적화', '환경 제어', '병해 관리', '수익 분석'],
    image: '/images/crops/strawberry.jpg',
    href: '/crops/strawberry',
  },
  {
    name: 'Grape',
    scientific: 'Vitis vinifera',
    description: '포도 재배를 위한 종합적인 스마트팜 솔루션. 생육 모니터링, 당도 분석, 수확 예측까지.',
    features: ['생육 모델', '당도 분석', '수확 예측', '병해 관리'],
    image: '/images/crops/grape.jpg',
    href: '/crops/grape',
  },
  {
    name: 'Melon',
    scientific: 'Cucumis melo',
    description: '멜론의 최적 성장을 위한 환경 제어 및 품질 관리 솔루션.',
    features: ['환경 제어', '당도 관리', '크기 예측', '수확 시기'],
    image: '/images/crops/melon.jpg',
    href: '/crops/melon',
  },
  {
    name: 'Apple',
    scientific: 'Malus domestica',
    description: '사과 재배를 위한 정밀 농업 솔루션. 개화기부터 수확까지 전 과정 관리.',
    features: ['개화 모니터링', '과실 발달', '색상 관리', '저장 최적화'],
    image: '/images/crops/apple.jpg',
    href: '/crops/apple',
  },
  {
    name: 'Other Crops',
    scientific: 'Various',
    description: '다양한 작물을 위한 맞춤형 스마트팜 솔루션. 연구 중인 작물 포함.',
    features: ['맞춤형 모델', '작물 특화', '데이터 분석', '시범 적용'],
    image: '/images/crops/other.jpg',
    href: '/crops/other',
  },
];

export default function CropsPage() {
  return (
    <main className="min-h-screen bg-neutral-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/10 via-transparent to-neutral-black" />
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              FarmSense Crops
            </h1>
            <p className="text-xl md:text-2xl text-neutral-cream/80 mb-8">
              Specialized agricultural intelligence solutions for different crops.
            </p>
            <p className="text-lg text-neutral-cream/60">
              Each crop has unique requirements — FarmSense provides tailored solutions for optimal growth and quality.
            </p>
          </div>
        </Container>
      </section>

      {/* Crops Grid */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {crops.map((crop) => (
              <a
                key={crop.name}
                href={crop.href}
                className="group block"
              >
                <Card className="h-full bg-neutral-black/50 border-white/10 hover:border-green-500/30 transition-all duration-300 overflow-hidden">
                  <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-600/20 flex items-center justify-center">
                    <div className="text-6xl">
                      {crop.name === 'Grape' && '🍇'}
                      {crop.name === 'Melon' && '🍈'}
                      {crop.name === 'Apple' && '🍎'}
                      {crop.name === 'Other Crops' && '🌱'}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{crop.name}</CardTitle>
                    <CardDescription className="text-sm">{crop.scientific}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-cream/70 mb-6">
                      {crop.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {crop.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-white/5 rounded-full text-xs text-neutral-cream/60 border border-white/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="pt-6 border-t border-white/10">
                      <span className="text-green-400 text-sm font-medium group-hover:underline">
                        View {crop.name} solutions →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* Platform Benefits */}
      <section className="py-20 bg-white/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-center mb-12">
              Why Crop-Specific Solutions Matter
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Tailored Algorithms</h3>
                  <p className="text-neutral-cream/70">
                    Each crop has unique growth patterns and requirements. FarmSense develops crop-specific AI models for accurate predictions.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Optimal Resource Use</h3>
                  <p className="text-neutral-cream/70">
                    Crop-specific solutions ensure water, fertilizer, and other resources are used efficiently for each crop type.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Quality Optimization</h3>
                  <p className="text-neutral-cream/70">
                    Different crops have different quality metrics. Our solutions optimize for the specific quality requirements of each crop.
                  </p>
                </div>
                
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-xl font-semibold mb-3">Market Alignment</h3>
                  <p className="text-neutral-cream/70">
                    Crop-specific data helps align production with market demands and export requirements for each crop type.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CropCommonTechSection />

    </main>
  );
}