'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BookOpen,
  Plus,
  Calendar,
  Droplets,
  Bug,
  Scissors,
  Leaf,
  Beaker,
  Package,
  Sun,
  X,
  ChevronRight,
  LogIn,
  CloudRain,
  Thermometer,
  Camera,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/lib/auth-store';
import { api } from '@/lib/api-client';

interface FieldBookEntry {
  id: number | string;
  intervention_type: string;
  intervention_date: string;
  notes: string;
  weather_snapshot?: { temperature?: number; humidity?: number; condition?: string };
  growth_stage_snapshot?: string;
  details?: Record<string, unknown>;
  created_at: string;
}

const interventionTypes = [
  { value: 'spray', label: '방제', icon: Bug, color: '#EF4444' },
  { value: 'irrigation', label: '관수', icon: Droplets, color: '#3B82F6' },
  { value: 'fertilizer_soil', label: '토양 시비', icon: Beaker, color: '#F59E0B' },
  { value: 'fertilizer_foliar', label: '엽면 시비', icon: Leaf, color: '#22C55E' },
  { value: 'pruning_winter', label: '겨울 전정', icon: Scissors, color: '#8B5CF6' },
  { value: 'pruning_summer', label: '여름 전정', icon: Scissors, color: '#A855F7' },
  { value: 'thinning_shoot', label: '적심', icon: Leaf, color: '#10B981' },
  { value: 'thinning_cluster', label: '적방', icon: Leaf, color: '#14B8A6' },
  { value: 'harvest', label: '수확', icon: Package, color: '#D4AF37' },
  { value: 'other', label: '기타', icon: Sun, color: '#6B7280' },
];

const getTypeConfig = (type: string) =>
  interventionTypes.find((t) => t.value === type) || interventionTypes[interventionTypes.length - 1];

// 데모 영농일지 데이터
const demoEntries: FieldBookEntry[] = [
  {
    id: 'demo-1',
    intervention_type: 'pruning_winter',
    intervention_date: '2026-02-12',
    notes: '주지 전정 완료. 2년생 가지 위주로 정리, 상처면 도포제 처리함.',
    weather_snapshot: { temperature: 3.2, humidity: 55, condition: '맑음' },
    growth_stage_snapshot: 'dormant',
    created_at: '2026-02-12T15:30:00Z',
  },
  {
    id: 'demo-2',
    intervention_type: 'spray',
    intervention_date: '2026-02-08',
    notes: '석회유황합제 5배액 살포. 월동 병해충 예방 목적.',
    weather_snapshot: { temperature: 5.1, humidity: 48, condition: '흐림' },
    growth_stage_snapshot: 'dormant',
    details: { chemical: '석회유황합제', dilution: '5배' },
    created_at: '2026-02-08T10:00:00Z',
  },
  {
    id: 'demo-3',
    intervention_type: 'fertilizer_soil',
    intervention_date: '2026-02-03',
    notes: '기비 시비 - 유기질비료 10-10-10 주당 2kg 투입. 토양분석 결과 반영.',
    weather_snapshot: { temperature: 1.8, humidity: 62, condition: '맑음' },
    growth_stage_snapshot: 'dormant',
    created_at: '2026-02-03T09:00:00Z',
  },
  {
    id: 'demo-4',
    intervention_type: 'other',
    intervention_date: '2026-01-28',
    notes: '동해 피해 점검. 3구역 일부 수체 피해 확인, 사진 촬영 및 기록 완료.',
    weather_snapshot: { temperature: -8.3, humidity: 35, condition: '맑음' },
    growth_stage_snapshot: 'dormant',
    created_at: '2026-01-28T11:00:00Z',
  },
];

