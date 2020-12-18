import { Writing, Action } from "./types";

const initialState: Writing = null;

const writingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "DISPLAY_MY_WRITING":
      return { ...action.payload };
    case "REMOVE_MY_WRITING":
      return initialState;
    default:
      return state;
  }
};

export default writingReducer;
