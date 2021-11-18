import { ActionType } from "../action-types";
import { userProps } from "./../../models/user";

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
