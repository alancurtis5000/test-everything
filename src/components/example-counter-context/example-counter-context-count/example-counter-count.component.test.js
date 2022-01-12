// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { cleanup } from "../../../tests/test.utils";

describe("ExampleCounterCount", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should run", () => {
    expect(true).toBe(true);
  });
});
