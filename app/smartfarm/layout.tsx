'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { Container } from '@/components/ui/container';
import {
  LayoutDashboard,
  Activity,
  MessageSquare,
  Search,
  Bell,
  Users,
  BookOpen,
  Download,
} from 'lucide-react';
import { useAuthStore } from '@/lib/auth-store';

const sidebarItems = [
  { label: '대시보드', href: '/smartfarm/dashboard', icon: LayoutDashboard },
  { label: '센서 모니터링', href: '/smartfarm/sensors', icon: Activity },
  { label: 'AI 상담', href: '/smartfarm/ai-chat', icon: MessageSquare },
  { label: '질병 진단', href: '/smartfarm/diagnosis', icon: Search },
  { label: '영농일지', href: '/smartfarm/field-book', icon: BookOpen },
  { label: '알림 센터', href: '/smartfarm/notifications', icon: Bell },
  { label: '커뮤니티', href: '/smartfarm/community', icon: Users },
  { label: '앱 다운로드', href: '/smartfarm/download', icon: Download },
];

export default function SmartfarmLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isLoggedIn } = useAuthStore();

  return (
    <div className="min-h-screen pt-20 bg-neutral-black">
      <Container fullWidth className="max-w-7xl flex flex-col lg:flex-row gap-0 px-0 sm:px-0 lg:px-0">
        {/* Sidebar - Desktop */}
        <aside className="hidden lg:flex flex-col w-60 shrink-0 border-r border-white/10 min-h-[calc(100vh-5rem)] sticky top-20 bg-neutral-black/80 backdrop-blur-md">
          <nav className="flex flex-col gap-1 p-4 pt-6">
            {sidebarItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/smartfarm/dashboard' &&
                  pathname?.startsWith(item.href));
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-primary-purple/20 text-secondary-gold border border-primary-purple/30'
                      : 'text-neutral-cream/60 hover:text-neutral-cream hover:bg-white/5'
                  )}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Status Badge */}
          <div className="mt-auto p-4">
            {isLoggedIn ? (
              <div className="px-4 py-3 rounded-lg bg-secondary-green/10 border border-secondary-green/20 text-xs text-secondary-green/80">
                <p className="font-semibold text-secondary-green mb-1">실시간 연동</p>
                <p>내 농장 데이터로 운영 중</p>
              </div>
            ) : (
              <div className="px-4 py-3 rounded-lg bg-secondary-gold/10 border border-secondary-gold/20 text-xs text-secondary-gold/80">
                <p className="font-semibold text-secondary-gold mb-1">데모 모드</p>
                <p>로그인하면 내 농장 데이터를 확인할 수 있어요</p>
              </div>
            )}
          </div>
        </aside>

        {/* Mobile Navigation */}
        <div className="lg:hidden overflow-x-auto border-b border-white/10 bg-neutral-black/90 backdrop-blur-md sticky top-20 z-30">
          <nav className="flex gap-1 p-2 min-w-max">
            {sidebarItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/smartfarm/dashboard' &&
                  pathname?.startsWith(item.href));
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-colors',
                    isActive
                      ? 'bg-primary-purple/20 text-secondary-gold'
                      : 'text-neutral-cream/60 hover:text-neutral-cream'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-6 lg:p-8"
          >
            {children}
          </motion.div>
        </main>
      </Container>
    </div>
  );
}
