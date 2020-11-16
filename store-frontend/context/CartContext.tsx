import { createContext, useState, useEffect } from 'react'
import { Product } from '../types/type'
import { useLocalStorage } from '../hooks/useLocalStorage'



export const CartContext = createContext({});


export const CartProvider: React.FC = ({ children }) => {
    const [storedProducts, setStoredProducts] = useLocalStorage('products', []);
    const [cartItems, setCartItems] = useState<any>(storedProducts);



    useEffect(() => {
        setStoredProducts(cartItems)
    }, [cartItems]);



    const addItemToCart = (product: Product) => setCartItems((prev) => Array.from(new Set([...prev, product])));
    const removeItemFromCart = (id: number) => setCartItems(cartItems.filter((item) => item.id !== id))


    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    )

}