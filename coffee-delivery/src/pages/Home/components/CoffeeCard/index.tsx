import Coffee from "../../../../assets/coffees/Type=Americano.svg";
import { Paragraph } from "../../../../components/Typographt";
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
                    <span key={coffee.id + index}>{tag}</span>
                ))}
            </CoffeeTags>

            <Paragraph color="subtitle" weight="700" size="l" style={{ marginBottom: "0.5rem" }}>
                {coffee.name}
            </Paragraph>
            <Paragraph color="label" size="s" style={{ marginBottom: "2rem" }}>
                {coffee.description}
            </Paragraph>
        </CoffeeCardContainer>
    );
}
