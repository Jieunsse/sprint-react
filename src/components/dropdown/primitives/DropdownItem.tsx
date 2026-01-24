import { itemStyle } from '../styles/dropdown.styles';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

interface DropdownItemProps {
  label: string;
  selected?: boolean;
  onSelect: () => void;
}

export function DropdownItem({ label, selected, onSelect }: DropdownItemProps) {
  return (
    <li role="option" onClick={onSelect} className={twMerge(clsx(itemStyle({ selected })))}>
      {label}
    </li>
  );
}
