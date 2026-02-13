'use client';

import { useState } from 'react';
import { Thermometer, Droplets, CloudRain, Sun, Wind, Gauge } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useFarmStore } from '@/stores/farm-store';
import { useSensorCurrent, useSensorGraph } from '@/hooks/use-sensors';
import { tokens } from '@/lib/tokens';
import { cn } from '@/lib/utils';

type Period = 'day' | 'week' | 'month';

const SENSOR_CONFIG = [
  { key: 'temperature', label: '온도', unit: '°C', icon: Thermometer, color: tokens.colors.sensor.temperature },
  { key: 'humidity', label: '습도', unit: '%', icon: Droplets, color: tokens.colors.sensor.humidity },
  { key: 'soil_moisture', label: '토양수분', unit: '%', icon: CloudRain, color: tokens.colors.sensor.soilMoisture },
] as const;

export default function SensorsPage() {
  const [period, setPeriod] = useState<Period>('day');
  const selectedHouse = useFarmStore((s) => s.selectedHouse);
  const house = selectedHouse();

  const { data: current, isLoading: currentLoading } = useSensorCurrent();
  const { data: graph, isLoading: graphLoading } = useSensorGraph(period);

  const chartData = graph?.labels?.map((label, i) => ({
    time: label,
    temperature: graph.temperature?.my_farm?.avg?.[i],
    humidity: graph.humidity?.my_farm?.avg?.[i],
    soil_moisture: graph.soil_moisture?.my_farm?.avg?.[i],
    model_temp: graph.temperature?.model_farm?.avg?.[i],
    model_humidity: graph.humidity?.model_farm?.avg?.[i],
  })) || [];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">센서 모니터링</h1>
          <p className="text-muted-foreground">{house?.name} 실시간 센서 데이터</p>
        </div>
        <Tabs value={period} onValueChange={(v) => setPeriod(v as Period)}>
          <TabsList>
            <TabsTrigger value="day">일간</TabsTrigger>
            <TabsTrigger value="week">주간</TabsTrigger>
            <TabsTrigger value="month">월간</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Current values */}
      <div className="grid gap-4 sm:grid-cols-3">
        {SENSOR_CONFIG.map(({ key, label, unit, icon: Icon, color }) => {
          const metric = current?.data?.[key];
          return (
            <Card key={key}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">{label}</CardTitle>
                <Icon className="h-4 w-4" style={{ color }} />
              </CardHeader>
              <CardContent>
                {currentLoading ? (
                  <Skeleton className="h-10 w-24" />
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold">{metric?.value?.toFixed(1) ?? '--'}</span>
                    <span className="text-sm text-muted-foreground">{unit}</span>
                    <span className={cn(
                      'ml-auto rounded-full px-2 py-0.5 text-xs font-medium',
                      metric?.status === 'normal' ? 'bg-green-50 text-green-600' :
                      metric?.status === 'high' ? 'bg-red-50 text-red-600' :
                      metric?.status === 'low' ? 'bg-blue-50 text-blue-600' :
                      'bg-gray-50 text-gray-500'
                    )}>
                      {metric?.status === 'normal' ? '정상' :
                       metric?.status === 'high' ? '높음' :
                       metric?.status === 'low' ? '낮음' : '-'}
                    </span>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Individual charts */}
      {SENSOR_CONFIG.map(({ key, label, unit, color }) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle className="text-base">{label} 추이</CardTitle>
          </CardHeader>
          <CardContent>
            {graphLoading ? (
              <Skeleton className="h-52 w-full" />
            ) : (
              <ResponsiveContainer width="100%" height={210}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="time" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8 }} />
                  <Line
                    type="monotone"
                    dataKey={key}
                    name={`내 농장 (${unit})`}
                    stroke={color}
                    strokeWidth={2}
                    dot={false}
                  />
                  {graph?.model_farm && (
                    <Line
                      type="monotone"
                      dataKey={key === 'temperature' ? 'model_temp' : key === 'humidity' ? 'model_humidity' : undefined}
                      name="모델팜"
                      stroke="#10B981"
                      strokeWidth={1.5}
                      strokeDasharray="4 4"
                      dot={false}
                    />
                  )}
                </LineChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>
      ))}

      {/* Comparison insights */}
      {graph?.comparison?.insights && graph.comparison.insights.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">모델팜 비교 분석</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {graph.comparison.insights.map((insight, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className={cn(
                    'h-2 w-2 rounded-full',
                    insight.type === 'good' ? 'bg-green-500' :
                    insight.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                  )} />
                  {insight.message}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
