import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import type { ButtonHTMLAttributes, MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '@src/shared/utils/cn';

const heartButtonStyles = cva(
  "inline-flex items-center gap-2 rounded-full font-['Pretendard'] transition-colors",
  {
    variants: {
      size: {
        sm: 'text-[12px] leading-[18px]',
        md: 'text-[16px] leading-[22px]',
      },
      liked: {
        true: 'text-rose-600',
        false: 'text-gray-500',
      },
      disabled: {
        true: 'cursor-not-allowed opacity-60',
        false: 'cursor-pointer hover:text-rose-500',
      },
    },
    defaultVariants: {
      size: 'md',
      liked: false,
      disabled: false,
    },
  },
);

const heartIconStyles = cva('flex items-center justify-center', {
  variants: {
    size: {
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface HeartButtonProps
  extends
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'onClick' | 'type'>,
    VariantProps<typeof heartButtonStyles> {
  count?: number;
  liked?: boolean;
  onToggle?: (nextLiked: boolean) => void;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  'aria-label'?: string;
}

export default function HeartButton({
  count,
  liked,
  size,
  disabled,
  onToggle,
  onClick,
  className,
  'aria-label': ariaLabel,
  ...props
}: HeartButtonProps) {
  const resolvedLiked = liked ?? false;
  const resolvedClassName = twMerge(
    clsx(heartButtonStyles({ size, liked: resolvedLiked, disabled }), className),
    cn('box-border'),
  );

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    onClick?.(event);
    if (event.defaultPrevented || disabled) return;
    onToggle?.(!resolvedLiked);
  };

  return (
    <button
      type="button"
      aria-label={ariaLabel ?? '좋아요'}
      aria-pressed={resolvedLiked}
      className={resolvedClassName}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    >
      <span className={clsx(heartIconStyles({ size }))} aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
          <path
            d="M12 20.75c-.3 0-.6-.11-.83-.3-2.6-2.1-5.14-4.22-7.02-6.67C2.7 12.06 2.25 10.6 2.25 9.1 2.25 6.4 4.4 4.25 7.1 4.25c1.42 0 2.79.63 3.68 1.7l1.22 1.46 1.22-1.46c.9-1.07 2.27-1.7 3.68-1.7 2.7 0 4.85 2.15 4.85 4.85 0 1.5-.45 2.96-1.83 4.68-1.88 2.45-4.42 4.57-7.02 6.67-.23.2-.53.3-.83.3Z"
            className={resolvedLiked ? 'fill-current' : 'stroke-current'}
            strokeWidth={resolvedLiked ? 0 : 1.5}
          />
        </svg>
      </span>
      {typeof count === 'number' && (
        <span
          className={clsx('font-medium text-gray-600', {
            'text-rose-600': resolvedLiked,
          })}
        >
          {count}
        </span>
      )}
    </button>
  );
}
