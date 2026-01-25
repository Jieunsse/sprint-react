import type { ReactNode } from 'react';
import { menuStyle } from '../styles/dropdown.styles';
import { cn } from '@src/shared/utils/cn';

interface DropdownMenuProps {
  open: boolean;
  children: ReactNode;
  className?: string;
}

export function DropdownMenu({ open, children, className }: DropdownMenuProps) {
  if (!open) return null;

  const resolvedClassName = cn(menuStyle(), className, 'box-border');

  return <ul className={resolvedClassName}>{children}</ul>;
}
