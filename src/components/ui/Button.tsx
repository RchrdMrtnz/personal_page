import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        const variants = {
            primary: 'bg-nebula-accent text-white shadow-soft hover:brightness-95 focus:ring-nebula-accent/40',
            secondary: 'bg-nebula-surface text-nebula-ink hover:bg-nebula-surface/80 focus:ring-nebula-surface/40',
            outline: 'border border-nebula-surface bg-transparent text-white hover:bg-nebula-surface/10 focus:ring-nebula-surface/40',
            ghost: 'bg-transparent text-nebula-accent hover:bg-nebula-accent/5 focus:ring-nebula-accent/20',
        };

        const sizes = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-6 py-3 text-lg',
        };

        return (
            <button
                ref={ref}
                className={cn(
                    'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 ease-out',
                    'focus:outline-none focus:ring-2 focus:ring-offset-2',
                    'disabled:opacity-50 disabled:pointer-events-none',
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
