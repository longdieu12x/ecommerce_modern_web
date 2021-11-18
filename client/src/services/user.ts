import { userData } from "./../models/reduxProps/userProps";
import { userRegister } from "src/models/user";
import axios from "axios";
interface callbackFunction {
  (res: any): void;
}

export const storeUserData = (data: userData) => {
  localStorage.setItem(
    `${process.env.REACT_APP_PREFIX_LOCAL}_user`,
    JSON.stringify(data)
  );
  data?.accessToken &&
    localStorage.setItem(
      `${process.env.REACT_APP_PREFIX_LOCAL}_access_token`,
      JSON.stringify(data.accessToken)
    );
};
export const logOut = () => {
  localStorage.removeItem(`${process.env.REACT_APP_PREFIX_LOCAL}_user`);
  localStorage.removeItem(`${process.env.REACT_APP_PREFIX_LOCAL}_access_token`);
  window.location.reload();
};
export const registerAccount = (
  data: userRegister,
  callback: callbackFunction
) => {
  axios
    .post(`${process.env.REACT_APP_API}/auth/register`, data)
    .then(res => {
      callback({
        status: 1
      });
    })
    .catch(err => {
      callback({
        status: 0
      });
    });
};
