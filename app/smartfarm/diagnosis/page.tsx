'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Upload,
  Camera,
  Search,
  Shield,
  AlertTriangle,
  CheckCircle,
  X,
  ImageIcon,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DEMO_DIAGNOSIS_RESULTS } from '@/lib/demo-data';

type RiskLevel = 'safe' | 'watch' | 'danger';

const riskConfig: Record<RiskLevel, { label: string; color: string; icon: typeof CheckCircle }> = {
  safe: { label: '안전', color: '#22C55E', icon: CheckCircle },
  watch: { label: '주의', color: '#F59E0B', icon: AlertTriangle },
  danger: { label: '위험', color: '#EF4444', icon: AlertTriangle },
};

export default function DiagnosisPage() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [selectedResult, setSelectedResult] = useState<string | null>(null);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Demo mode - show alert
    alert('데모 모드에서는 이미지 업로드가 제한됩니다. 실제 서비스에서 AI 진단을 이용해보세요!');
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const selected = DEMO_DIAGNOSIS_RESULTS.find((r) => r.id === selectedResult);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
          <Search className="w-6 h-6 text-secondary-green" />
          AI 질병 진단
        </h1>
        <p className="text-neutral-cream/60 text-sm mt-1">
          포도 잎 사진을 업로드하면 AI가 병해충을 진단합니다
        </p>
      </div>

      {/* Upload Area */}
      <Card>
        <CardContent className="p-6">
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={() => setIsDragOver(false)}
            className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors cursor-pointer ${
              isDragOver
                ? 'border-primary-purple bg-primary-purple/10'
                : 'border-white/20 hover:border-white/30'
            }`}
            onClick={() =>
              alert(
                '데모 모드에서는 이미지 업로드가 제한됩니다. 실제 서비스에서 AI 진단을 이용해보세요!'
              )
            }
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary-purple/20 flex items-center justify-center">
                <Upload className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <p className="text-white font-medium">
                  이미지를 드래그하거나 클릭하여 업로드
                </p>
                <p className="text-neutral-cream/40 text-sm mt-1">
                  JPG, PNG 형식 지원 (최대 10MB)
                </p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-purple/20 text-purple-400 text-sm hover:bg-primary-purple/30 transition-colors">
                  <Camera className="w-4 h-4" />
                  사진 촬영
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 text-neutral-cream/70 text-sm hover:bg-white/15 transition-colors">
                  <ImageIcon className="w-4 h-4" />
                  갤러리에서 선택
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How it works */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">AI 진단 과정</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                step: 1,
                title: '이미지 업로드',
                desc: '포도 잎의 앞면을 촬영하여 업로드',
                icon: Camera,
              },
              {
                step: 2,
                title: 'AI 분석',
                desc: 'PyTorch 딥러닝 모델이 병해충 식별',
                icon: Search,
              },
              {
                step: 3,
                title: '결과 및 조치',
                desc: '진단 결과와 권장 방제법 제공',
                icon: Shield,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-primary-purple/20 flex items-center justify-center shrink-0 text-sm font-bold text-purple-400">
                    {item.step}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-neutral-cream/50 mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Past Results */}
      <div>
        <h2 className="text-lg font-serif font-bold text-white mb-4">
          진단 이력 (샘플)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DEMO_DIAGNOSIS_RESULTS.map((result, i) => {
            const risk = riskConfig[result.risk_level as RiskLevel];
            const RiskIcon = risk.icon;

            return (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card
                  className="cursor-pointer hover:border-white/20 transition-colors"
                  onClick={() => setSelectedResult(result.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Placeholder image */}
                      <div className="w-20 h-20 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                        <ImageIcon className="w-8 h-8 text-neutral-cream/20" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <RiskIcon
                            className="w-4 h-4"
                            style={{ color: risk.color }}
                          />
                          <span
                            className="text-xs font-medium px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${risk.color}20`,
                              color: risk.color,
                            }}
                          >
                            {risk.label}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white truncate">
                          {result.disease_name}
                        </p>
                        <p className="text-xs text-neutral-cream/50 mt-1">
                          신뢰도: {(result.confidence * 100).toFixed(0)}% |{' '}
                          {result.severity}
                        </p>
                        <p className="text-xs text-neutral-cream/40 mt-1">
                          {new Date(result.timestamp).toLocaleDateString('ko-KR')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedResult(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-black border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-lg font-serif font-bold text-white">
                  진단 상세
                </h3>
                <button
                  onClick={() => setSelectedResult(null)}
                  className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-cream/60" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {/* Image placeholder */}
                <div className="w-full h-48 rounded-xl bg-white/5 flex items-center justify-center">
                  <ImageIcon className="w-16 h-16 text-neutral-cream/10" />
                </div>

                {/* Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {(() => {
                      const risk = riskConfig[selected.risk_level as RiskLevel];
                      const RiskIcon = risk.icon;
                      return (
                        <>
                          <RiskIcon className="w-5 h-5" style={{ color: risk.color }} />
                          <span className="text-lg font-bold text-white">
                            {selected.disease_name}
                          </span>
                        </>
                      );
                    })()}
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-white/5 text-center">
                      <p className="text-xs text-neutral-cream/50">신뢰도</p>
                      <p className="text-lg font-bold text-white">
                        {(selected.confidence * 100).toFixed(0)}%
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 text-center">
                      <p className="text-xs text-neutral-cream/50">심각도</p>
                      <p className="text-lg font-bold text-white">
                        {selected.severity}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/5 text-center">
                      <p className="text-xs text-neutral-cream/50">위험도</p>
                      <p
                        className="text-lg font-bold"
                        style={{
                          color: riskConfig[selected.risk_level as RiskLevel].color,
                        }}
                      >
                        {riskConfig[selected.risk_level as RiskLevel].label}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-secondary-green/10 border border-secondary-green/20">
                    <p className="text-xs text-secondary-green font-medium mb-1">
                      권장 조치
                    </p>
                    <p className="text-sm text-neutral-cream/80">
                      {selected.early_action}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
