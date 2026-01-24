import { create } from 'zustand';

interface PaginationState {
  page: number;

  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  resetPage: () => void;
}

export const usePaginationStore = create<PaginationState>((set) => ({
  page: 1,

  setPage: (page) => set({ page }),

  nextPage: () =>
    set((state) => ({
      page: state.page + 1,
    })),

  prevPage: () =>
    set((state) => ({
      page: Math.max(1, state.page - 1),
    })),

  resetPage: () => set({ page: 1 }),
}));
