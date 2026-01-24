import { cva } from 'class-variance-authority';

export const triggerStyle = cva(
  'flex items-center justify-between rounded-md border px-3 py-2 text-sm transition',
  {
    variants: {
      disabled: {
        true: 'cursor-not-allowed bg-gray-100 text-gray-400',
        false: 'cursor-pointer bg-white hover:bg-gray-50',
      },
    },
    defaultVariants: {
      disabled: false,
    },
  },
);

export const menuStyle = cva('absolute z-10 mt-1 w-full rounded-md border bg-white shadow-md');

export const itemStyle = cva('px-3 py-2 text-sm cursor-pointer hover:bg-gray-100', {
  variants: {
    selected: {
      true: 'bg-gray-100 font-medium',
      false: '',
    },
  },
  defaultVariants: {
    selected: false,
  },
});
