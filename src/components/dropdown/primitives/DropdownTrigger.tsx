import { triggerStyle } from '../styles/dropdown.styles';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import arrowDown from '../assets/ic_arrow_down.svg';

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
      <span className="whitespace-nowrap text-left">{label}</span>
      <img src={arrowDown} alt="" aria-hidden className="h-4 w-4 self-center" />
    </button>
  );
}
