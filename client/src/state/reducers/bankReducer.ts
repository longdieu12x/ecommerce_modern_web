import { ActionType } from "../action-types";
import {
  DepositAction,
  WithDrawAction,
  BankruptAction
} from "../actions-interfaces";

const initialState = 0;

type Action = DepositAction | WithDrawAction | BankruptAction;

const bankReducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.DEPOSIT:
      return state + action.payload;
    case ActionType.WITHDRAW:
      return state - action.payload;
    case ActionType.BANKRUPT:
      return 0;
    default:
      return state;
  }
};

export default bankReducer;
