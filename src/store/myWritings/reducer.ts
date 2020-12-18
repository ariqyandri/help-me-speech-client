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
              writing.content.length > 150
                ? `${writing.content.substring(0, 150)}...`
                : writing.content,
          };
        }
        return state;
      });
      return [...newState];
    case "REMOVE_MY_WRITINGS":
      return [
        ...state.filter((writing) => {
          if (writing) {
            return writing.id !== action.payload;
          }
          return writing;
        }),
      ];
    default:
      return state;
  }
};

export default writingReducer;
