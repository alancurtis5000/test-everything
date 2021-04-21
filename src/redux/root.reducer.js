/* istanbul ignore file */

import { combineReducers } from "redux";

import exampleCounterReducer from "./example-counter/example-counter.reducer";
import exampleApiCallReducer from "./example-api-call/example-api-call.reducer";

export default combineReducers({
  exampleApiCall: exampleApiCallReducer,
  exampleCounter: exampleCounterReducer,
});
