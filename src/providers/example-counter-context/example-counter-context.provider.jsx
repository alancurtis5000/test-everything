import React, { createContext, useState, useEffect } from "react";

import {
  incrementCount,
  decrementCount,
} from "./example-counter-context.utils";

export const ExampleCounterContext = createContext({
  count: 0,
  margin: 1,
  // actions
  increment: () => {},
  decrement: () => {},
  updateMargin: () => {},
  reset: () => {},
});

const ExampleCounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState(1);
  // actions
  const increment = () => setCount(incrementCount(count, margin));
  const decrement = () => setCount(decrementCount(count, margin));
  const updateMargin = (updateMargin) => setMargin(updateMargin);
  const reset = () => {
    setCount(0);
    setMargin(1);
  };

  // if count changes do something
  useEffect(() => {
    console.log({ count });
  }, [count]);

  return (
    <ExampleCounterContext.Provider
      value={{
        count,
        margin,
        increment,
        decrement,
        updateMargin,
        reset,
      }}
    >
      {children}
    </ExampleCounterContext.Provider>
  );
};

export default ExampleCounterContextProvider;
