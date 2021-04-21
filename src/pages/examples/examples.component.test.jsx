// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup } from "../../tests/test.utils";
import ExamplesPage from "./examples.component";

describe("ExamplesPage", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render", () => {
    const component = render(<ExamplesPage />);
    expect(component).toBeDefined();
  });

  // it("should match snapshot", () => {
  //   const component = render(<ExamplesPage />);
  //   expect(component).toMatchSnapshot();
  // });
});
