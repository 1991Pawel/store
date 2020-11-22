import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { Product } from '../types/type';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const CartContext = createContext(null);

const CartProvider: React.FC = ({ children }) => {
  const [storedValue, setValue] = useLocalStorage('products', []);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(storedValue);
  }, []);

  const addItemToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setValue([...cartItems, product]);
  };

  const removeItemFromCart = (id: number) => {
    setCartItems(cartItems.filter((item: Product) => item.id !== id));
    setValue(cartItems.filter((item: Product) => item.id !== id));
  };

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
