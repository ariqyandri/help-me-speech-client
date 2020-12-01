import { Category, Action } from "./types";

const initialState: Category[] = [];

const writingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_CATEGORIES":
      return [...action.payload];

    default:
      return state;
  }
};

export default writingReducer;
