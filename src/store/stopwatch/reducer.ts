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
        ...initialState,
      };
    case "LAP":
      console.log([
        ...state.lap,
        { num: state.lap.length + 1, time: state.time },
      ]);
      return {
        ...state,
        lap: [...state.lap, { no: state.lap.length + 1, time: state.time }],
      };
    default:
      return state;
  }
};

export default appStateReducer;
