'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert } from 'lucide-react';

interface RiskGaugeProps {
  riskLevel?: string;
  riskScore?: number;
  color?: string;
  alerts?: Array<{ text: string; severity: string }>;
}

const RISK_COLORS: Record<string, string> = {
  '높음': '#EF4444',
  '중간': '#F59E0B',
  '낮음': '#10B981',
  '정보없음': '#9CA3AF',
};

export function RiskGauge({ riskLevel, riskScore, color, alerts }: RiskGaugeProps) {
  const gaugeColor = color || RISK_COLORS[riskLevel || '정보없음'] || '#9CA3AF';
  const score = riskScore ?? 0;
  const rotation = Math.min(score, 100) * 1.8; // 0-180 degrees

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-base">
          <ShieldAlert className="h-4 w-4" />
          질병 위험도
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        {/* Gauge */}
        <div className="relative h-32 w-48">
          <svg viewBox="0 0 200 120" className="w-full h-full">
            {/* Background arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#f0f0f0"
              strokeWidth="16"
              strokeLinecap="round"
            />
            {/* Filled arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke={gaugeColor}
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={`${rotation * 1.4} 999`}
            />
            {/* Score text */}
            <text x="100" y="85" textAnchor="middle" className="text-3xl font-bold" fill={gaugeColor}>
              {score.toFixed(0)}
            </text>
            <text x="100" y="105" textAnchor="middle" className="text-sm" fill="#6b7280">
              {riskLevel || '-'}
            </text>
          </svg>
        </div>

        {/* Alerts */}
        {alerts && alerts.length > 0 && (
          <div className="w-full space-y-2">
            {alerts.map((alert, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg border px-3 py-2 text-sm">
                <span className={`h-2 w-2 rounded-full ${
                  alert.severity === 'danger' ? 'bg-red-500' :
                  alert.severity === 'caution' ? 'bg-yellow-500' :
                  'bg-blue-500'
                }`} />
                {alert.text}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
