import { create } from 'zustand';

interface PaginationState {
  page: number;

  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  resetPage: () => void;
}

const FIRST_PAGE = 1;

export const usePaginationStore = create<PaginationState>((set) => ({
  page: FIRST_PAGE,

  setPage: (page) => set({ page }),

  nextPage: () =>
    set((state) => ({
      page: state.page + 1,
    })),

  prevPage: () =>
    set((state) => ({
      page: Math.max(FIRST_PAGE, state.page - 1),
    })),

  resetPage: () => set({ page: FIRST_PAGE }),
}));
