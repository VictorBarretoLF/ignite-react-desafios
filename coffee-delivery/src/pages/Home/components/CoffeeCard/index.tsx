import { useMemo, useState } from "react";
import Coffee from "../../../../assets/coffees/Type=Americano.svg";
import { Heading, Paragraph } from "../../../../components/typographt";
import { Icons } from "../../../../components/icons";
import { formatMoney } from "../../../../lib/utils";
import {
    BuyButton,
    CardFooter,
    CoffeeCardContainer,
    CoffeeTags,
    IconWrapper,
    PriceContainer,
    QuantityContainer,
} from "./styles";

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
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity((prevState) => Math.min(prevState + 1, 9));
    };

    const handleDecrease = () => {
        setQuantity((prevState) => Math.max(prevState - 1, 1));
    };

    const formattedPrice = useMemo(() => formatMoney(coffee.price), []);

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

            <CardFooter>
                <PriceContainer>
                    <Paragraph size="s">R$</Paragraph>
                    <Heading size="m" color="text" as="strong">
                        {formattedPrice}
                    </Heading>
                </PriceContainer>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                    <QuantityContainer>
                        <IconWrapper onClick={handleDecrease}>
                            <Icons.minus />
                        </IconWrapper>
                        <span>{quantity}</span>
                        <IconWrapper onClick={handleIncrease}>
                            <Icons.plus />
                        </IconWrapper>
                    </QuantityContainer>

                    <BuyButton type="button">
                        <Icons.cart weight="fill" size={22} />
                    </BuyButton>
                </div>
            </CardFooter>
        </CoffeeCardContainer>
    );
}
