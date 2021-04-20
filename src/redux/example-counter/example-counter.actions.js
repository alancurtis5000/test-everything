import types from "./example-counter.types";
import * as utils from "./example-counter.utils";

export const exampleCounterIncrement = () => (dispatch, getState) => {
  const currentExampleCounter = getState().exampleCounter;
  const { margin, count } = currentExampleCounter;
  const newCount = { count: utils.incrementCount(count, margin) };
  dispatch({
    type: types.EXAMPLE_COUNTER_INCREMENT,
    payload: newCount,
  });
};

export const exampleCounterDecrement = () => (dispatch, getState) => {
  const currentExampleCounter = getState().exampleCounter;
  const { margin, count } = currentExampleCounter;
  const newCount = { count: utils.decrementCount(count, margin) };
  dispatch({
    type: types.EXAMPLE_COUNTER_DECREMENT,
    payload: newCount,
  });
};

export const exampleCounterUpdateMargin = (updatedMargin) => {
  const newMargin = { margin: updatedMargin };
  return {
    type: types.EXAMPLE_COUNTER_UPDATE_MARGIN,
    payload: newMargin,
  };
};

export const exampleCounterReset = () => {
  return {
    type: types.EXAMPLE_COUNTER_RESET,
  };
};
