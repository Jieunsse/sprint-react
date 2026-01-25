import { itemStyle } from '../styles/dropdown.styles';
import { cn } from '@src/shared/utils/cn';

interface DropdownItemProps {
  label: string;
  selected?: boolean;
  onSelect: () => void;
}

export function DropdownItem({ label, selected, onSelect }: DropdownItemProps) {
  return (
    <li role="option" onClick={onSelect} className={cn(itemStyle({ selected }))}>
      {label}
    </li>
  );
}
