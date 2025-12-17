import React from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface LinkProps extends NextLinkProps {
    className?: string;
    children: React.ReactNode;
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, children, ...props }, ref) => {
        return (
            <NextLink
                ref={ref}
                className={cn(
                    'text-nebula-accent hover:underline hover:underline-offset-4 transition-colors',
                    className
                )}
                {...props}
            >
                {children}
            </NextLink>
        );
    }
);

Link.displayName = 'Link';
