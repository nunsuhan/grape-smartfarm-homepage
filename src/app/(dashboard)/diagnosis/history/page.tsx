'use client';

import { useRef, useState } from 'react';
import { Upload, Microscope, AlertTriangle, Loader2, X, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDiagnosis, type DiagnosisResult } from '@/hooks/use-diagnosis';
import { cn } from '@/lib/utils';

const RISK_BADGE: Record<string, { label: string; variant: 'default' | 'secondary' | 'destructive' }> = {
  safe: { label: '안전', variant: 'secondary' },
  watch: { label: '주의', variant: 'default' },
  warning: { label: '경고', variant: 'destructive' },
  critical: { label: '위험', variant: 'destructive' },
};

export default function DiagnosisHistoryPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const { results, diagnose, isLoading } = useDiagnosis();
  const [selected, setSelected] = useState<DiagnosisResult | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) return;
    diagnose(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">진단 이력</h1>
        <p className="text-muted-foreground">질병 진단 및 분석 기록</p>
      </div>

      {/* Upload zone */}
      <Card>
        <CardContent className="p-0">
          <div
            className={cn(
              'flex flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed p-8 transition-colors cursor-pointer',
              dragOver ? 'border-primary bg-primary/5' : 'border-muted hover:border-primary/50',
              isLoading && 'pointer-events-none opacity-60'
            )}
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={handleDrop}
            onClick={() => fileRef.current?.click()}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-sm text-muted-foreground">진단 분석 중...</p>
              </>
            ) : (
              <>
                <Upload className="h-8 w-8 text-muted-foreground" />
                <p className="text-sm font-medium">이미지를 드래그하거나 클릭하여 업로드</p>
                <p className="text-xs text-muted-foreground">JPG, PNG (최대 10MB)</p>
              </>
            )}
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFile(file);
              e.target.value = '';
            }}
          />
        </CardContent>
      </Card>

      {/* Results grid */}
      {results.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result) => (
            <Card
              key={result.id}
              className="cursor-pointer overflow-hidden transition-shadow hover:shadow-md"
              onClick={() => setSelected(result)}
            >
              <CardContent className="p-0">
                {result.imageUrl && (
                  <div className="relative h-40 overflow-hidden bg-muted">
                    <img
                      src={result.imageUrl}
                      alt="진단 이미지"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="space-y-2 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {result.diagnosis?.disease_name || '분석 완료'}
                    </span>
                    {result.detection?.risk_level && (
                      <Badge variant={RISK_BADGE[result.detection.risk_level]?.variant || 'secondary'}>
                        {RISK_BADGE[result.detection.risk_level]?.label || result.detection.risk_level}
                      </Badge>
                    )}
                  </div>
                  {result.diagnosis?.confidence != null && (
                    <p className="text-xs text-muted-foreground">
                      신뢰도: {(result.diagnosis.confidence * 100).toFixed(0)}%
                    </p>
                  )}
                  <p className="text-xs text-muted-foreground">
                    {new Date(result.timestamp).toLocaleString('ko-KR')}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Empty state */}
      {results.length === 0 && !isLoading && (
        <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
          <Microscope className="h-12 w-12 mb-3 opacity-30" />
          <p className="text-sm">진단 이력이 없습니다</p>
          <p className="text-xs mt-1">이미지를 업로드하여 진단을 시작하세요</p>
        </div>
      )}

      {/* Detail dialog */}
      <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>진단 상세</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-4">
              {selected.imageUrl && (
                <img
                  src={selected.imageUrl}
                  alt="진단 이미지"
                  className="w-full rounded-lg"
                />
              )}

              {/* Detection */}
              {selected.detection && (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">감지 결과</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant={RISK_BADGE[selected.detection.risk_level]?.variant || 'secondary'}>
                      {RISK_BADGE[selected.detection.risk_level]?.label || selected.detection.risk_level}
                    </Badge>
                    <span className="text-sm">
                      위험 점수: {(selected.detection.risk_score * 100).toFixed(0)}%
                    </span>
                  </div>
                  {selected.detection.symptoms?.map((s, i) => (
                    <div key={i} className="rounded-lg border p-3 text-sm">
                      <p className="font-medium">{s.name}</p>
                      <p className="text-xs text-muted-foreground">
                        위치: {s.location} &middot; 심각도: {s.severity_level} &middot; 신뢰도: {(s.confidence * 100).toFixed(0)}%
                      </p>
                    </div>
                  ))}
                  {selected.detection.early_action && (
                    <div className="flex items-start gap-2 rounded-lg bg-yellow-50 p-3 text-sm">
                      <AlertTriangle className="h-4 w-4 shrink-0 text-yellow-600 mt-0.5" />
                      {selected.detection.early_action}
                    </div>
                  )}
                </div>
              )}

              {/* Prescription */}
              {selected.prescription && (
                <div className="space-y-2">
                  <h3 className="text-sm font-semibold">처방 정보</h3>
                  <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                    {selected.prescription.treatment_info}
                  </p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
