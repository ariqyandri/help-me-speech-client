import { Writing, Action } from "./types";

const initialState: Writing[] = [];

const writingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_MY_WRITINGS":
      return [...action.payload];
    default:
      return state;
  }
};

export default writingReducer;
