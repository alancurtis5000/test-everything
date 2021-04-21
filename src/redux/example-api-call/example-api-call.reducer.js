import types from "./example-api-call.types";

export const initialState = {
  data: {},
  isLoaded: false,
  error: "",
};

const exampleApiCallReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EXAMPLE_API_CALL_START:
      return { ...state, isLoaded: false };
    case types.EXAMPLE_API_CALL_SUCCESS:
      return { ...state, ...action.payload, isLoaded: true };
    case types.EXAMPLE_API_CALL_FAILURE:
      return { ...state, data: {}, isLoaded: true, ...action.payload };
    default:
      return state;
  }
};

export default exampleApiCallReducer;
