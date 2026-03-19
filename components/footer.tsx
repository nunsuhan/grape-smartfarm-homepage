'use client';

import { useLocale } from '@/lib/i18n';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer id="contact" className="py-12 px-5 md:px-12 text-center border-t border-default">
      <div className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight mb-1.5">
        <span className="w-[22px] h-[22px] rounded-md bg-gradient-to-br from-accent to-mod-grow flex items-center justify-center text-bg text-[11px] font-black">
          F
        </span>
        Farm<span className="text-accent">Sense</span>
      </div>

      <p className="font-mono text-[11px] text-txt-3 tracking-[2px] uppercase mb-5">
        {t('footer.tagline')}
      </p>

      <p className="text-txt-3 text-[13px] leading-relaxed">
        <a href="https://farmsense.kr" className="text-accent hover:underline transition-colors">
          farmsense.kr
        </a>
        {' · '}
        <a href="mailto:contact@farmsense.kr" className="text-accent hover:underline transition-colors">
          contact@farmsense.kr
        </a>
        <br /><br />
        <span className="text-txt-3/60">{t('footer.copyright')}</span>
      </p>
    </footer>
  );
}
