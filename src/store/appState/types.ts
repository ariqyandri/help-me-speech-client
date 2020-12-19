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

export type Id = number | null;

export type Action =
  | { type: "APP_LOADING" }
  | {
      type: "APP_DONE_LOADING";
    }
  | { type: "CLEAR_MESSAGE" }
  | { type: "SET_MESSAGE"; payload: SetMessage }
  | {
      type: "FULFILLED_REQUEST";
      payload: Id;
    }
  | {
      type: "RESET_REQUEST";
    }
  | {
      type: "LOGIN_CORRECT";
    }
  | {
      type: "LOGIN_INCORRECT";
    };
