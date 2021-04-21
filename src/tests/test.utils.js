// test-utils.js
// this is a custom render for components connected to redux
// also connects to react-router-dom
import React from "react";
import { render as rtlRender } from "@testing-library/react";
import configureAppStore from "../redux/configure-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

function render(
  ui,
  {
    preloadedState,
    store = configureAppStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
