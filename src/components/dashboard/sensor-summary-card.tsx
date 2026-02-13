'use client';

import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';

interface SensorSummaryCardProps {
  label: string;
  icon: LucideIcon;
  value?: number;
  unit: string;
  status?: 'normal' | 'low' | 'high' | 'unknown';
  color: string;
  loading?: boolean;
}

const STATUS_LABELS: Record<string, { text: string; className: string }> = {
  normal: { text: '정상', className: 'text-green-600 bg-green-50' },
  low: { text: '낮음', className: 'text-blue-600 bg-blue-50' },
  high: { text: '높음', className: 'text-red-600 bg-red-50' },
  unknown: { text: '-', className: 'text-gray-500 bg-gray-50' },
};

export function SensorSummaryCard({ label, icon: Icon, value, unit, status, color, loading }: SensorSummaryCardProps) {
  const statusInfo = STATUS_LABELS[status || 'unknown'];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
        <Icon className={cn('h-4 w-4', color)} />
      </CardHeader>
      <CardContent>
        {loading ? (
          <Skeleton className="h-8 w-20" />
        ) : (
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold">
              {value != null ? value.toFixed(1) : '--'}
            </span>
            <span className="text-sm text-muted-foreground">{unit}</span>
            {statusInfo && (
              <span className={cn('ml-auto rounded-full px-2 py-0.5 text-xs font-medium', statusInfo.className)}>
                {statusInfo.text}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
