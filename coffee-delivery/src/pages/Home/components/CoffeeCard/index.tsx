import Coffee from "../../../../assets/coffees/Type=Americano.svg";
import { CoffeeCardContainer, CoffeeTags } from "./styles";

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    svg: string;
    price: number;
}

interface CoffeeCardProps {
    coffee: Coffee;
}

export default function CoffeeCard({ coffee }: CoffeeCardProps) {
    return (
        <CoffeeCardContainer>
            <img src={coffee.svg} alt={coffee.name} />

            <CoffeeTags>
                {coffee.tags.map((tag, index) => (
                    <span key={`${coffee.id}${index}`}>{tag}</span>
                ))}
            </CoffeeTags>
        </CoffeeCardContainer>
    );
}
