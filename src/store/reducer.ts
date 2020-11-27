import { combineReducers } from "redux";
import dummy from "./dummy/reducer";
import user from "./user/reducer";
import writing from "./writing/reducer";

export default combineReducers({
  dummy,
  user,
  writing,
});
