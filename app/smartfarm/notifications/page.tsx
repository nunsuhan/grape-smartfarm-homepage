'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Bell,
  Bug,
  Activity,
  AlertTriangle,
  Info,
  Check,
  Filter,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { DEMO_NOTIFICATIONS } from '@/lib/demo-data';

type FilterType = 'all' | 'disease' | 'sensor' | 'alert' | 'info';

const filterConfig: {
  value: FilterType;
  label: string;
  icon: typeof Bell;
  color: string;
}[] = [
  { value: 'all', label: '전체', icon: Bell, color: '#F8F4E8' },
  { value: 'disease', label: '병해', icon: Bug, color: '#EF4444' },
  { value: 'sensor', label: '센서', icon: Activity, color: '#3B82F6' },
  { value: 'alert', label: '경고', icon: AlertTriangle, color: '#F59E0B' },
  { value: 'info', label: '정보', icon: Info, color: '#8B5CF6' },
];

const typeIcon: Record<string, { icon: typeof Bell; color: string }> = {
  disease: { icon: Bug, color: '#EF4444' },
  sensor: { icon: Activity, color: '#3B82F6' },
  alert: { icon: AlertTriangle, color: '#F59E0B' },
  info: { icon: Info, color: '#8B5CF6' },
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const minutes = Math.floor(diff / 60000);
  if (minutes < 60) return `${minutes}분 전`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}시간 전`;
  const days = Math.floor(hours / 24);
  return `${days}일 전`;
}

export default function NotificationsPage() {
  const [filter, setFilter] = useState<FilterType>('all');
  const [readIds, setReadIds] = useState<Set<number>>(
    new Set(DEMO_NOTIFICATIONS.filter((n) => n.is_read).map((n) => n.id))
  );

  const filtered =
    filter === 'all'
      ? DEMO_NOTIFICATIONS
      : DEMO_NOTIFICATIONS.filter((n) => n.notification_type === filter);

  const unreadCount = DEMO_NOTIFICATIONS.filter(
    (n) => !readIds.has(n.id)
  ).length;

  const markAsRead = (id: number) => {
    setReadIds((prev) => new Set([...prev, id]));
  };

  const markAllRead = () => {
    setReadIds(new Set(DEMO_NOTIFICATIONS.map((n) => n.id)));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
            <Bell className="w-6 h-6 text-secondary-gold" />
            알림 센터
            {unreadCount > 0 && (
              <span className="ml-2 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-medium">
                {unreadCount}건 미읽음
              </span>
            )}
          </h1>
          <p className="text-neutral-cream/60 text-sm mt-1">
            센서 경보, 병해 알림, 농작업 안내를 확인하세요
          </p>
        </div>

        {unreadCount > 0 && (
          <button
            onClick={markAllRead}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-neutral-cream/60 hover:text-neutral-cream transition-colors"
          >
            <Check className="w-4 h-4" />
            모두 읽음 처리
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {filterConfig.map((f) => {
          const Icon = f.icon;
          return (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                filter === f.value
                  ? 'bg-primary-purple/20 text-white border border-primary-purple/30'
                  : 'bg-white/5 text-neutral-cream/50 hover:text-neutral-cream'
              }`}
            >
              <Icon className="w-3.5 h-3.5" style={{ color: f.color }} />
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filtered.map((notification, i) => {
          const type = typeIcon[notification.notification_type] || typeIcon.info;
          const Icon = type.icon;
          const isRead = readIds.has(notification.id);

          return (
            <motion.div
              key={notification.id}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                className={`cursor-pointer transition-colors ${
                  !isRead
                    ? 'border-l-2 hover:bg-white/5'
                    : 'opacity-60 hover:opacity-80'
                }`}
                style={!isRead ? { borderLeftColor: type.color } : {}}
                onClick={() => markAsRead(notification.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${type.color}20` }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: type.color }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p
                          className={`text-sm font-medium truncate ${
                            isRead ? 'text-neutral-cream/50' : 'text-white'
                          }`}
                        >
                          {notification.title}
                        </p>
                        {!isRead && (
                          <div className="w-2 h-2 rounded-full bg-primary-purple shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-neutral-cream/40 mt-1 line-clamp-2">
                        {notification.body}
                      </p>
                      <p className="text-[10px] text-neutral-cream/30 mt-2">
                        {timeAgo(notification.created_at)}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}

        {filtered.length === 0 && (
          <div className="text-center py-12 text-neutral-cream/30">
            <Bell className="w-12 h-12 mx-auto mb-3 opacity-30" />
            <p className="text-sm">해당 유형의 알림이 없습니다</p>
          </div>
        )}
      </div>
    </div>
  );
}
