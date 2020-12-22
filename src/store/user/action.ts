import { apiUrl } from "../../config/constants";
import axios from "axios";
import { selectToken } from "./selectors";
import { User } from "./types";
import {
  appDoneLoading,
  appLoading,
  loginCorrect,
  loginInCorrect,
  showMessageWithTimeout,
} from "../appState/action";

const loginSuccess = (userWithToken: User) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: userWithToken,
  };
};

const updatedProfile = (updatedUser: User) => {
  return {
    type: "UPDATE_PROFILE",
    payload: updatedUser,
  };
};

const tokenStillValid = (userWithoutToken: User) => ({
  type: "TOKEN_STILL_VALID",
  payload: userWithoutToken,
});

export const logOut = () => ({ type: "LOG_OUT" });

export const signUp = (
  firstName: string,
  lastName: string,
  email: string,
  image: string,
  password: string
) => {
  return async (dispatch: any, getState: any) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        firstName,
        lastName,
        email,
        image,
        password,
      });
      dispatch(loginCorrect());
      dispatch(loginSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          ` Hi ${firstName}, you have successfully created an account!`,
          2000
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        dispatch(loginInCorrect());
      } else {
        console.log(error.message);
        dispatch(loginInCorrect());
      }
      dispatch(appDoneLoading());
    }
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any, getState: any) => {
    dispatch(appLoading());
    try {
      const response = await axios.post(`${apiUrl}/login`, {
        email,
        password,
      });
      dispatch(loginCorrect());
      dispatch(loginSuccess(response.data));
      dispatch(
        showMessageWithTimeout(
          "success",
          true,
          ` Welcome back ${response.data.firstName}!`,
          2000
        )
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        if (error.response.data.message === "User with email already exists") {
          dispatch(loginInCorrect());
        }
      } else {
        console.log(error.message);
        if (error.message === "User with email already exists") {
          dispatch(loginInCorrect());
        }
      }
      dispatch(appDoneLoading());
    }
  };
};

export const getUserWithStoredToken = () => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    if (token === null) return;
    dispatch(appLoading());
    try {
      const response = await axios.get(`${apiUrl}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      dispatch(tokenStillValid(response.data));
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
      dispatch(appDoneLoading());
    }
  };
};

export const updateProfile = (value: any) => {
  return async (dispatch: any, getState: any) => {
    const token = selectToken(getState());
    dispatch(appLoading());
    try {
      const response = await axios.put(
        `${apiUrl}/user`,
        {
          ...value,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(loginCorrect());
      dispatch(updatedProfile(response.data));
      dispatch(
        showMessageWithTimeout("success", true, `Profile updated!`, 2000)
      );
      dispatch(appDoneLoading());
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
        if (error.response.data.message === "User with email already exists") {
          dispatch(loginInCorrect());
        }
      } else {
        console.log(error.message);
        if (error.message === "User with email already exists") {
          dispatch(loginInCorrect());
        }
      }
      dispatch(appDoneLoading());
    }
  };
};
