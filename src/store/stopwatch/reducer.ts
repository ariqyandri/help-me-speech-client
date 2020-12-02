import { time } from "console";
import { displayTime } from "../../config/constants";
import { Action } from "./types";

const initialState = {
  isActive: false,
  time: { sec: 0, min: 0, hrs: 0 },
  seconds: 0,
  lap: [],
};

const appStateReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SET_TIME":
      console.log(state.time);
      return {
        ...state,
        seconds: state.seconds + 1,
        time: displayTime(state.seconds + 1),
      };
    case "SWITCH":
      return { ...state, isActive: state.isActive === false ? true : false };
    case "DEACTIVATE":
      return {
        ...state,
        isActive: false,
        seconds: 0,
        time: displayTime(0),
      };
    default:
      return state;
  }
};

export default appStateReducer;
