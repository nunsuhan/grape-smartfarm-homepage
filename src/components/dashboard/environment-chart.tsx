'use client';

import { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSensorGraph } from '@/hooks/use-sensors';
import { tokens } from '@/lib/tokens';

type Period = 'day' | 'week' | 'month';

export function EnvironmentChart() {
  const [period, setPeriod] = useState<Period>('day');
  const { data, isLoading } = useSensorGraph(period);

  const chartData = data?.labels?.map((label, i) => ({
    time: label,
    temperature: data.temperature?.my_farm?.avg?.[i],
    humidity: data.humidity?.my_farm?.avg?.[i],
    soil_moisture: data.soil_moisture?.my_farm?.avg?.[i],
  })) || [];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-base">환경 추이</CardTitle>
        <Tabs value={period} onValueChange={(v) => setPeriod(v as Period)}>
          <TabsList className="h-8">
            <TabsTrigger value="day" className="text-xs px-3 h-7">일</TabsTrigger>
            <TabsTrigger value="week" className="text-xs px-3 h-7">주</TabsTrigger>
            <TabsTrigger value="month" className="text-xs px-3 h-7">월</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <Skeleton className="h-64 w-full" />
        ) : (
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="time" tick={{ fontSize: 11 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ fontSize: 12, borderRadius: 8 }}
                labelStyle={{ fontWeight: 600 }}
              />
              <Legend iconSize={8} wrapperStyle={{ fontSize: 12 }} />
              <Line
                type="monotone"
                dataKey="temperature"
                name="온도 (°C)"
                stroke={tokens.colors.sensor.temperature}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="humidity"
                name="습도 (%)"
                stroke={tokens.colors.sensor.humidity}
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="soil_moisture"
                name="토양수분 (%)"
                stroke={tokens.colors.sensor.soilMoisture}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}
