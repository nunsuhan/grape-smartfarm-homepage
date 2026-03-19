'use client';

import { ReactNode } from 'react';
import { LocaleProvider } from '@/lib/i18n';
import { ModalProvider } from './modal-provider';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <ModalProvider>{children}</ModalProvider>
    </LocaleProvider>
  );
}
