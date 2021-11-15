import axios from "axios";
import { ProductProps } from "src/models/product";
interface callbackFunction {
  (res: any): void;
}

export const getAllProducts = (
  category: string | undefined,
  callback: callbackFunction
) => {
  let api: string;
  if (category) {
    api = `${process.env.REACT_APP_API}/products?category=${category}`;
  } else {
    api = `${process.env.REACT_APP_API}/products`;
  }
  axios.get<ProductProps[]>(api).then(res => {
    callback(res.data);
  });
};
