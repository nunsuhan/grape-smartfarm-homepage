import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { api } from '@/lib/api-client';
import type { Notification, PaginatedResponse } from '@/types/api';

export function useNotifications(page = 1, limit = 20) {
  const offset = (page - 1) * limit;
  return useQuery<PaginatedResponse<Notification>>({
    queryKey: ['notifications', page],
    queryFn: async () => {
      const { data } = await api.get('/notifications/', {
        params: { limit, offset },
      });
      return data;
    },
  });
}

export function useUnreadCount() {
  return useQuery<{ unread_count: number }>({
    queryKey: ['notifications-unread'],
    queryFn: async () => {
      const { data } = await api.get('/notifications/unread_count/');
      return data;
    },
    refetchInterval: 30_000,
  });
}

export function useMarkRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: number) => {
      await api.post(`/notifications/${id}/mark_read/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['notifications-unread'] });
    },
  });
}

export function useMarkAllRead() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      await api.post('/notifications/read_all/');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] });
      queryClient.invalidateQueries({ queryKey: ['notifications-unread'] });
    },
  });
}
