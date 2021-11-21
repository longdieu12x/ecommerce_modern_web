import { ProductProps } from 'src/models/product';
import { cartProps } from './../../models/reduxProps/cartProps';
import { ActionType } from "../action-types";
import { userProps } from "./../../models/user";
import { productReducerProps } from 'src/models/reduxProps/productProps';
export interface DepositAction {
  type: ActionType.DEPOSIT;
  payload: number;
}

export interface WithDrawAction {
  type: ActionType.WITHDRAW;
  payload: number;
}

export interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export interface CreateUserAction {
  type: ActionType.CREATE_USER_SUCCESS;
  payload: userProps;
}

export interface CreateUserFailAction {
  type: ActionType.CREATE_USER_FAIL;
}

export interface AddProductCart {
  type: ActionType.ADD_PRODUCT_TO_CART;
  payload: productReducerProps;
}
