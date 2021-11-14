import axios from "axios";
import { ProductProps } from "src/models/product";
interface callbackFunction {
  (res: any): void;
}

export const getAllProducts = (category: string | undefined, callback: callbackFunction) => {
  axios.get<ProductProps[]>(`${process.env.REACT_APP_API}/products`)
  .then((res) => {
    callback(res.data);
  })
};
