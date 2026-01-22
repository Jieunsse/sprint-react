import { useQuery } from '@tanstack/react-query';
import { queryKeys } from '@shared/query/queryKeys';
import { getProducts } from '../apis/getProducts';

export function useProducts() {
  return useQuery({
    queryKey: queryKeys.products,
    queryFn: getProducts,
  });
}
