// We're using our own custom render function for redux conneceted compoenentsand not RTL's render
import { render, cleanup } from "../../tests/test.utils";
import NotFoundPage from "./not-found.component";

describe("NotFoundPage", () => {
  beforeEach(() => {});

  afterEach(cleanup);

  it("should render", () => {
    const component = render(<NotFoundPage />);
    expect(component).toBeDefined();
  });

  it("should be match snapshot", () => {
    const component = render(<NotFoundPage />);
    expect(component).toMatchSnapshot();
  });
});
