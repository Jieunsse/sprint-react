export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  favoriteCount: number;
  ownerId: number;
  ownerNickname: string;
  createdAt: string;
}

export interface GetProductsResponse {
  totalCount: number;
  list: Product[];
}
