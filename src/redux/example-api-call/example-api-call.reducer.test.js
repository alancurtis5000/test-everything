import { cleanup } from "../../tests/test.utils";
import configureAppStore from "../configure-store";
import * as actions from "./example-counter.actions";
import exampleCounterReducer, { initialState } from "./example-counter.reducer";
// Note: When writing test for reducers we are testing against
// our actual store, so we configure to our store not a mock store

describe("counterReducer", () => {
  let store;
  beforeEach(() => {
    store = configureAppStore();
  });

  afterEach(cleanup);

  it("test run", () => {
    expect(true).toEqual(true);
  });

  // INITIAL STATE //
  it("should return inital state: version 01", () => {
    expect(exampleCounterReducer(undefined, {})).toEqual(initialState);
  });

  it("should return inital state: version 02", () => {
    const state = exampleCounterReducer(undefined, { type: "@@INIT" });
    expect(state).toEqual(initialState);
  });

  // INCREMENT //
  it("should handle INCREMENT by 1", () => {
    const actionsList = [actions.exampleCounterIncrement()];

    actionsList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = { count: 1, margin: 1 };
    expect(result).toEqual(expected);
  });

  it("should handle INCREMENT by 1 three times", () => {
    const actionsList = [
      actions.exampleCounterIncrement(),
      actions.exampleCounterIncrement(),
      actions.exampleCounterIncrement(),
    ];

    actionsList.forEach((action) => store.dispatch(action));

    const result = store.getState().exampleCounter;
    const expected = { count: 3, margin: 1 };
    expect(result).toEqual(expected);
  });
});
