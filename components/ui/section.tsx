'use client';

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  alt?: boolean;
}

export function Section({ children, id, className = '', alt = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 md:py-32 px-5 md:px-12 ${alt ? 'bg-bg-2' : ''} ${className}`}
    >
      {children}
    </section>
  );
}
