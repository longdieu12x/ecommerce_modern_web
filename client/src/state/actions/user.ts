import { loginProps } from "./../../models/loginProps";
import axios from "axios";
import { CreateUserAction, CreateUserFailAction } from "../actions-interfaces";
import { ActionType } from "../action-types/index";
import { Dispatch } from "redux";

export const login =
  (userData: loginProps) =>
  async (dispatch: Dispatch<CreateUserAction | CreateUserFailAction>) => {
    axios
      .post(`${process.env.REACT_APP_API}/auth/login`, userData)
      .then(res => {
        dispatch({
          type: ActionType.CREATE_USER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ActionType.CREATE_USER_FAIL
        });
      });
  };
