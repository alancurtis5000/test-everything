import React, { createContext, useState, useEffect } from "react";

import {
  incrementCount,
  decrementCount,
} from "./example-counter-context.utils";

export const ExampleCounterContext = createContext({
  count: 22,
  margin: 1,
  // actions
  increment: () => {},
  decrement: () => {},
});

const ExampleCounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState(1);
  // actions
  const increment = () => setCount(incrementCount(count, margin));
  const decrement = () => setCount(decrementCount(count, margin));

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
      }}
    >
      {children}
    </ExampleCounterContext.Provider>
  );
};

export default ExampleCounterContextProvider;
