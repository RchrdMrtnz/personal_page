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
                    'rounded-2xl bg-surface border shadow-soft p-6',
                    'border-(--border)',
                    hoverEffect && 'transition-all duration-200 hover:-translate-y-0.5 hover:border-nebula-accent/40 hover:shadow-lift',
                    className
                )}
                {...props}
            />
        );
    }
);

Card.displayName = 'Card';
