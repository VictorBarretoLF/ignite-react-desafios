import { ReactNode, createContext, useEffect, useState } from "react";
import { Coffee } from "../types";
import { produce } from "immer";
import { COFFEE_SHOP_ITEMS_STORAGE_KEY } from "../lib/constants";

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    totalItemsInCart: number;
    totalPriceInCart: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    removeCoffeeFromCart: (coffeeId: number) => void;
    increaseCoffeeQuantity: (coffeeId: number) => void;
    decreaseCoffeeQuantity: (coffeeId: number) => void;
    clearCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
    children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_SHOP_ITEMS_STORAGE_KEY);
        if (storedCartItems) {
            return JSON.parse(storedCartItems);
        }
        return [];
    });

    const totalItemsInCart = cartItems.length;

    const totalPriceInCart = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );

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

    const increaseCoffeeQuantity = (coffeeId: number) => {
        setCartItems(
            produce((draft) => {
                const index = draft.findIndex((item) => item.id === coffeeId);
                if (index !== -1) {
                    draft[index].quantity += 1;
                }
            }),
        );
    };

    const decreaseCoffeeQuantity = (coffeeId: number) => {
        setCartItems(
            produce((draft) => {
                const index = draft.findIndex((item) => item.id === coffeeId);
                if (index !== -1 && draft[index].quantity > 1) {
                    draft[index].quantity -= 1;
                } else if (index !== -1 && draft[index].quantity === 1) {
                    draft.splice(index, 1);
                }
            }),
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    useEffect(() => {
        localStorage.setItem(COFFEE_SHOP_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addCoffeeToCart,
                removeCoffeeFromCart,
                increaseCoffeeQuantity,
                decreaseCoffeeQuantity,
                totalItemsInCart,
                totalPriceInCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
