import {
  BankruptAction,
  WithDrawAction,
  DepositAction
} from "../actions-interfaces";
import { ActionType } from "../action-types/index";
import { Dispatch } from "redux";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<DepositAction>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount
    });
  };
};
export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<WithDrawAction>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount
    });
  };
};
export const bankruptMoney = () => {
  return (dispatch: Dispatch<BankruptAction>) => {
    dispatch({
      type: ActionType.BANKRUPT
    });
  };
};
