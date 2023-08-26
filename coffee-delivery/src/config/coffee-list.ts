import Americano from "../assets/coffees/Type=Americano.svg";
import CefeGelado from "../assets/coffees/Type=Café Gelado.svg";
import ExpressoCremoso from "../assets/coffees/Type=Expresso Cremoso.svg";
import Expresso from "../assets/coffees/Type=Expresso.svg";
import Capuccino from "../assets/coffees/Type=Capuccino.svg";
import Arabe from "../assets/coffees/Type=Árabe.svg";
import ChocolateQuente from "../assets/coffees/Type=Chocolate Quente.svg";
import Cubano from "../assets/coffees/Type=Cubano.svg";
import Havaiano from "../assets/coffees/Type=Havaiano.svg";
import Irlandes from "../assets/coffees/Type=Irlandês.svg";
import Latte from "../assets/coffees/Type=Latte.svg";
import Macchiato from "../assets/coffees/Type=Macchiato.svg";
import Mochaccino from "../assets/coffees/Type=Mochaccino.svg";
import CafeComLeite from "../assets/coffees/Type=Café com Leite.svg";

export const coffeeList = [
    {
        id: 1,
        tags: ["tradicional"],
        name: "Expresso Tradicional",
        description: "O tradicional café feito com água quente e grãos moídos",
        svg: Expresso,
        price: 9.9,
    },
    {
        id: 2,
        tags: ["tradicional"],
        name: "Expresso Americano",
        description: "Expresso diluído, menos intenso que o tradicional",
        svg: Americano,
        price: 9.9,
    },
    {
        id: 3,
        tags: ["tradicional"],
        name: "Expresso Cremoso",
        description: "Café expresso tradicional com espuma cremosa",
        svg: ExpressoCremoso,
        price: 9.9,
    },
    {
        id: 4,
        tags: ["tradicional", "gelado"],
        name: "Expresso Gelado",
        description: "Bebida preparada com café expresso e cubos de gelo",
        svg: CefeGelado,
        price: 9.9,
    },
    {
        id: 5,
        tags: ["tradicional", "com leite"],
        name: "Café com Leite",
        description: "Meio a meio de expresso tradicional com leite vaporizado",
        svg: CafeComLeite,
        price: 9.9,
    },
    {
        id: 6,
        tags: ["tradicional", "com leite"],
        name: "Latte",
        description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
        svg: Latte,
        price: 9.9,
    },
    {
        id: 7,
        tags: ["tradicional", "com leite"],
        name: "Capuccino",
        description: "Bebida com canela feita de doses iguais de café, leite e espuma",
        svg: Capuccino,
        price: 9.9,
    },
    {
        id: 8,
        tags: ["tradicional", "com leite"],
        name: "Macchiato",
        description: "Café expresso misturado com um pouco de leite quente e espuma",
        svg: Macchiato,
        price: 9.9,
    },
    {
        id: 9,
        tags: ["tradicional", "com leite"],
        name: "Mocaccino",
        description: "Café expresso com calda de chocolate, pouco leite e espuma",
        svg: Mochaccino,
        price: 9.9,
    },
    {
        id: 10,
        tags: ["especial", "com leite"],
        name: "Chocolate Quente",
        description: "Bebida feita com chocolate dissolvido no leite quente e café",
        svg: ChocolateQuente,
        price: 9.9,
    },
    {
        id: 11,
        tags: ["especial", "alcoólico", "gelado"],
        name: "Cubano",
        description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
        svg: Cubano,
        price: 9.9,
    },
    {
        id: 12,
        tags: ["especial"],
        name: "Havaiano",
        description: "Bebida adocicada preparada com café e leite de coco",
        svg: Havaiano,
        price: 9.9,
    },
    {
        id: 13,
        tags: ["especial"],
        name: "Árabe",
        description: "Bebida preparada com grãos de café árabe e especiarias",
        svg: Arabe,
        price: 9.9,
    },
    {
        id: 14,
        tags: ["especial", "alcoólico"],
        name: "Irlandês",
        description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
        svg: Irlandes,
        price: 9.9,
    },
];
