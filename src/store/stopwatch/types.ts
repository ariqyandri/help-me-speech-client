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

export type Action = {
  type: "SET_TIME";
  payload: number;
};
