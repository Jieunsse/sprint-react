import type { ReactNode } from 'react';
import { menuStyle } from '../styles/dropdown.styles';
import { cn } from '@src/shared/utils/cn';

interface DropdownMenuProps {
  open: boolean;
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledBy?: string;
}

export function DropdownMenu({ open, children, className, id, ariaLabelledBy }: DropdownMenuProps) {
  if (!open) return null;

  const resolvedClassName = cn(menuStyle(), className, 'box-border');

  return (
    <ul id={id} role="listbox" aria-labelledby={ariaLabelledBy} className={resolvedClassName}>
      {children}
    </ul>
  );
}
