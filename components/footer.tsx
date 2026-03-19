'use client';

import { useLocale } from '@/lib/i18n';

export function Footer() {
  const { t } = useLocale();

  return (
    <footer id="contact" className="bg-bark text-cream py-14 px-5 md:px-12 text-center border-t border-white/10">
      <div className="inline-flex items-center gap-2 font-outfit text-lg font-bold tracking-tight mb-2">
        <span className="w-[22px] h-[22px] rounded-md bg-vine-500 flex items-center justify-center text-white text-[11px] font-black">
          F
        </span>
        Farm<span className="text-vine-200">Sense</span>
      </div>

      <p className="font-mono text-[11px] text-cream/40 tracking-[2px] uppercase mb-5">
        {t('footer.tagline')}
      </p>

      <p className="text-cream/50 text-[13px] leading-relaxed">
        <a href="https://farmsense.kr" className="text-vine-200 hover:text-vine-100 underline underline-offset-2 transition-colors">
          farmsense.kr
        </a>
        {' · '}
        <a href="mailto:contact@farmsense.kr" className="text-vine-200 hover:text-vine-100 underline underline-offset-2 transition-colors">
          contact@farmsense.kr
        </a>
        <br /><br />
        <span className="text-cream/30">{t('footer.copyright')}</span>
      </p>
    </footer>
  );
}
