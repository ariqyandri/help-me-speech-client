export type User = {
  id: number | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  image: string | null;
  createdAt: any;
  updatedAt: any;
};
export type Action = {
  type: "DISPLAY_OTHER_USER";
  payload: User;
};
