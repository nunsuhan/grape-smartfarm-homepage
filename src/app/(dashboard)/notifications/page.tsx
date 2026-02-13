'use client';

import { useState } from 'react';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import {
  Bell,
  ShieldAlert,
  Droplets,
  Thermometer,
  Bug,
  CheckCheck,
  Info,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useNotifications, useUnreadCount, useMarkRead, useMarkAllRead } from '@/hooks/use-notifications';
import { cn } from '@/lib/utils';

const TYPE_CONFIG: Record<string, { icon: typeof Bell; color: string }> = {
  disease: { icon: Bug, color: 'text-red-500' },
  sensor: { icon: Thermometer, color: 'text-blue-500' },
  irrigation: { icon: Droplets, color: 'text-cyan-500' },
  alert: { icon: ShieldAlert, color: 'text-yellow-500' },
  info: { icon: Info, color: 'text-gray-500' },
};

export default function NotificationsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useNotifications(page);
  const { data: unread } = useUnreadCount();
  const markRead = useMarkRead();
  const markAllRead = useMarkAllRead();

  const notifications = data?.results || [];
  const totalPages = data ? Math.ceil(data.count / 20) : 1;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">알림</h1>
          <p className="text-muted-foreground">
            농장 알림 및 경고 내역
            {unread?.unread_count ? ` (읽지않음 ${unread.unread_count}개)` : ''}
          </p>
        </div>
        {unread?.unread_count ? (
          <Button
            variant="outline"
            size="sm"
            onClick={() => markAllRead.mutate()}
            disabled={markAllRead.isPending}
          >
            <CheckCheck className="mr-1.5 h-4 w-4" />
            모두 읽음
          </Button>
        ) : null}
      </div>

      {/* Notification list */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">알림 목록</CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 p-2">
          {isLoading
            ? Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex items-start gap-3 rounded-lg p-3">
                  <Skeleton className="h-8 w-8 shrink-0 rounded-full" />
                  <div className="flex-1 space-y-1">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              ))
            : notifications.length === 0
            ? (
              <div className="flex flex-col items-center justify-center py-12 text-muted-foreground">
                <Bell className="h-10 w-10 mb-3 opacity-30" />
                <p className="text-sm">알림이 없습니다</p>
              </div>
            )
            : notifications.map((n) => {
                const config = TYPE_CONFIG[n.notification_type] || TYPE_CONFIG.info;
                const Icon = config.icon;
                return (
                  <button
                    key={n.id}
                    className={cn(
                      'flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-muted/50',
                      !n.is_read && 'bg-primary/5'
                    )}
                    onClick={() => {
                      if (!n.is_read) markRead.mutate(n.id);
                    }}
                  >
                    <div className={cn(
                      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                      !n.is_read ? 'bg-primary/10' : 'bg-muted'
                    )}>
                      <Icon className={cn('h-4 w-4', config.color)} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={cn('text-sm', !n.is_read && 'font-medium')}>
                        {n.title}
                      </p>
                      <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
                        {n.body}
                      </p>
                    </div>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {format(new Date(n.created_at), 'M/d HH:mm', { locale: ko })}
                    </span>
                  </button>
                );
              })}
        </CardContent>
      </Card>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          <Button
            variant="outline"
            size="sm"
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
          >
            이전
          </Button>
          <span className="flex items-center text-sm text-muted-foreground">
            {page} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
          >
            다음
          </Button>
        </div>
      )}
    </div>
  );
}
