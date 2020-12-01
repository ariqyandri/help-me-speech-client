import { Writing, Action } from "./types";

const initialState: Writing[] = [];

const writingReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_MY_WRITINGS":
      return [...action.payload];
    case "CREATE_DESCRIPTION":
      const newState = state.map((writing) => {
        if (writing) {
          return {
            ...writing,
            description:
              writing.content.length > 100
                ? `${writing.content.substring(0, 100)}...`
                : writing.content,
          };
        }
        return;
      });
      return [...newState];
    default:
      return state;
  }
};

export default writingReducer;
