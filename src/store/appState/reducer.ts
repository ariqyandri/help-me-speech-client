import { Action } from "./types";

const initialState = {
  loading: false,
  message: null,
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

    default:
      return state;
  }
};

export default appStateReducer;