export default function FieldBookPage() {
  const { isLoggedIn } = useAuthStore();
  const [entries, setEntries] = useState<FieldBookEntry[]>(demoEntries);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<FieldBookEntry | null>(null);
  const [isLive, setIsLive] = useState(false);

  // Form state
  const [formType, setFormType] = useState('spray');
  const [formDate, setFormDate] = useState(new Date().toISOString().split('T')[0]);
  const [formNotes, setFormNotes] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchEntries = async () => {
      try {
        const { data } = await api.get('/farms/logs/');
        const results = data.results || data;
        if (Array.isArray(results) && results.length > 0) {
          setEntries(results);
          setIsLive(true);
        }
      } catch { /* 실패 시 데모 데이터 유지 */ }
    };

    fetchEntries();
  }, [isLoggedIn]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('로그인 후 영농일지를 작성할 수 있습니다.');
      return;
    }

    setIsSaving(true);
    try {
      const { data } = await api.post('/farms/logs/', {
        intervention_type: formType,
        intervention_date: formDate,
        notes: formNotes,
      });
      setEntries((prev) => [data, ...prev]);
      setIsFormOpen(false);
      setFormNotes('');
    } catch (err: any) {
      alert(err?.response?.data?.error || '저장에 실패했습니다.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-secondary-gold" />
            영농일지
          </h1>
          <p className="text-neutral-cream/60 text-sm mt-1">
            {isLive ? '내 농장 영농 기록' : '농작업을 기록하고 관리하세요'}
          </p>
        </div>

        <button
          onClick={() => {
            if (!isLoggedIn) {
              alert('로그인 후 영농일지를 작성할 수 있습니다.');
              return;
            }
            setIsFormOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-purple hover:bg-primary-purple/80 text-white text-sm font-medium transition-colors"
        >
          <Plus className="w-4 h-4" />
          기록 작성
        </button>
      </div>

      {/* Login prompt */}
      {!isLoggedIn && (
        <Card className="border-secondary-gold/20">
          <CardContent className="p-4 flex items-center gap-3">
            <LogIn className="w-5 h-5 text-secondary-gold shrink-0" />
            <p className="text-sm text-neutral-cream/60">
              <span className="text-secondary-gold font-medium">로그인</span>하시면 영농일지를 직접 작성하고 기록을 관리할 수 있습니다. 아래는 샘플 데이터입니다.
            </p>
          </CardContent>
        </Card>
      )}

      {/* Entry List */}
      <div className="space-y-3">
        {entries.map((entry, i) => {
          const typeConfig = getTypeConfig(entry.intervention_type);
          const Icon = typeConfig.icon;

          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                className="cursor-pointer hover:border-white/20 transition-colors"
                onClick={() => setSelectedEntry(entry)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Type Icon */}
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${typeConfig.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: typeConfig.color }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="text-xs font-medium px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: `${typeConfig.color}20`, color: typeConfig.color }}
                        >
                          {typeConfig.label}
                        </span>
                        <span className="text-[10px] text-neutral-cream/30 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {entry.intervention_date}
                        </span>
                      </div>

                      <p className="text-sm text-neutral-cream/80 line-clamp-2">
                        {entry.notes}
                      </p>

                      {/* Weather snapshot */}
                      {entry.weather_snapshot && (
                        <div className="flex items-center gap-3 mt-2">
                          {entry.weather_snapshot.temperature !== undefined && (
                            <span className="text-[10px] text-neutral-cream/30 flex items-center gap-1">
                              <Thermometer className="w-3 h-3" />
                              {entry.weather_snapshot.temperature}°C
                            </span>
                          )}
                          {entry.weather_snapshot.humidity !== undefined && (
                            <span className="text-[10px] text-neutral-cream/30 flex items-center gap-1">
                              <Droplets className="w-3 h-3" />
                              {entry.weather_snapshot.humidity}%
                            </span>
                          )}
                          {entry.weather_snapshot.condition && (
                            <span className="text-[10px] text-neutral-cream/30 flex items-center gap-1">
                              <CloudRain className="w-3 h-3" />
                              {entry.weather_snapshot.condition}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <ChevronRight className="w-4 h-4 text-neutral-cream/20 shrink-0 mt-2" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}

        {entries.length === 0 && (
          <div className="text-center py-16 text-neutral-cream/30">
            <BookOpen className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">아직 기록된 영농일지가 없습니다</p>
            <p className="text-xs mt-1">첫 번째 기록을 작성해보세요</p>
          </div>
        )}
      </div>

      {/* New Entry Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-black border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-lg font-serif font-bold text-white">영농일지 작성</h3>
                <button onClick={() => setIsFormOpen(false)} className="p-1 rounded-lg hover:bg-white/10">
                  <X className="w-5 h-5 text-neutral-cream/60" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Type Selection */}
                <div>
                  <label className="block text-xs text-neutral-cream/50 mb-2">작업 유형</label>
                  <div className="grid grid-cols-5 gap-2">
                    {interventionTypes.slice(0, 10).map((type) => {
                      const TypeIcon = type.icon;
                      return (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => setFormType(type.value)}
                          className={`flex flex-col items-center gap-1 p-2 rounded-lg text-[10px] transition-colors ${
                            formType === type.value
                              ? 'bg-primary-purple/20 border border-primary-purple/30 text-white'
                              : 'bg-white/5 text-neutral-cream/50 hover:text-neutral-cream'
                          }`}
                        >
                          <TypeIcon className="w-4 h-4" style={{ color: type.color }} />
                          {type.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs text-neutral-cream/50 mb-1.5">작업일</label>
                  <input
                    type="date"
                    value={formDate}
                    onChange={(e) => setFormDate(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-primary-purple/50 transition-colors"
                    required
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs text-neutral-cream/50 mb-1.5">작업 내용</label>
                  <textarea
                    value={formNotes}
                    onChange={(e) => setFormNotes(e.target.value)}
                    placeholder="작업 내용을 기록하세요..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-cream/30 focus:outline-none focus:border-primary-purple/50 resize-none h-32 transition-colors"
                    required
                  />
                </div>

                {/* Photo Upload */}
                <div>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-neutral-cream/50 hover:text-neutral-cream transition-colors"
                  >
                    <Camera className="w-4 h-4" />
                    사진 첨부 (선택)
                  </button>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSaving}
                  className="w-full px-4 py-3 rounded-xl bg-primary-purple hover:bg-primary-purple/80 disabled:opacity-50 text-white font-medium text-sm transition-colors"
                >
                  {isSaving ? '저장 중...' : '기록 저장'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Entry Detail Modal */}
      <AnimatePresence>
        {selectedEntry && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedEntry(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-black border border-white/10 rounded-2xl w-full max-w-lg overflow-hidden"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-lg font-serif font-bold text-white">기록 상세</h3>
                <button onClick={() => setSelectedEntry(null)} className="p-1 rounded-lg hover:bg-white/10">
                  <X className="w-5 h-5 text-neutral-cream/60" />
                </button>
              </div>

              <div className="p-6 space-y-4">
                {(() => {
                  const typeConfig = getTypeConfig(selectedEntry.intervention_type);
                  const Icon = typeConfig.icon;
                  return (
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-lg flex items-center justify-center"
                        style={{ backgroundColor: `${typeConfig.color}20` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: typeConfig.color }} />
                      </div>
                      <div>
                        <span
                          className="text-sm font-medium px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${typeConfig.color}20`, color: typeConfig.color }}
                        >
                          {typeConfig.label}
                        </span>
                        <p className="text-xs text-neutral-cream/40 mt-1">
                          {selectedEntry.intervention_date}
                        </p>
                      </div>
                    </div>
                  );
                })()}

                <div className="p-4 rounded-lg bg-white/5">
                  <p className="text-sm text-neutral-cream/80 leading-relaxed whitespace-pre-wrap">
                    {selectedEntry.notes}
                  </p>
                </div>

                {selectedEntry.weather_snapshot && (
                  <div>
                    <p className="text-xs text-neutral-cream/40 mb-2">작업 당시 환경</p>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedEntry.weather_snapshot.temperature !== undefined && (
                        <div className="p-3 rounded-lg bg-white/5 text-center">
                          <Thermometer className="w-4 h-4 mx-auto text-red-400 mb-1" />
                          <p className="text-sm font-bold text-white">
                            {selectedEntry.weather_snapshot.temperature}°C
                          </p>
                          <p className="text-[10px] text-neutral-cream/40">기온</p>
                        </div>
                      )}
                      {selectedEntry.weather_snapshot.humidity !== undefined && (
                        <div className="p-3 rounded-lg bg-white/5 text-center">
                          <Droplets className="w-4 h-4 mx-auto text-blue-400 mb-1" />
                          <p className="text-sm font-bold text-white">
                            {selectedEntry.weather_snapshot.humidity}%
                          </p>
                          <p className="text-[10px] text-neutral-cream/40">습도</p>
                        </div>
                      )}
                      {selectedEntry.weather_snapshot.condition && (
                        <div className="p-3 rounded-lg bg-white/5 text-center">
                          <CloudRain className="w-4 h-4 mx-auto text-amber-400 mb-1" />
                          <p className="text-sm font-bold text-white">
                            {selectedEntry.weather_snapshot.condition}
                          </p>
                          <p className="text-[10px] text-neutral-cream/40">날씨</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {selectedEntry.growth_stage_snapshot && (
                  <div className="flex items-center gap-2 text-xs text-neutral-cream/40">
                    <Leaf className="w-3.5 h-3.5 text-secondary-green" />
                    생육 단계: <span className="text-white">
                      {selectedEntry.growth_stage_snapshot === 'dormant' ? '휴면기' :
                       selectedEntry.growth_stage_snapshot === 'fruit_set' ? '착과기' :
                       selectedEntry.growth_stage_snapshot === 'veraison' ? '착색기' :
                       selectedEntry.growth_stage_snapshot}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
