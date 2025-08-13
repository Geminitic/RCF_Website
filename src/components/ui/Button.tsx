import React from 'react';
import { cn } from '../../utils/cn';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'ghost'
  | 'gradient';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

const baseStyles =
  'relative inline-flex items-center justify-center gap-3 [direction:inherit] rounded-xl font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed active:scale-[0.97]';

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 text-white shadow-md hover:shadow-lg hover:brightness-110',
  secondary:
    'bg-white/80 backdrop-blur-sm text-purple-700 border border-purple-200 hover:bg-white shadow-sm hover:shadow',
  outline:
    'border border-white/40 text-white hover:bg-white/10 shadow-sm hover:shadow',
  ghost: 'text-white/90 hover:text-white hover:bg-white/10',
  gradient:
    'bg-[radial-gradient(circle_at_30%_20%,#6B46C1,#0EA5E9,#fb923c)] text-white shadow-lg hover:shadow-xl',
};

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  variant = 'primary',
  fullWidth,
  loading,
  leftIcon,
  rightIcon,
  ...rest
}) => {
  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        fullWidth && 'w-full',
  'px-7 py-3.5 text-base md:text-lg',
        'group',
        className
      )}
      {...rest}
    >
      {loading && (
        <span className="absolute left-3 inline-flex h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
      )}
      {leftIcon && !loading && (
  <span className="shrink-0 flex items-center ltr:-ml-1 rtl:-mr-1">
          {leftIcon}
        </span>
      )}
      <span className="relative z-10 flex items-center leading-snug tracking-wide">
        {children}
      </span>
      {rightIcon && (
  <span className="shrink-0 flex items-center ltr:-mr-1 rtl:-ml-1">
          {rightIcon}
        </span>
      )}
    </button>
  );
};

export default Button;
