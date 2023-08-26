import Americano from "../assets/coffees/Type=Americano.svg";
import CefeGelado from "../assets/coffees/Type=Café Gelado.svg";

export const coffeeList = [
    {
        id: crypto.randomUUID(),
        tags: ["tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        svg: Americano,
        price: 9.9,
    },
    {
        id: crypto.randomUUID(),
        tags: ["tradicional", "gelado"],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        photo: CefeGelado,
        price: 9.9,
    },
];
