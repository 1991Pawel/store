import React, { createContext, useState, useContext } from 'react';
import { Product } from '../types/type';

export const CartContext = createContext(null);
const CartProvider = ({ children, data }) => {
  const [cartItems, setCartItems] = useState(data);

  const addItemToCart = (product: Product) =>
    setCartItems([...cartItems, product]);
  const removeItemFromCart = (id: number) =>
    setCartItems(cartItems.filter((item: Product) => item.id !== id));

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

export function useCartContext() {
  return useContext(CartContext);
}
