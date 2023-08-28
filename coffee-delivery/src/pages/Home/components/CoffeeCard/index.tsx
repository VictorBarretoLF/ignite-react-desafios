import Coffee from "../../../../assets/coffees/Type=Americano.svg";
import { Heading, Paragraph } from "../../../../components/Typographt";
import { Icons } from "../../../../components/icons";
import { formatMoney } from "../../../../lib/utils";
import { BuyButton, CoffeeCardContainer, CoffeeTags, PriceContainer } from "./styles";

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
    const formattedPrice = formatMoney(coffee.price);

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

            <footer>
                <PriceContainer>
                    <Paragraph size="s">R$</Paragraph>
                    <Heading size="m" color="text" as="strong">
                        {formattedPrice}
                    </Heading>
                </PriceContainer>

                <div>
                    <BuyButton type="button">
                        <Icons.cart weight="fill" size={22} />
                    </BuyButton>
                </div>
            </footer>
        </CoffeeCardContainer>
    );
}
