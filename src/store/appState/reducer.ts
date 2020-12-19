import { Action } from "./types";

const initialState = {
  loading: false,
  message: null,
  fullfilledRequest: null,
  loginCorrect: true,
};

const appStateReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "APP_LOADING":
      return { ...state, loading: true };

    case "APP_DONE_LOADING":
      return { ...state, loading: false };

    case "SET_MESSAGE":
      return { ...state, message: action.payload };

    case "CLEAR_MESSAGE":
      return { ...state, message: null };

    case "FULFILLED_REQUEST":
      return { ...state, fullfilledRequest: action.payload };

    case "RESET_REQUEST":
      return { ...state, fullfilledRequest: null };

    case "LOGIN_CORRECT":
      return { ...state, loginCorrect: true };

    case "LOGIN_INCORRECT":
      return { ...state, loginCorrect: false };
    default:
      return state;
  }
};

export default appStateReducer;
