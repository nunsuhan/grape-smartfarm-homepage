'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Thermometer,
  Droplets,
  Sprout,
  ThermometerSun,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Calendar,
  Wifi,
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuthStore } from '@/lib/auth-store';
import { api } from '@/lib/api-client';
import {
  DEMO_SENSOR,
  DEMO_CHART_DATA,
  DEMO_RISK,
  DEMO_GROWTH,
  DEMO_TASKS,
} from '@/lib/demo-data';

const sensorMeta = [
  {
    label: '기온',
    key: 'temperature' as const,
    icon: Thermometer,
    color: '#EF4444',
    bg: 'from-red-500/20 to-red-600/5',
  },
  {
    label: '습도',
    key: 'humidity' as const,
    icon: Droplets,
    color: '#3B82F6',
    bg: 'from-blue-500/20 to-blue-600/5',
  },
  {
    label: '토양수분',
    key: 'soil_moisture' as const,
    icon: Sprout,
    color: '#22C55E',
    bg: 'from-green-500/20 to-green-600/5',
  },
  {
    label: '토양온도',
    key: 'soil_temp' as const,
    icon: ThermometerSun,
    color: '#F59E0B',
    bg: 'from-amber-500/20 to-amber-600/5',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
  const { isLoggedIn } = useAuthStore();
  const [sensorData, setSensorData] = useState(DEMO_SENSOR);
  const [chartData, setChartData] = useState(DEMO_CHART_DATA);
  const [riskData, setRiskData] = useState(DEMO_RISK);
  const [growthData, setGrowthData] = useState(DEMO_GROWTH);
  const [isLive, setIsLive] = useState(false);
  const [chartReady, setChartReady] = useState(false);

  useEffect(() => { setChartReady(true); }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchData = async () => {
      try {
        // 센서 현재값
        const sensorRes = await api.get('/sensor/current/');
        if (sensorRes.data?.data) {
          setSensorData(sensorRes.data.data);
          setIsLive(true);
        }
      } catch { /* 실패 시 데모 데이터 유지 */ }

      try {
        // 센서 그래프 데이터
        const graphRes = await api.get('/sensor/graph/', { params: { period: 'day' } });
        if (graphRes.data?.labels && graphRes.data?.temperature?.my_farm?.avg) {
          const labels = graphRes.data.labels;
          const temp = graphRes.data.temperature.my_farm.avg;
          const humid = graphRes.data.humidity?.my_farm?.avg || [];
          const soil = graphRes.data.soil_moisture?.my_farm?.avg || [];
          setChartData(
            labels.map((time: string, i: number) => ({
              time,
              temperature: temp[i] ?? 0,
              humidity: humid[i] ?? 0,
              soil_moisture: soil[i] ?? 0,
            }))
          );
        }
      } catch { /* 실패 시 데모 데이터 유지 */ }
    };

    fetchData();
  }, [isLoggedIn]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white">대시보드</h1>
          <p className="text-neutral-cream/60 text-sm mt-1">
            {isLive ? '내 농장 실시간 현황' : '실시간 농장 현황을 한눈에 확인하세요'}
          </p>
        </div>
        {isLive && (
          <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-green/20 text-secondary-green text-[10px] font-medium">
            <Wifi className="w-3 h-3" />
            실시간
          </span>
        )}
      </div>

      {/* Sensor Summary Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {sensorMeta.map((card, i) => {
          const data = sensorData[card.key];
          const Icon = card.icon;

          return (
            <motion.div
              key={card.key}
              variants={fadeUp}
              initial="initial"
              animate="animate"
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${card.bg} opacity-50`} />
                <CardContent className="p-4 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-neutral-cream/50 font-medium">
                      {card.label}
                    </span>
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span
                      className="text-2xl font-bold"
                      style={{ color: card.color }}
                    >
                      {typeof data?.value === 'number' ? data.value.toFixed(1) : data?.value ?? '--'}
                    </span>
                    <span className="text-xs text-neutral-cream/40">
                      {data?.unit}
                    </span>
                  </div>
                  <div className="mt-2 flex items-center gap-1">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        backgroundColor:
                          data?.status === 'normal' ? '#22C55E' : '#EF4444',
                      }}
                    />
                    <span className="text-[10px] text-neutral-cream/40">
                      {data?.status === 'normal' ? '정상' : data?.status === 'high' ? '높음' : data?.status === 'low' ? '낮음' : '주의'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Charts & Risk Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Environment Chart */}
        <motion.div
          className="lg:col-span-2"
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">환경 추이</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                {chartReady && <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                    <XAxis
                      dataKey="time"
                      stroke="rgba(255,255,255,0.3)"
                      tick={{ fontSize: 11, fill: 'rgba(255,255,255,0.4)' }}
                    />
                    <YAxis
                      stroke="rgba(255,255,255,0.3)"
                      tick={{ fontSize: 11, fill: 'rgba(255,255,255,0.4)' }}
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
                    <Legend
                      wrapperStyle={{ fontSize: 11, color: 'rgba(255,255,255,0.6)' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      name="기온 (°C)"
                      stroke="#EF4444"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="humidity"
                      name="습도 (%)"
                      stroke="#3B82F6"
                      strokeWidth={2}
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="soil_moisture"
                      name="토양수분 (%)"
                      stroke="#22C55E"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Risk Gauge */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="text-lg">병해 위험도</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-4">
              {/* Circular Gauge */}
              <div className="relative w-32 h-32">
                <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10"
                  />
                  <circle
                    cx="60" cy="60" r="50"
                    fill="none" stroke={riskData.color} strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray={`${(riskData.risk_score / 100) * 314} 314`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold" style={{ color: riskData.color }}>
                    {riskData.risk_score}
                  </span>
                  <span className="text-[10px] text-neutral-cream/50">
                    {riskData.risk_level}
                  </span>
                </div>
              </div>

              <div className="w-full space-y-2">
                {riskData.alerts.map((alert, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs p-2 rounded-lg bg-white/5">
                    <AlertTriangle
                      className="w-3.5 h-3.5 shrink-0 mt-0.5"
                      style={{ color: alert.severity === 'caution' ? '#F59E0B' : '#3B82F6' }}
                    />
                    <span className="text-neutral-cream/70">{alert.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Growth Stage & Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ delay: 0.6 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-secondary-green" />
                생육 단계
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-secondary-green/20 border-2 border-secondary-green/40 flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-secondary-green" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">{growthData.label}</p>
                  <p className="text-sm text-neutral-cream/50">GDD 누적: {growthData.gdd}</p>
                  <div className="mt-2 w-40 bg-white/10 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-secondary-green rounded-full"
                      style={{ width: `${(growthData.gdd / 500) * 100}%` }}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeUp} initial="initial" animate="animate" transition={{ delay: 0.7 }}>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary-gold" />
                오늘의 할 일
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {DEMO_TASKS.map((task, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        task.done
                          ? 'bg-secondary-green/20 border-secondary-green'
                          : 'border-white/20'
                      }`}
                    >
                      {task.done && <CheckCircle className="w-3 h-3 text-secondary-green" />}
                    </div>
                    <span className={task.done ? 'text-neutral-cream/40 line-through' : 'text-neutral-cream/80'}>
                      {task.text}
                    </span>
                    <span
                      className={`ml-auto text-[10px] px-2 py-0.5 rounded-full ${
                        task.priority === 'high'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-amber-500/20 text-amber-400'
                      }`}
                    >
                      {task.priority === 'high' ? '긴급' : '보통'}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
