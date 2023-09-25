import { ReactNode, createContext, useCallback, useEffect, useState } from "react";
import { Coffee } from "../types";
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addCoffeeToCart: (coffee: CartItem) => void;
    removeCoffeeFromCart: (coffeeId: number) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addCoffeeToCart(coffee: CartItem) {
        setCartItems((prevCartItems) =>
            produce(prevCartItems, (draft) => {
                const index = draft.findIndex((c) => c.id === coffee.id);

                if (index < 0) {
                    draft.push(coffee);
                } else {
                    draft[index].quantity += coffee.quantity;
                }
            }),
        );
    }

    const removeCoffeeFromCart = (coffeeId: number) => {
        setCartItems(
            produce((draft) => {
                const index = draft.findIndex((item) => item.id === coffeeId);
                if (index !== -1) {
                    draft.splice(index, 1);
                }
            }),
        );
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addCoffeeToCart,
                removeCoffeeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}