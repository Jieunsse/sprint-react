import type { ReactNode } from 'react';
import { menuStyle } from '../styles/dropdown.styles';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cn } from '@src/shared/utils/cn';

interface DropdownMenuProps {
  open: boolean;
  children: ReactNode;
  className?: string;
}

export function DropdownMenu({ open, children, className }: DropdownMenuProps) {
  if (!open) return null;

  const resolvedClassName = twMerge(clsx(menuStyle(), className), cn('box-border'));

  return <ul className={resolvedClassName}>{children}</ul>;
}
