import React, { createContext, useContext, useState } from "react";

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to provide the cart context
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((i) => i.name === item.name);
      if (itemExists) {
        return prevItems.map((i) =>
          i.name === item.name ? { ...i, unit: i.unit + 1 } : i
        );
      }
      return [...prevItems, { ...item, unit: 1 }];
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
