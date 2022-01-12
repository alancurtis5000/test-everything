import { render, cleanup, fireEvent } from "../../tests/test.utils";
import ExampleApiCall from "./example-api-call.component";
import { getQuote } from "../../redux/example-api-call/example-api-call.actions";
import axios from "axios";

jest.mock("axios");

describe("ExampleApiCall", () => {
  afterEach(cleanup);

  it("should match snapshot", () => {
    const component = render(<ExampleApiCall />);
    expect(component).toMatchSnapshot();
  });

  it.skip("should request render default state", async () => {
    const component = render(<ExampleApiCall />);
    const { getByTestId } = component;
    // const button = getByTestId("get-quote");

    const data = {
      quotes: [
        {
          text: "hello charlie",
          author: "Mike D",
        },
      ],
    };
    // axios.get.mockResolvedValue(resp);
    axios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data,
      })
    );
    const quote = await getQuote();
    expect(quote).toEqual({ data });
    // expect(axios.get).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId("get-quote"));
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(
      "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    );
    let quoteText = getByTestId("quote-text").textContent;
    let quoteAuthor = getByTestId("quote-author").textContent;
    expect(quoteText).toBe("hello charlie");
  });

  // it("should request api call", () => {
  //   const component = render(<ExampleApiCall />);
  //   const { getByTestId } = component;

  //   // const button = getByTestId("get-quote");
  //   fireEvent.click(getByTestId("get-quote"));
  //   let quoteText = getByTestId("quote-text").textContent;
  //   let quoteAuthor = getByTestId("quote-author").textContent;
  //   // fireEvent.click(getByTestId("add"));
  //   // count = getByTestId("count").textContent;
  //   expect(quoteText).toBe("");
  //   // const data = {
  //   //   data: {
  //   //     quotes: [
  //   //       {
  //   //         text: "hello charlie",
  //   //         author: "Mike D",
  //   //       },
  //   //     ],
  //   //   },
  //   // };

  //   // axios.get.mockImplementationOnce(() => Promise.resolve(data));
  //   // await expect(fetchData("react")).resolves.toEqual(data);
  // });
  // it("should show loading spinner", () => {
  //   expect(false).toBe(true);
  // });
  // it("should show error on api call error", () => {
  // const errorMessage = 'Network Error';

  // axios.get.mockImplementationOnce(() =>
  //   Promise.reject(new Error(errorMessage)),
  // );
  //   expect(false).toBe(true);
  // });
  // it("should show no results found on empty return", () => {
  //   expect(false).toBe(true);
  // });
  // it("should show correct results after api call", () => {
  //   expect(false).toBe(true);
  // });
});
