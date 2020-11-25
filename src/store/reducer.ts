import { combineReducers } from "redux";
import dummy from "./dummy/reducer";
import user from "./user/reducer";

export default combineReducers({
  dummy,
  user,
});
