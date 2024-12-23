import React from 'react';
import { cn } from '../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md';
}

export function Button({ 
  children, 
  className, 
  variant = 'primary',
  size = 'md',
  ...props 
}: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-lg font-semibold transition-all duration-200',
        'hover:scale-105 active:scale-95',
        size === 'sm' ? 'px-4 py-2 text-sm' : 'px-6 py-3',
        variant === 'primary' 
          ? 'bg-green-500 text-black hover:bg-green-400' 
          : 'bg-black/30 backdrop-blur-sm border border-green-500/20 text-green-400 hover:bg-black/40',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}