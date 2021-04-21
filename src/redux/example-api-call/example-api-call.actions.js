import types from "./example-api-call.types";
import axios from "axios";

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
  return axios
    .get(
      "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json"
    )
    .then((response) => {
      console.log(response.data);
      dispatch(exampleApiCallSuccess(response.data));
    })
    .catch((error) => {
      console.log(error);
      console.log(error.message);
      dispatch(exampleApiCallFailure(error.message));
    });
};
