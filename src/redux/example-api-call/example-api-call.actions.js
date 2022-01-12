import types from "./example-api-call.types";
import axios from "axios";

export const getQuote = async () => {
  return axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1");
};

export const exampleApiCallStart = () => (dispatch) => {
  dispatch({
    type: types.EXAMPLE_API_CALL_START,
  });
};
export const exampleApiCallSuccess = (quoteData) => (dispatch) => {
  dispatch({
    type: types.EXAMPLE_API_CALL_SUCCESS,
    payload: { data: quoteData },
  });
};

export const exampleApiCallFailure = (error) => (dispatch) => {
  dispatch({
    type: types.EXAMPLE_API_CALL_FAILURE,
    payload: { error },
  });
};

export const exampleApiCall = () => (dispatch) => {
  dispatch(exampleApiCallStart());
  return getQuote()
    .then((response) => {
      dispatch(exampleApiCallSuccess(response.data.quotes[0]));
    })
    .catch((error) => {
      dispatch(exampleApiCallFailure(error.message));
    });
};
