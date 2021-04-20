/* istanbul ignore file */

import { combineReducers } from "redux";

import exampleCounterReducer from "./example-counter/example-counter.reducer";

export default combineReducers({
  exampleCounter: exampleCounterReducer,
});
