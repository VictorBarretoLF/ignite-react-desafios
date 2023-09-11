import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { Coffee } from "../types";

interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addCoffeeToCart(coffee: CartItem) {
        const index = cartItems.findIndex((c) => c.id === coffee.id);
        const updatedCartItems = [...cartItems];

        if (index < 0) {
            updatedCartItems.push(coffee);
            setCartItems(updatedCartItems);
        } else {
            const updatedCartItem = updatedCartItems[index];
            updatedCartItem.quantity += coffee.quantity;
            updatedCartItems[index] = updatedCartItem;
            setCartItems(updatedCartItems);
        }
    }

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addCoffeeToCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
