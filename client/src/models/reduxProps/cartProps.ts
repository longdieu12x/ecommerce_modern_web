import { productReducerProps } from './productProps';
export interface cartProps {
  products: productReducerProps[];
  quantity: number;
  total: number;
}
