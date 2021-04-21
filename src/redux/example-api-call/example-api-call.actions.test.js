import { cleanup } from "../../tests/test.utils";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import * as actions from "./example-api-call.actions";
import types from "./example-api-call.types";

// Note: when testing actions we only want to test the action
// and payload being create so we use a mock store

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("counterActions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({ exampleCounter: { count: 0, margin: 1 } });
  });

  afterEach(cleanup);

  it("test run", () => {
    expect(true).toEqual(true);
  });

  it("increment action fired", () => {
    const expectedActions = [
      {
        type: types.EXAMPLE_COUNTER_INCREMENT,
        payload: { count: 1 },
      },
    ];
    store.dispatch(actions.exampleCounterIncrement());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
