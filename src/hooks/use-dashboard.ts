import { useQuery } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import { useFarmStore } from '@/stores/farm-store';
import type { TodayDashboardResponse, QuickRiskResponse } from '@/types/api';

export function useTodayDashboard() {
  const farmCode = useFarmStore((s) => s.farmCode)();

  return useQuery<TodayDashboardResponse>({
    queryKey: ['today-dashboard', farmCode],
    queryFn: async () => {
      const { data } = await api.get(`/v2/today/${farmCode}/`);
      return data;
    },
    enabled: !!farmCode,
    refetchInterval: 60_000, // 1 minute
  });
}

export function useQuickRisk() {
  const selectedFarmId = useFarmStore((s) => s.selectedFarmId);

  return useQuery<QuickRiskResponse>({
    queryKey: ['quick-risk', selectedFarmId],
    queryFn: async () => {
      const { data } = await api.get(`/v1/farms/${selectedFarmId}/disease/quick/`);
      return data;
    },
    enabled: !!selectedFarmId,
    refetchInterval: 5 * 60_000, // 5 minutes
  });
}
