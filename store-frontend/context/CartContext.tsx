import react from 'react'
import { createContext, useState, useEffect } from 'react'
import { Product } from '../types/type'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const CartContext = createContext({});

export const CartProvider: React.FC = ({ children }) => {
    const [storedValue, setStoredValue] = useLocalStorage('products', []);
    const [cartItems, setCartItems] = useState(storedValue);

    useEffect(() => {
        setStoredValue(cartItems)
    }, [cartItems]);
    ;
    const addItemToCart = (product: Product) => setCartItems(Array.from(new Set([...storedValue, product])));
    const removeItemFromCart = (id: number) => console.log('usuń z koszyka');

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}