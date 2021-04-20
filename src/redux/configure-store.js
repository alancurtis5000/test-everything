/* istanbul ignore file */

import rootReducer from "./root.reducer";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk, ...getDefaultMiddleware()],
    preloadedState,
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./root.reducer", () =>
      store.replaceReducer(rootReducer)
    );
  }

  return store;
}
