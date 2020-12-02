import { Action } from "./types";

const initialState = {
  loading: false,
  message: null,
  fullfilledRequest: null,
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
      console.log(`null`)
      return { ...state, fullfilledRequest: null };
    default:
      return state;
  }
};

export default appStateReducer;
