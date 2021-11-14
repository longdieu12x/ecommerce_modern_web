import { ActionType } from "../action-types";
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