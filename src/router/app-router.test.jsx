// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup } from "../tests/test.utils";
import AppRouter from "./app-router";

describe("AppRouter", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render", () => {
    const component = render(<AppRouter />);
    expect(component).toBeDefined();
  });

  // it("should be match snapshot", () => {
  //   const component = render(<AppRouter />);
  //   expect(component).toMatchSnapshot();
  // });
});
