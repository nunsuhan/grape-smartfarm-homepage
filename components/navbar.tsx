'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { useLocale } from '@/lib/i18n';
import { isBuyerPage } from '@/lib/locale';
import { navItems, NavItem } from '@/lib/nav';

// English buyer navigation (해외 바이어용)
const buyerNav = [
  { href: '/export-intelligence', label: 'Export Program' },
  { href: '/verified-farms', label: 'Verified Farms' },
  { href: '#technology', label: 'Technology' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
];

// ── 드롭다운 (데스크톱) ─────────────────────────────────────────
function NavDropdown({ item, scrolled }: { item: NavItem; scrolled: boolean }) {
  const linkCls = scrolled
    ? 'text-txt-2 hover:text-txt hover:bg-bark/5'
    : 'text-white/80 hover:text-white hover:bg-white/10';
  return (
    <div className="group relative">
      <button className={`flex items-center gap-1 text-[13px] font-medium px-3.5 py-1.5 rounded-lg transition-all ${linkCls}`}>
        <span>{item.label}</span>
        <ChevronDown size={12} className="transition-transform group-hover:rotate-180" />
      </button>
      {/* 드롭다운 패널 — 항상 라이트 */}
      <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 z-50">
        <ul className="min-w-[220px] rounded-xl border border-default bg-white/95 backdrop-blur py-1.5 shadow-xl shadow-bark/10">
          {item.children?.map((child) => (
            <li key={child.label}>
              {child.disabled ? (
                <div className="cursor-default px-4 py-2.5">
                  <p className="text-[13px] text-txt-3">{child.label}</p>
                  {child.description && (
                    <p className="text-[10px] font-mono tracking-wider text-txt-3/50 mt-0.5">{child.description}</p>
                  )}
                </div>
              ) : (
                <Link href={child.href} className="block px-4 py-2.5 hover:bg-bark/5 transition-colors">
                  <p className="text-[13px] font-medium text-txt">{child.label}</p>
                  {child.description && (
                    <p className="text-[10px] font-mono tracking-wider text-accent/70 mt-0.5">{child.description}</p>
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedItem, setMobileExpandedItem] = useState<string | null>(null);
  const { locale, setLocale, t } = useLocale();
  const [isBuyerContext, setIsBuyerContext] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    if (typeof window !== 'undefined') {
      setIsBuyerContext(isBuyerPage(window.location.pathname));
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === 'ko' ? 'en' : 'ko');
  };

  const shouldShowBuyerNav = isBuyerContext || locale === 'en';

  const linkCls = scrolled
    ? 'text-txt-2 hover:text-txt hover:bg-bark/5'
    : 'text-white/80 hover:text-white hover:bg-white/10';

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-16 flex items-center justify-between px-5 md:px-12 transition-all duration-300 ${
        scrolled ? 'glass-nav border-b border-default' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <span className={`text-xl font-bold tracking-tight transition ${
          scrolled ? 'text-gray-900' : 'text-white'
        }`}>
          Farm<span className={scrolled ? 'text-green-700' : 'text-green-300'}>Sense</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1.5">
        {shouldShowBuyerNav ? (
          // 바이어 네비게이션 (영문, 드롭다운 없음)
          buyerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium px-3.5 py-1.5 rounded-lg transition-all ${linkCls}`}
            >
              {item.label}
            </Link>
          ))
        ) : (
          // 농가 네비게이션 (한국어, 드롭다운 지원)
          navItems.map((item) =>
            item.children ? (
              <NavDropdown key={item.label} item={item} scrolled={scrolled} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[13px] font-medium px-3.5 py-1.5 rounded-lg transition-all ${linkCls}`}
              >
                {item.label}
              </Link>
            )
          )
        )}

        {/* Language Toggle */}
        <button
          onClick={toggleLocale}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all text-[13px] font-medium ml-1 ${linkCls}`}
          title={locale === 'ko' ? 'Switch to English' : '한국어로 변경'}
        >
          <Globe size={14} />
          <span className="font-mono text-[11px] tracking-wider">
            {locale === 'ko' ? 'EN' : '한'}
          </span>
        </button>

        <Link
          href="/#contact"
          className="ml-2 px-5 py-2 bg-vine-500 text-white text-[13px] font-semibold rounded-lg hover:bg-vine-600 transition-colors"
        >
          {t('nav.contact')}
        </Link>
      </div>

      {/* Mobile Toggle */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={toggleLocale}
          className={`transition-colors p-1.5 ${scrolled ? 'text-txt-2 hover:text-txt' : 'text-white/80 hover:text-white'}`}
          title={locale === 'ko' ? 'Switch to English' : '한국어로 변경'}
        >
          <Globe size={18} />
        </button>
        <button
          className={`transition-colors ${scrolled ? 'text-txt-2 hover:text-txt' : 'text-white/80 hover:text-white'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 right-0 bg-bg-2 border-b border-default px-5 py-4 md:hidden"
        >
          {shouldShowBuyerNav ? (
            buyerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-2.5 text-txt-2 text-sm font-medium hover:text-accent transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))
          ) : (
            navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    className="flex items-center justify-between w-full py-2.5 text-txt-2 text-sm font-medium hover:text-accent transition-colors"
                    onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${mobileExpandedItem === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {mobileExpandedItem === item.label && (
                    <div className="pl-4 pb-1 border-l border-white/10 ml-1">
                      {item.children.map((child) =>
                        child.disabled ? (
                          <div key={child.label} className="py-2 text-txt-3 text-sm">
                            {child.label}
                          </div>
                        ) : (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block py-2 text-txt-2 text-sm hover:text-accent transition-colors"
                            onClick={() => { setMobileOpen(false); setMobileExpandedItem(null); }}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block py-2.5 text-txt-2 text-sm font-medium hover:text-accent transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )
          )}
          <Link
            href="/#contact"
            className="block mt-3 text-center px-5 py-2.5 bg-vine-500 text-white text-sm font-semibold rounded-lg hover:bg-vine-600 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.contact')}
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
