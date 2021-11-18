import { ActionType } from "../action-types";
import { userProps } from "../../models/user";
import { CreateUserAction, CreateUserFailAction } from "../actions-interfaces";
const initialState = { data: {} };

type Action = CreateUserAction | CreateUserFailAction;

const userReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CREATE_USER_SUCCESS:
      const data = action.payload;
      return { ...state, data };
    case ActionType.CREATE_USER_FAIL:
      return { data: {} };
    default:
      return state;
  }
};

export default userReducer;
