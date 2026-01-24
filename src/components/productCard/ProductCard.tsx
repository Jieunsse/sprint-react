import clsx from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Card, CardActions, CardContent, CardMedia } from '@src/components/card';
import HeartButton from '@src/components/button/heartButton';
import ProductImg from '@src/components/productImg';
import { cn } from '@src/shared/utils/cn';

const productCardStyles = cva('', {
  variants: {
    size: {
      sm: 'w-[160px]',
      md: 'w-[220px]',
      lg: 'w-[280px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const titleStyles = cva("font-['Pretendard'] font-medium text-gray-800", {
  variants: {
    size: {
      sm: 'text-[14px] leading-[24px]',
      md: 'text-[14px] leading-[24px]',
      lg: 'text-[14px] leading-[24px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const priceStyles = cva("font-['Pretendard'] font-bold text-gray-800", {
  variants: {
    size: {
      sm: 'text-[16px] leading-[26px]',
      md: 'text-[16px] leading-[26px]',
      lg: 'text-[16px] leading-[26px]',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const contentStyles = cva('', {
  variants: {
    size: {
      sm: 'gap-1',
      md: 'gap-2',
      lg: 'gap-2.5',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const actionStyles = cva('text-gray-500', {
  variants: {
    size: {
      sm: 'pt-0',
      md: 'pt-0.5',
      lg: 'pt-1',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface ProductCardProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>, VariantProps<typeof productCardStyles> {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  price?: string;
  likeCount?: number;
  isLiked?: boolean;
  onLikeToggle?: (nextLiked: boolean) => void;
  showLike?: boolean;
  clickable?: boolean;
}

export default function ProductCard({
  imageUrl,
  imageAlt,
  title,
  price,
  likeCount,
  isLiked,
  onLikeToggle,
  showLike,
  clickable,
  size,
  className,
  ...props
}: ProductCardProps) {
  const shouldShowLike = showLike ?? (typeof likeCount === 'number' || Boolean(onLikeToggle));
  const resolvedClassName = twMerge(clsx(productCardStyles({ size }), className), cn('box-border'));
  const resolvedContentClassName = twMerge(clsx(contentStyles({ size })), cn('box-border'));
  const resolvedActionClassName = twMerge(clsx(actionStyles({ size })), cn('box-border'));

  return (
    <Card surface="flat" size={size} clickable={clickable} className={resolvedClassName} {...props}>
      <CardMedia aspect="auto" className="h-[282px] w-[282px]">
        <ProductImg
          src={imageUrl}
          alt={imageAlt ?? title}
          ratio="auto"
          wrapperClassName="h-full w-full"
        />
      </CardMedia>
      <CardContent size={size} className={resolvedContentClassName}>
        <p className={clsx(titleStyles({ size }))}>{title}</p>
        {price && <p className={clsx(priceStyles({ size }))}>{price}</p>}
      </CardContent>
      {shouldShowLike && (
        <CardActions size={size} className={resolvedActionClassName}>
          <HeartButton size="sm" liked={isLiked} count={likeCount} onToggle={onLikeToggle} />
        </CardActions>
      )}
    </Card>
  );
}
