export type User = {
  token: any;
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  createdAt: any;
  updatedAt: any;
};

export type Action =
  | {
      type: "LOGIN_SUCCESS";
      payload: User;
    }
  | {
      type: "TOKEN_STILL_VALID";
      payload: User;
    }
  | { type: "LOG_OUT" };
