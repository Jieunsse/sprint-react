import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { cn } from '@src/shared/utils/cn';

const cardStyles = cva('flex overflow-hidden rounded-[16px] bg-white text-gray-900', {
  variants: {
    layout: {
      vertical: 'flex-col',
      horizontal: 'flex-row',
    },
    size: {
      sm: 'text-[14px] leading-[20px]',
      md: 'text-[16px] leading-[24px]',
      lg: 'text-[18px] leading-[26px]',
    },
    surface: {
      flat: 'border border-gray-200',
      elevated: 'shadow-[0_4px_18px_rgba(15,23,42,0.08)]',
    },
    clickable: {
      true: 'cursor-pointer',
      false: 'cursor-default',
    },
  },
  defaultVariants: {
    layout: 'vertical',
    size: 'md',
    surface: 'flat',
    clickable: false,
  },
});

const cardMediaStyles = cva('relative w-full overflow-hidden', {
  variants: {
    aspect: {
      portrait: 'aspect-[4/5]',
      square: 'aspect-square',
      landscape: 'aspect-[4/3]',
      auto: '',
    },
  },
  defaultVariants: {
    aspect: 'portrait',
  },
});

const cardContentStyles = cva('flex flex-col', {
  variants: {
    size: {
      sm: 'gap-1 px-3 pb-3 pt-2',
      md: 'gap-1.5 px-4 pb-4 pt-3',
      lg: 'gap-2 px-5 pb-5 pt-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const cardActionsStyles = cva('flex items-center', {
  variants: {
    size: {
      sm: 'px-3 pb-3',
      md: 'px-4 pb-4',
      lg: 'px-5 pb-5',
    },
    align: {
      start: 'justify-start',
      between: 'justify-between',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'start',
  },
});

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardStyles> {}

export interface CardMediaProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardMediaStyles> {}

export interface CardContentProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardContentStyles> {}

export interface CardActionsProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardActionsStyles> {}

export function Card({
  layout,
  size,
  surface,
  clickable,
  className,
  onClick,
  role,
  tabIndex,
  ...props
}: CardProps) {
  const isInteractive = clickable ?? Boolean(onClick);
  const resolvedClassName = twMerge(
    clsx(cardStyles({ layout, size, surface, clickable: isInteractive }), className),
    cn('box-border'),
  );

  return (
    <div
      role={role ?? (isInteractive ? 'button' : undefined)}
      tabIndex={tabIndex ?? (isInteractive ? 0 : undefined)}
      onClick={onClick}
      className={resolvedClassName}
      {...props}
    />
  );
}

export function CardMedia({ aspect, className, ...props }: CardMediaProps) {
  const resolvedClassName = twMerge(clsx(cardMediaStyles({ aspect }), className), cn('box-border'));

  return <div className={resolvedClassName} {...props} />;
}

export function CardContent({ size, className, ...props }: CardContentProps) {
  const resolvedClassName = twMerge(clsx(cardContentStyles({ size }), className), cn('box-border'));

  return <div className={resolvedClassName} {...props} />;
}

export function CardActions({ size, align, className, ...props }: CardActionsProps) {
  const resolvedClassName = twMerge(
    clsx(cardActionsStyles({ size, align }), className),
    cn('box-border'),
  );

  return <div className={resolvedClassName} {...props} />;
}

export default Card;
