import React, { createContext, useState, useEffect } from "react";

import { increment } from "./example-counter-context.utils";

export const CartContext = createContext({
  count: 0,
  margin: 1,
  // actions
  increment: () => {},
});

const CartProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [margin, setMargin] = useState(1);
  // actions
  const increment = (count, margin) => setCount(increment(count, margin));

  // if count changes do something
  useEffect(() => {}, [count]);

  return (
    <CartContext.Provider
      value={{
        count,
        margin,
        increment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
