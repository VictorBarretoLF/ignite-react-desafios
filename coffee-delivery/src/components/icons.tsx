import { MapPin, ShoppingCart } from "phosphor-react";

export const Icons = {
    cart: ShoppingCart,
    mapPin: MapPin,
};

export type IconTypes = keyof typeof Icons;
