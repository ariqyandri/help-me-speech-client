export type User = {
  token: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
};

export type Action = {
  type: string;
  payload: any;
};
