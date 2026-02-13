'use client';

import { Thermometer, Droplets, CloudRain, ShieldAlert, Sprout, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useFarmStore } from '@/stores/farm-store';
import { useTodayDashboard, useQuickRisk } from '@/hooks/use-dashboard';
import { useSensorCurrent } from '@/hooks/use-sensors';
import { SensorSummaryCard } from '@/components/dashboard/sensor-summary-card';
import { EnvironmentChart } from '@/components/dashboard/environment-chart';
import { RiskGauge } from '@/components/dashboard/risk-gauge';

export default function DashboardPage() {
  const selectedFarm = useFarmStore((s) => s.selectedFarm);
  const selectedHouse = useFarmStore((s) => s.selectedHouse);
  const farm = selectedFarm();
  const house = selectedHouse();

  const { data: today, isLoading: todayLoading } = useTodayDashboard();
  const { data: sensor, isLoading: sensorLoading } = useSensorCurrent();
  const { data: risk } = useQuickRisk();

  const isLoading = todayLoading || sensorLoading;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">대시보드</h1>
          <p className="text-muted-foreground">
            {farm?.name} &middot; {house?.name}
          </p>
        </div>
        {today?.growth && (
          <Badge variant="secondary" className="gap-1 text-sm">
            <Sprout className="h-3.5 w-3.5" />
            {today.growth.label} (GDD: {today.growth.gdd?.toFixed(0)})
          </Badge>
        )}
      </div>

      {/* Environment status banner */}
      {today?.environment && (
        <Card className={
          today.environment.status === 'good' ? 'border-green-200 bg-green-50' :
          today.environment.status === 'caution' ? 'border-yellow-200 bg-yellow-50' :
          'border-red-200 bg-red-50'
        }>
          <CardContent className="flex items-center gap-3 py-3">
            <ShieldAlert className={`h-5 w-5 ${
              today.environment.status === 'good' ? 'text-green-600' :
              today.environment.status === 'caution' ? 'text-yellow-600' :
              'text-red-600'
            }`} />
            <span className="text-sm font-medium">{today.environment.message}</span>
          </CardContent>
        </Card>
      )}

      {/* Sensor summary cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <SensorSummaryCard
          label="온도"
          icon={Thermometer}
          value={sensor?.data?.temperature?.value}
          unit="°C"
          status={sensor?.data?.temperature?.status}
          color="text-red-500"
          loading={isLoading}
        />
        <SensorSummaryCard
          label="습도"
          icon={Droplets}
          value={sensor?.data?.humidity?.value}
          unit="%"
          status={sensor?.data?.humidity?.status}
          color="text-blue-500"
          loading={isLoading}
        />
        <SensorSummaryCard
          label="토양수분"
          icon={CloudRain}
          value={sensor?.data?.soil_moisture?.value}
          unit="%"
          status={sensor?.data?.soil_moisture?.status}
          color="text-violet-500"
          loading={isLoading}
        />
        <SensorSummaryCard
          label="토양온도"
          icon={Thermometer}
          value={sensor?.data?.soil_temp?.value}
          unit="°C"
          status={sensor?.data?.soil_temp?.status}
          color="text-orange-500"
          loading={isLoading}
        />
      </div>

      {/* Charts row */}
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <EnvironmentChart />
        </div>
        <RiskGauge
          riskLevel={risk?.risk_level || today?.health?.disease_risk}
          riskScore={risk?.risk_score ?? today?.health?.risk_score}
          color={risk?.color}
          alerts={today?.health?.alerts}
        />
      </div>

      {/* Today tasks */}
      {today?.tasks && today.tasks.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Target className="h-4 w-4" />
              오늘의 작업
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {today.tasks.map((task, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className={`h-2 w-2 rounded-full ${
                    task.priority === 'high' ? 'bg-red-500' :
                    task.priority === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`} />
                  <span className={task.done ? 'line-through text-muted-foreground' : ''}>
                    {task.text}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
