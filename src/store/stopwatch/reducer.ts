import { displayTime } from "../../config/constants";
import { Action } from "./types";

const initialState = {
  isActive: false,
  time: null,
  lap: [],
};

const appStateReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_TIME":
      return { ...state, time: displayTime(action.payload) };

    default:
      return state;
  }
};

export default appStateReducer;
