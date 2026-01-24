import type { ReactNode } from 'react';
import { menuStyle } from '../styles/dropdown.styles';

interface DropdownMenuProps {
  open: boolean;
  children: ReactNode;
}

export function DropdownMenu({ open, children }: DropdownMenuProps) {
  if (!open) return null;

  return <ul className={menuStyle()}>{children}</ul>;
}
