import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@shared/query/queryKeys';
import { getItems } from '../apis/getProducts';

export function useItems() {
  return useQuery({
    queryKey: queryKeys.items,
    queryFn: getItems,
  });
}
