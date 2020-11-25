export type User = {
  token: string;
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

export type Action =
  | {
      type: "LOGIN_SUCCESS";
      payload: User;
    }
  | {
      type: "TOKEN_STILL_VALID";
      payload: any;
    }
  | { type: "LOG_OUT" };
