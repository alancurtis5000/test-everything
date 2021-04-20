import types from "./example-counter.types";

export const initialState = {
  count: 0,
  margin: 1,
};

const exampleCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EXAMPLE_COUNTER_INCREMENT:
      return { ...state, ...action.payload };
    case types.EXAMPLE_COUNTER_DECREMENT:
      return { ...state, ...action.payload };
    case types.EXAMPLE_COUNTER_UPDATE_MARGIN:
      return { ...state, ...action.payload };
    case types.EXAMPLE_COUNTER_RESET:
      return { ...initialState };
    default:
      return state;
  }
};

export default exampleCounterReducer;
