import { Action } from "./types";

const initialState = {
  token: localStorage.getItem("token"),
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", action.payload.token);
      return { ...state, ...action.payload };
    case "LOG_OUT":
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    case "TOKEN_STILL_VALID":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
