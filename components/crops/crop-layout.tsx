import { ReactNode } from 'react';

interface CropLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  stats?: Array<{
    label: string;
    value: string;
    color: 'green' | 'purple' | 'blue' | 'yellow' | 'red';
  }>;
}

const colorClasses = {
  green: 'bg-green-500/10 text-green-400',
  purple: 'bg-purple-500/10 text-purple-400',
  blue: 'bg-blue-500/10 text-blue-400',
  yellow: 'bg-yellow-500/10 text-yellow-400',
  red: 'bg-red-500/10 text-red-400',
};

export function CropLayout({ title, description, children, stats }: CropLayoutProps) {
  return (
    <main className="min-h-screen bg-neutral-black text-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="text-primary-green text-sm font-medium uppercase tracking-widest mb-4">작물 인텔리전스</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{title}</h1>
          <p className="text-xl text-neutral-cream/70 mb-6">{description}</p>
          
          {stats && stats.length > 0 && (
            <div className="inline-flex items-center gap-4 text-sm text-neutral-cream/60">
              {stats.map((stat, index) => (
                <span key={index} className={`px-3 py-1 rounded-full ${colorClasses[stat.color]}`}>
                  {stat.value}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {children}
        
        <section className="text-center py-12">
          <h2 className="text-2xl font-serif font-bold mb-4">{title} 데이터 기반 최적화</h2>
          <p className="text-neutral-cream/70 mb-8 max-w-2xl mx-auto">
            FarmSense 플랫폼으로 정밀한 환경 제어와 데이터 기반 의사결정을 시작하세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/smartfarm/dashboard" className="px-8 py-3 bg-primary-green text-white font-medium rounded-lg hover:bg-green-600 transition-colors">
              스마트팜 대시보드 시작하기
            </a>
            <a href="/contact" className="px-8 py-3 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-colors">
              전문가 상담 신청
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}