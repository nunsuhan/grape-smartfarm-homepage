import clsx from 'clsx';
import { ReactNode } from 'react';

interface SectionProps {
    children: ReactNode;
    id?: string;
    className?: string;
    dark?: boolean;
}

export function Section({ children, id, className, dark = false }: SectionProps) {
    return (
        <section
            id={id}
            className={clsx(
                'relative py-20 lg:py-32',
                dark ? 'bg-neutral-black' : 'bg-transparent',
                className
            )}
        >
            {children}
        </section>
    );
}
