import { useContext } from "react";
import { CheckoutContext } from "../contextProvider/CheckoutContext";

export function useCheckout() {
  const context = useContext(CheckoutContext);
  console.log(context);

  if (!context) {
    throw new Error("useCheckout must be used inside CheckoutProvider");
  }

  return context;
}
