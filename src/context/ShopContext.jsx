import { createContext } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

export default function ShopContextProvider(props) {
  const currency = "$";
  const deliveryFee = 10;
  const value = {
    products,
    currency,
    deliveryFee,
  };
  // Wraps the children components and makes the value object availabe to them
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
}
