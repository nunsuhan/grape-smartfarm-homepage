import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { useFarmStore } from '@/stores/farm-store';
import type { SensorCurrentResponse, SensorGraphResponse } from '@/types/api';

export function useSensorCurrent() {
  const farmCode = useFarmStore((s) => s.farmCode)();

  return useQuery<SensorCurrentResponse>({
    queryKey: ['sensor-current', farmCode],
    queryFn: async () => {
      const { data } = await api.get(`/sensor/current/${farmCode}/`);
      return data;
    },
    enabled: !!farmCode,
    refetchInterval: 30_000, // 30 seconds
  });
}

export function useSensorGraph(period: 'day' | 'week' | 'month' = 'day') {
  const farmCode = useFarmStore((s) => s.farmCode)();

  return useQuery<SensorGraphResponse>({
    queryKey: ['sensor-graph', farmCode, period],
    queryFn: async () => {
      const { data } = await api.get(`/sensor/graph/${farmCode}/`, {
        params: { period, compare: 'true' },
      });
      return data;
    },
    enabled: !!farmCode,
  });
}
