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
  totalPrice: () => string;
  totalProducts: () => number;
  addItemToCart: (product: Product) => void;
  decrementItemFromCart: (id: number) => void;
  removeItemFromCart: (id: number) => void;
};

export const CartContext = createContext<
  CartConxtextProps | undefined
>(undefined);

const CartProvider: React.FC = ({ children }) => {
  const [storedValue, setValue] = useLocalStorage('products', []);
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(storedValue);
  }, [storedValue]);

  const addItemToCart = (product: Product) => {
    const inCart = cartItems.find((item) => item.id === product.id);
    const itemsInCart = [...cartItems];
    if (!inCart) {
      const newProduct = {
        ...product,
        quantity: 1,
      };
      setValue([...itemsInCart, newProduct]);
    } else {
      const newItems = cartItems.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setValue(newItems);
    }
  };

  const decrementItemFromCart = (id: number) => {
    const itemsInCart = cartItems.map((item) => {
      if (item.id === id) {
        if (item.quantity) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
      }
      return item;
    });
    setValue(itemsInCart.filter((item) => item.quantity >= 1));
  };

  const removeItemFromCart = (id: number) => {
    setValue(cartItems.filter((item) => item.id !== id));
  };

  const totalProducts = () =>
    cartItems.reduce((prev, curr) => prev + curr.quantity, 0);

  const totalPrice = () =>
    cartItems
      .reduce((prev, curr) => prev + curr.price * curr.quantity, 0)
      .toFixed(2);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        totalProducts,
        addItemToCart,
        removeItemFromCart,
        decrementItemFromCart,
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
