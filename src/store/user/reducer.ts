import { Action, User } from "./types";

const initialState: User = {
  token: localStorage.getItem("token"),
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  createdAt: null,
  updatedAt: null,
};

const userReducer = (state = initialState, action: Action) => {
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

export default userReducer;
