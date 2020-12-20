import { Action, User } from "./types";

const initialState: User = {
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  image: null,
  createdAt: null,
  updatedAt: null,
};

const otherUserReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "DISPLAY_OTHER_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default otherUserReducer;
