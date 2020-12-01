export type SetMessage = {
  variant: string;
  dismissable: boolean;
  text: string;
};

export type SetMessageWithTimeout = {
  variant: string;
  dismissable: boolean;
  text: string;
  timeOutMilliSeconds: number;
};

export type Action =
  | { type: "APP_LOADING" }
  | {
      type: "APP_DONE_LOADING";
    }
  | { type: "CLEAR_MESSAGE" }
  | { type: "SET_MESSAGE"; payload: SetMessage };
