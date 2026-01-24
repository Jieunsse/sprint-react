import { useCallback, useState } from 'react';

type OrderBy = 'recent' | 'favorite';

export function useItemsPageState() {
  const [selected, setSelected] = useState<OrderBy>('recent');
  const [keyword, setKeyword] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [likedIds, setLikedIds] = useState<Set<number>>(() => new Set());

  const handleLikeToggle = useCallback(
    (id: number) => (nextLiked: boolean) => {
      setLikedIds((prev) => {
        const next = new Set(prev);
        if (nextLiked) {
          next.add(id);
        } else {
          next.delete(id);
        }
        return next;
      });
    },
    [],
  );

  const applySearch = useCallback(() => {
    setKeyword(searchInput);
    setCurrentPage(1);
  }, [searchInput]);

  const handleSelectOrder = useCallback((value: OrderBy) => {
    setSelected(value);
    setCurrentPage(1);
  }, []);

  return {
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
  };
}
