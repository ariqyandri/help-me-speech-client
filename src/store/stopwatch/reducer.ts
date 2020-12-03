import { displayTime } from "../../config/constants";
import { Action } from "./types";

const initialState = {
  isActive: false,
  time: { sec: 0, min: 0, hrs: 0 },
  seconds: 0,
  laps: [],
};

const appStateReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_TIME":
      return {
        ...state,
        seconds: state.seconds + 1,
        time: displayTime(state.seconds + 1),
      };
    case "SWITCH":
      return { ...state, isActive: state.isActive === false ? true : false };
    case "DEACTIVATE":
      return {
        ...initialState,
      };
    case "LAP":
      return {
        ...state,
        laps: [...state.laps, { num: state.laps.length + 1, time: state.time }],
      };
    default:
      return state;
  }
};

export default appStateReducer;
