import {
  useCallback,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ChangeEvent,
  type KeyboardEvent,
} from 'react';
import { useItems } from '../query/useItems';
import { useItemsPageDerived } from './useItemsPageDerived';
import { useItemsPageState } from './useItemsPageState';

function getResponsiveSizes(width: number) {
  return {
    pageSize: width >= 1024 ? 10 : width >= 768 ? 6 : 4,
    bestPageSize: width >= 1024 ? 4 : width >= 768 ? 2 : 1,
  };
}

function subscribeToResize(callback: () => void) {
  window.addEventListener('resize', callback);
  return () => window.removeEventListener('resize', callback);
}

function getWindowWidth() {
  return window.innerWidth;
}

function getServerWidth() {
  return 1024;
}

export function useItemsPageController() {
  const {
    selected,
    keyword,
    searchInput,
    currentPage,
    likedIds,
    setSearchInput,
    setCurrentPage,
    handleLikeToggle,
    applySearch,
    handleSelectOrder,
  } = useItemsPageState();

  const width = useSyncExternalStore(subscribeToResize, getWindowWidth, getServerWidth);
  const { pageSize, bestPageSize } = useMemo(() => getResponsiveSizes(width), [width]);
  const pageGroupSize = 5;
  const trimmedKeyword = useMemo(() => keyword.trim(), [keyword]);

  useEffect(() => {
    setCurrentPage(1);
  }, [pageSize, setCurrentPage]);

  const bestItemsParams = useMemo(
    () => ({
      page: 1,
      pageSize: bestPageSize,
      orderBy: 'favorite' as const,
    }),
    [bestPageSize],
  );
  const itemsParams = useMemo(
    () => ({
      page: currentPage,
      pageSize,
      orderBy: selected,
      keyword: trimmedKeyword ? trimmedKeyword : undefined,
    }),
    [currentPage, pageSize, selected, trimmedKeyword],
  );

  const bestItemsQuery = useItems(bestItemsParams);
  const itemsQuery = useItems(itemsParams);

  const { totalPages, filteredItems, pageGroupStart, pageGroupEnd } = useItemsPageDerived({
    items: itemsQuery.data?.list,
    totalCount: itemsQuery.data?.totalCount,
    pageSize,
    currentPage,
    keyword: trimmedKeyword,
    pageGroupSize,
  });

  const handleSearchInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchInput(event.target.value);
    },
    [setSearchInput],
  );
  const handleSearchInputKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        applySearch();
      }
    },
    [applySearch],
  );
  const handlePrevPage = useCallback(() => {
    setCurrentPage((page) => Math.max(1, page - 1));
  }, [setCurrentPage]);
  const handleNextPage = useCallback(() => {
    setCurrentPage((page) => Math.min(totalPages, page + 1));
  }, [setCurrentPage, totalPages]);

  const pageCount = Math.max(0, pageGroupEnd - pageGroupStart + 1);
  const pageNumbers = Array.from({ length: pageCount }, (_, index) => pageGroupStart + index);

  return {
    selected,
    searchInput,
    currentPage,
    likedIds,
    filteredItems,
    totalPages,
    pageNumbers,
    bestItemsQuery,
    itemsQuery,
    setCurrentPage,
    handleLikeToggle,
    handleSelectOrder,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handlePrevPage,
    handleNextPage,
  };
}
