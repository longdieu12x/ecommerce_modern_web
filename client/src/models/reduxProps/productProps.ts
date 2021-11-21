export interface productReducerProps {
  _id: string;
  title: string;
  desc: string;
  img: string;
  categories: string[];
  size: string;
  color: string;
  price: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  quantity?: number;
}
