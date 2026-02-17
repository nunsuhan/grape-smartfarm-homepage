import clsx from 'clsx';
import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export function Container({ children, className, fullWidth = false }: ContainerProps) {
    return (
        <div
            className={clsx(
                'mx-auto px-4 sm:px-6 lg:px-8',
                fullWidth ? 'w-full' : 'max-w-5xl',
                className
            )}
        >
            {children}
        </div>
    );
}
