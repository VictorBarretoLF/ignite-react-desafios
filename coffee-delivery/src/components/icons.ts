import {
    MapPin,
    ShoppingCart,
    Package,
    Timer,
    Coffee,
    Minus,
    Plus,
    MapPinLine,
    CurrencyDollar,
    Money,
    CreditCard,
    Bank,
    Trash,
} from "phosphor-react";

export const Icons = {
    cart: ShoppingCart,
    mapPin: MapPin,
    mapPinLine: MapPinLine,
    package: Package,
    timer: Timer,
    coffee: Coffee,
    minus: Minus,
    plus: Plus,
    currencyDollar: CurrencyDollar,
    money: Money,
    creditCard: CreditCard,
    bank: Bank,
    trash: Trash,
};

export type IconTypes = keyof typeof Icons;
