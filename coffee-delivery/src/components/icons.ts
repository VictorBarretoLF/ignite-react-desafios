import { MapPin, ShoppingCart, Package, Timer, Coffee, Minus, Plus } from "phosphor-react";

export const Icons = {
    cart: ShoppingCart,
    mapPin: MapPin,
    package: Package,
    timer: Timer,
    coffee: Coffee,
    minus: Minus,
    plus: Plus,
};

export type IconTypes = keyof typeof Icons;
