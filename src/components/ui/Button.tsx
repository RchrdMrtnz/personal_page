import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const variants: Record<ButtonVariant, string> = {
    primary: 'bg-nebula-accent text-white shadow-soft hover:brightness-95 focus-visible:ring-nebula-accent/40',
    secondary: 'bg-surface text-foreground border border-(--border) hover:bg-foreground/5 focus-visible:ring-nebula-surface/40',
    outline: 'border border-(--border) bg-transparent text-foreground hover:bg-foreground/5 focus-visible:ring-nebula-surface/40',
    ghost: 'bg-transparent text-nebula-accent hover:bg-nebula-accent/5 focus-visible:ring-nebula-accent/20',
};

const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
};

/**
 * Button classes, reusable on links: style an `<a>`/`<Link>` with this instead of
 * nesting a `<button>` inside it (invalid HTML and a double tab stop).
 */
export function buttonStyles({
    variant = 'primary',
    size = 'md',
    className,
}: { variant?: ButtonVariant; size?: ButtonSize; className?: string } = {}) {
    return cn(
        'inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 ease-out',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
    );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={buttonStyles({ variant, size, className })}
                {...props}
            />
        );
    }
);

Button.displayName = 'Button';
