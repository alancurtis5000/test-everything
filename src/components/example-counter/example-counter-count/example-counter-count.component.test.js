// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup } from "@/_new_src/tests/test.utils";
import ExampleCounterCount from "./example-counter-count.component";

describe("ExampleCounterCount", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render", () => {
    const component = render(<ExampleCounterCount />);
    expect(component).toBeDefined();
  });

  it("should be render default redux value count", () => {
    const { getByTestId } = render(<ExampleCounterCount />);
    const count = getByTestId("count");
    const result = count.textContent;
    expect(result).toBe("0");
  });

  it("should be render redux value count", () => {
    const preloadedState = { exampleCounter: { count: 5, margin: 0 } };
    const { getByTestId } = render(<ExampleCounterCount />, { preloadedState });
    const count = getByTestId("count");
    const result = count.textContent;
    expect(result).toBe("5");
  });
});
