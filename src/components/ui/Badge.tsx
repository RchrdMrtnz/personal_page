import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'outline' | 'secondary';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
    ({ className, variant = 'default', ...props }, ref) => {
        const variants = {
            default: 'border-nebula-accent/20 bg-nebula-accent/5 text-nebula-primary dark:text-nebula-accent',
            outline: 'border-nebula-surface text-nebula-ink',
            secondary: 'border-transparent bg-nebula-surface text-nebula-ink',
        };

        return (
            <span
                ref={ref}
                className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium',
                    variants[variant],
                    className
                )}
                {...props}
            />
        );
    }
);

Badge.displayName = 'Badge';
