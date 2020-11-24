import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import reducer from "./reducer";

const devTools = (window as any).__REDUX_DEVTOOLS_EXTENSION__
  ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  : (x: any) => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools);

const store = createStore(reducer, enhancer);

export default store;
