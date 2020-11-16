import React, { createContext, useState } from 'react'
import { Product } from '../types/type'

export const CartContext = createContext({});

const CartProvider = ({ children, data }) => {
    const [cartItems, setCartItems] = useState(data);

    const addItemToCart = (product: Product) => setCartItems([]);
    const removeItemFromCart = (id: number) => console.log('usuń z koszyka');

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;