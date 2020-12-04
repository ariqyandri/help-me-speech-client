import { combineReducers } from "redux";
import dummy from "./dummy/reducer";
import user from "./user/reducer";
import myWriting from "./myWriting/reducer";
import myWritings from "./myWritings/reducer";
import appState from "./appState/reducer";
import categories from "./categories/reducer";
import stopwatch from "./stopwatch/reducer";
import images from "./images/reducer";
import writing from "./writing/reducer";
import writings from "./writings/reducer";

export default combineReducers({
  dummy,
  appState,
  user,
  categories,
  myWriting,
  myWritings,
  stopwatch,
  images,
  writing,
  writings,
});
