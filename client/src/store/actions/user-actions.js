import { push } from "connected-react-router";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  REGISTER_USER_FAILURE,
  REGISTER_USER_SUCCESS,
} from "./action-types";
import axiosApi from "../../config/axios-api";

const registerUserSuccess = () => {
  return { type: REGISTER_USER_SUCCESS };
};
const registerUserFailure = (error) => {
  return { type: REGISTER_USER_FAILURE, error };
};

export const registerUser = (userData) => {
  return async (dispatch) => {
    try {
      await axiosApi.post("/users", userData);
      dispatch(registerUserSuccess());
      dispatch(push("/"));
    } catch (e) {
      if (e.response && e.response.data) {
        dispatch(registerUserFailure(e.response.data));
      } else {
        dispatch(registerUserFailure({ global: "No internet" }));
      }
    }
  };
};

const loginUserSuccess = (user) => {
  return { type: LOGIN_USER_SUCCESS, user };
};
const loginUserFailure = (error) => {
  return { type: LOGIN_USER_FAILURE, error };
};

export const loginUser = (userData) => {
  return async (dispatch) => {
    try {
      // const response = await axiosApi.post("/users/sessions", userData);
      alert("login request");
      // dispatch(loginUserSuccess(response.data));
      dispatch(push("/"));
    } catch (e) {
      dispatch(loginUserFailure(e.response.data));
    }
  };
};

export const logoutUser = () => {
  return async (dispatch, getState) => {
    const token = getState().users.user.token;
    const headers = { Authorization: token };

    await axiosApi.delete("/users/sessions", { headers });
    dispatch({ type: LOGOUT_USER });
    dispatch(push("/"));
  };
};

export const facebookLogin = (data) => {
  return async (dispatch) => {
    try {
      const response = await axiosApi.post("/users/facebookLogin", data);
      dispatch(loginUserSuccess(response.data));
      dispatch(push("/"));
    } catch (e) {
      dispatch(loginUserFailure(e.response.data));
    }
  };
};
