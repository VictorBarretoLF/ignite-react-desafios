import { QuantityInput } from "../../../../components/QuantityInput";
import { Icons } from "../../../../components/icons";
import { Paragraph } from "../../../../components/typographt";
import { CartItem } from "../../../../contexts/CartContext";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../lib/utils";
import { ActionsContainer, CoffeeCardContainer, RemoveButton } from "./styles";

type CoffeeCartCardProps = {
    coffee: CartItem;
};

export default function CoffeeCard({ coffee }: CoffeeCartCardProps) {
    const { removeCoffeeFromCart } = useCart();

    function handleIncrease() {
        console.log("increase");
    }

    function handleDecrease() {
        console.log("decrease");
    }

    function handleRemove() {
        removeCoffeeFromCart(coffee.id);
    }

    const coffeeTotal = coffee.price * coffee.quantity;
    const formattedPrice = formatMoney(coffeeTotal);

    return (
        <CoffeeCardContainer>
            <div>
                <img src={coffee.svg} alt={coffee.name} />

                <div>
                    <Paragraph color="subtitle">{coffee.name}</Paragraph>

                    <ActionsContainer>
                        <QuantityInput
                            onDecrease={handleDecrease}
                            onIncrease={handleIncrease}
                            quantity={coffee.quantity}
                        />
                        <RemoveButton type="button" onClick={handleRemove}>
                            <Icons.trash size={16} />
                            <span>REMOVER</span>
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </CoffeeCardContainer>
    );
}
