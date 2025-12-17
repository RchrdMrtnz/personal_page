import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    hoverEffect?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, hoverEffect = false, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-2xl bg-white dark:bg-nebula-ink border border-nebula-surface shadow-soft p-6',
                    hoverEffect && 'transition-all duration-200 hover:-translate-y-[2px] hover:border-nebula-accent/25 hover:shadow-lift',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';
