import { MapPin, ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

export const Icons = {
    cart: ShoppingCart,
    mapPin: MapPin,
    package: Package,
    timer: Timer,
    coffee: Coffee,
};

export type IconTypes = keyof typeof Icons;
