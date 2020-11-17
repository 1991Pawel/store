import React, { createContext, useState } from 'react';
import { Product } from '../types/type';

export const CartContext = createContext({});

const CartProvider = ({ children, data }) => {
  const [cartItems, setCartItems] = useState(data);

  const addItemToCart = (product: Product) =>
    setCartItems([...cartItems, product]);
  const removeItemFromCart = (id: number) =>
    setCartItems(cartItems.filter((item) => item.id !== id));

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
