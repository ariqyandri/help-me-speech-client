import { Writing, Action } from "./types";

const initialState: Writing[] = [];

const writingsReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "FETCH_WRITINGS":
      return [...action.payload];
    case "CREATE_DESCRIPTION":
      const newState = state.map((writing) => {
        if (writing) {
          return {
            ...writing,
            description:
              writing.content.length > 110
                ? `${writing.content.substring(0, 110)}...`
                : writing.content,
          };
        }
        return state;
      });
      return [...newState];
    default:
      return state;
  }
};

export default writingsReducer;
