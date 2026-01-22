import { axiosInstance } from '@shared/apis/axios';
import type { GetProductsResponse } from '../types/product';

export const getProducts = async (): Promise<GetProductsResponse> => {
  const { data } = await axiosInstance.get<GetProductsResponse>('/products');
  return data;
};
