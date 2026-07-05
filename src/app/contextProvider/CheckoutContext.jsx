"use client";

import { createContext, useState } from "react";

export const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCheckout = () => setIsOpen(true);

  const closeCheckout = () => setIsOpen(false);

  const toggleCheckout = () => setIsOpen((prev) => !prev);

  return (
    <CheckoutContext.Provider
      value={{
        isOpen,
        openCheckout,
        closeCheckout,
        toggleCheckout,
      }}
    >
      {children}
    </CheckoutContext.Provider>
  );
}

