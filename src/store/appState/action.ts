import { DEFAULT_MESSAGE_TIMEOUT } from "../../config/constants";
import { Id } from "./types";

export const appLoading = () => ({ type: "APP_LOADING" });
export const appDoneLoading = () => ({ type: "APP_DONE_LOADING" });
export const clearMessage = () => ({ type: "CLEAR_MESSAGE" });
export const fulfilledRequest = (id: Id) => ({
  type: "FULFILLED_REQUEST",
  payload: id,
});

export const resetRequest = () => ({
  type: "RESET_REQUEST",
});

export const setMessage = (
  variant: string,
  dismissable: boolean,
  text: string
) => {
  return {
    type: "SET_MESSAGE",
    payload: {
      variant,
      dismissable,
      text,
    },
  };
};

export const showMessageWithTimeout = (
  variant: string,
  dismissable: boolean,
  text: string,
  timeOutMilliSeconds: number
) => {
  return (dispatch: any) => {
    dispatch(setMessage(variant, dismissable, text));

    const timeout = timeOutMilliSeconds || DEFAULT_MESSAGE_TIMEOUT;

    setTimeout(() => dispatch(clearMessage()), timeout);
  };
};
