import {
  loginStart,
  loginSuccess,
  loginFailure,
  logoutSuccess,
} from "./userRedux";
import { publicRequest } from "../requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch {
    dispatch(loginFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutSuccess());
};
