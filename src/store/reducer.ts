import { combineReducers } from "redux";
import dummy from "./dummy/reducer";
import user from "./user/reducer";
import writing from "./writing/reducer";
import myWritings from "./myWritings/reducer";
import appState from "./appState/reducer";
import categories from "./categories/reducer";
import stopwatch from "./stopwatch/reducer";
import images from "./images/reducer";

export default combineReducers({
  dummy,
  appState,
  user,
  categories,
  writing,
  myWritings,
  stopwatch,
  images,
});
