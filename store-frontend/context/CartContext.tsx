import React, {
  createContext,
  useState,
  useContext,
  useEffect,
} from 'react';
import { Product } from '../types/type';
import { useLocalStorage } from '../hooks/useLocalStorage';

type CartConxtextProps = {
  cartItems: Product[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (id: number) => void;
  totalPrice: () => string;
};

export const CartContext = createContext<
  CartConxtextProps | undefined
>(undefined);

const CartProvider: React.FC = ({ children }) => {
  const [storedValue, setValue] = useLocalStorage('products', []);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(storedValue);
  }, []);

  const addItemToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
    setValue([...cartItems, product]);
    console.log('render');
  };

  const removeItemFromCart = (id: number) => {
    setCartItems(cartItems.filter((item: Product) => item.id !== id));
    setValue(cartItems.filter((item: Product) => item.id !== id));
  };

  const totalPrice = () =>
    cartItems.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeItemFromCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = (): CartConxtextProps => {
  const ctx = useContext(CartContext);
  if (ctx === undefined) {
    throw new Error(
      'useCartContext must be used within a CartProvider',
    );
  }
  return ctx;
};

export default CartProvider;
