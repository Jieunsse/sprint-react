import { axiosInstance } from '@shared/apis/axios';
import type { GetItemsResponse } from '../types/item';

export const getItems = async (): Promise<GetItemsResponse> => {
  const { data } = await axiosInstance.get<GetItemsResponse>('/products');
  return data;
};
