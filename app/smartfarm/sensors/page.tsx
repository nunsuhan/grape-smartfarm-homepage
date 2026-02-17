'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Thermometer,
  Droplets,
  Sprout,
  ThermometerSun,
  Wifi,
} from 'lucide-react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/lib/auth-store';
import { api } from '@/lib/api-client';
import { DEMO_SENSOR, DEMO_CHART_DATA } from '@/lib/demo-data';

type Period = '6h' | '12h' | '24h' | '7d';

const periods: { label: string; value: Period; apiValue: string }[] = [
  { label: '6시간', value: '6h', apiValue: 'day' },
  { label: '12시간', value: '12h', apiValue: 'day' },
  { label: '24시간', value: '24h', apiValue: 'day' },
  { label: '7일', value: '7d', apiValue: 'week' },
];

const metrics = [
  {
    key: 'temperature',
    label: '기온',
    icon: Thermometer,
    color: '#EF4444',
    sensorKey: 'temperature' as const,
  },
  {
    key: 'humidity',
    label: '습도',
    icon: Droplets,
    color: '#3B82F6',
    sensorKey: 'humidity' as const,
  },
  {
    key: 'soil_moisture',
    label: '토양수분',
    icon: Sprout,
    color: '#22C55E',
    sensorKey: 'soil_moisture' as const,
  },
];

export default function SensorsPage() {
  const { isLoggedIn } = useAuthStore();
  const [period, setPeriod] = useState<Period>('24h');
  const [sensorData, setSensorData] = useState(DEMO_SENSOR);
  const [chartData, setChartData] = useState(DEMO_CHART_DATA);
  const [isLive, setIsLive] = useState(false);
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => { setChartReady(true); }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      // 데모 모드: 기간별 데이터 슬라이싱
      const sliced =
        period === '6h'
          ? DEMO_CHART_DATA.slice(-3)
          : period === '12h'
          ? DEMO_CHART_DATA.slice(-6)
          : DEMO_CHART_DATA;
      setChartData(sliced);
      return;
    }

    const fetchData = async () => {
      try {
        const sensorRes = await api.get('/sensor/current/');
        if (sensorRes.data?.data) {
          setSensorData(sensorRes.data.data);
          setIsLive(true);
        }
      } catch {}

      try {
        const apiPeriod = periods.find((p) => p.value === period)?.apiValue || 'day';
        const graphRes = await api.get('/sensor/graph/', { params: { period: apiPeriod } });
        if (graphRes.data?.labels) {
          const labels = graphRes.data.labels;
          const temp = graphRes.data.temperature?.my_farm?.avg || [];
          const humid = graphRes.data.humidity?.my_farm?.avg || [];
          const soil = graphRes.data.soil_moisture?.my_farm?.avg || [];
          let mapped = labels.map((time: string, i: number) => ({
            time,
            temperature: temp[i] ?? 0,
            humidity: humid[i] ?? 0,
            soil_moisture: soil[i] ?? 0,
          }));
          // 6h, 12h 슬라이싱
          if (period === '6h') mapped = mapped.slice(-6);
          else if (period === '12h') mapped = mapped.slice(-12);
          setChartData(mapped);
        }
      } catch {}
    };

    fetchData();
  }, [isLoggedIn, period]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
            센서 모니터링
            {isLive && (
              <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-green/20 text-secondary-green text-[10px] font-medium">
                <Wifi className="w-3 h-3" />
                실시간
              </span>
            )}
          </h1>
          <p className="text-neutral-cream/60 text-sm mt-1">
            {isLive ? '내 농장 센서 데이터 실시간 모니터링' : '환경 데이터를 모니터링하고 추이를 분석하세요'}
          </p>
        </div>

        <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
          {periods.map((p) => (
            <button
              key={p.value}
              onClick={() => setPeriod(p.value)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                period === p.value
                  ? 'bg-primary-purple text-white'
                  : 'text-neutral-cream/50 hover:text-neutral-cream'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Current Values */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: '기온', data: sensorData.temperature, icon: Thermometer, color: '#EF4444' },
          { label: '습도', data: sensorData.humidity, icon: Droplets, color: '#3B82F6' },
          { label: '토양수분', data: sensorData.soil_moisture, icon: Sprout, color: '#22C55E' },
          { label: '토양온도', data: sensorData.soil_temp, icon: ThermometerSun, color: '#F59E0B' },
        ].map((item, i) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-neutral-cream/50">{item.label}</p>
                      <p className="text-xl font-bold text-white">
                        {typeof item.data?.value === 'number' ? item.data.value.toFixed(1) : item.data?.value ?? '--'}
                        <span className="text-xs text-neutral-cream/40 ml-1">
                          {item.data?.unit}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="space-y-6">
        {metrics.map((metric, i) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={metric.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
            >
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <Icon className="w-4 h-4" style={{ color: metric.color }} />
                    {metric.label} 추이
                    <span className="ml-auto text-xs font-normal text-neutral-cream/40">
                      현재 {typeof sensorData[metric.sensorKey]?.value === 'number'
                        ? sensorData[metric.sensorKey].value.toFixed(1)
                        : sensorData[metric.sensorKey]?.value ?? '--'}
                      {sensorData[metric.sensorKey]?.unit}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-48">
                    {chartReady && <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id={`gradient-${metric.key}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={metric.color} stopOpacity={0.3} />
                            <stop offset="95%" stopColor={metric.color} stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                        <XAxis
                          dataKey="time"
                          stroke="rgba(255,255,255,0.2)"
                          tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.4)' }}
                        />
                        <YAxis
                          stroke="rgba(255,255,255,0.2)"
                          tick={{ fontSize: 10, fill: 'rgba(255,255,255,0.4)' }}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#1A1A2E',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: 8,
                            color: '#F8F4E8',
                            fontSize: 12,
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey={metric.key}
                          stroke={metric.color}
                          strokeWidth={2}
                          fill={`url(#gradient-${metric.key})`}
                        />
                      </AreaChart>
                    </ResponsiveContainer>}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
