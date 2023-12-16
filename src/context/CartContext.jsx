import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(initialCart);

    const addCart = (item, stock) => {
        const itemAdd = { ...item, stock };

        const newCart = [...cart];
        const inTheCart = newCart.find((products) => products.id === itemAdd.id);

        if (inTheCart) {
            inTheCart.stock += stock;
        } else {
            newCart.push(itemAdd);
        }
        setCart(newCart);
    }

    const stockInCart = () => {
        return cart.reduce((acc, prod) => acc + prod.stock, 0);
    }

    const totalPrice = () => {
        return cart.reduce((acc, prod) => acc + prod.price * prod.stock, 0);
    }

    const cartEmpty = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])
   

    return (
         <CartContext.Provider value={{ 
            cart, 
            addCart, 
            stockInCart, 
            totalPrice, 
            cartEmpty 
        }}>
           {children}
         </CartContext.Provider>
    )
}