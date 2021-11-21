import { productReducerProps } from './../../models/reduxProps/productProps';
import axios from "axios";
import { AddProductCart } from "../actions-interfaces";
import { ActionType } from "../action-types/index";
import { Dispatch } from "redux";

export const addCartHandler =
  (data: productReducerProps) =>
  (dispatch: Dispatch<AddProductCart>) => {
    dispatch({
      type: ActionType.ADD_PRODUCT_TO_CART,
      payload: data
    })
  };
