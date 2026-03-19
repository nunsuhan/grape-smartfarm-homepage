'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';
import { useLocale } from '@/lib/i18n';
import { isBuyerPage } from '@/lib/locale';

// Korean farmer navigation (한국 농가용)
const farmerNav = [
  { href: '#solutions', key: 'nav.solutions' },      // 솔루션
  { href: '#crops', key: 'nav.crops' },             // 작물
  { href: '#export', key: 'nav.export' },           // 수출·인증
  { href: '#technology', key: 'nav.technology' },   // 기술
  { href: '#partners', key: 'nav.partners' },       // 파트너
  { href: '#about', key: 'nav.about' },             // 소개
];

// English buyer navigation (해외 바이어용)
const buyerNav = [
  { href: '/export-intelligence', label: 'Export Program' },
  { href: '/verified-farms', label: 'Verified Farms' },
  { href: '#technology', label: 'Technology' },
  { href: '/partners', label: 'Partners' },
  { href: '/about', label: 'About' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, setLocale, t } = useLocale();
  const [isBuyerContext, setIsBuyerContext] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    
    // Check if current page is a buyer page
    if (typeof window !== 'undefined') {
      setIsBuyerContext(isBuyerPage(window.location.pathname));
    }
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleLocale = () => {
    setLocale(locale === 'ko' ? 'en' : 'ko');
  };

  // Determine which navigation to show
  const shouldShowBuyerNav = isBuyerContext || locale === 'en';
  const currentNav = shouldShowBuyerNav ? buyerNav : farmerNav;

  return (
    <nav
      className={`fixed top-0 w-full z-50 h-16 flex items-center justify-between px-5 md:px-12 transition-all duration-300 ${
        scrolled ? 'glass-nav border-b border-default' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="#platform" className="flex items-center gap-2 text-xl font-extrabold tracking-tight">
        <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-mod-grow flex items-center justify-center text-bg text-sm font-black">
          F
        </span>
        Farm<span className="text-accent">Sense</span>
      </a>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-1.5">
        {currentNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-txt-2 text-[13px] font-medium px-3.5 py-1.5 rounded-lg hover:text-txt hover:bg-white/5 transition-all"
          >
            {'key' in item ? t(item.key) : item.label}
          </a>
        ))}

        {/* Language Toggle */}
        <button
          onClick={toggleLocale}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-txt-2 hover:text-txt hover:bg-white/5 transition-all text-[13px] font-medium ml-1"
          title={locale === 'ko' ? 'Switch to English' : '한국어로 변경'}
        >
          <Globe size={14} />
          <span className="font-mono text-[11px] tracking-wider">
            {locale === 'ko' ? 'EN' : '한'}
          </span>
        </button>

        <a
          href="#contact"
          className="ml-2 px-5 py-2 bg-accent text-bg text-[13px] font-bold rounded-lg hover:opacity-90 transition-opacity"
        >
          {t('nav.contact')}
        </a>
      </div>

      {/* Mobile Toggle */}
      <div className="flex items-center gap-2 md:hidden">
        <button
          onClick={toggleLocale}
          className="text-txt-2 hover:text-txt transition-colors p-1.5"
          title={locale === 'ko' ? 'Switch to English' : '한국어로 변경'}
        >
          <Globe size={18} />
        </button>
        <button
          className="text-txt-2 hover:text-txt transition-colors"
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
          {currentNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block py-2.5 text-txt-2 text-sm font-medium hover:text-accent transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {'key' in item ? t(item.key) : item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-3 text-center px-5 py-2.5 bg-accent text-bg text-sm font-bold rounded-lg"
            onClick={() => setMobileOpen(false)}
          >
            {t('nav.contact')}
          </a>
        </motion.div>
      )}
    </nav>
  );
}
