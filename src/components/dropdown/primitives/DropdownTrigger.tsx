import { triggerStyle } from '../styles/dropdown.styles';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

interface DropdownTriggerProps {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}

export function DropdownTrigger({ label, disabled, onClick }: DropdownTriggerProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={twMerge(clsx(triggerStyle({ disabled })))}
    >
      <span>{label}</span>
      <span aria-hidden>▾</span>
    </button>
  );
}
