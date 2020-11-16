import { createContext, useState } from 'react'
import { Product } from '../types/type'

export const CartContext = createContext({});
// PUT http://localhost:1337/restaurants/1

export const CartProvider: React.FC = ({ children }) => {
    const [cartItems, setCartItems] = useState<any>([]);

    const addItemToCart = (product: Product) => setCartItems((prev) => Array.from(new Set([...prev, product])));
    const removeItemFromCart = (id: number) => setCartItems(cartItems.filter((item) => item.id !== id))


    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )

}