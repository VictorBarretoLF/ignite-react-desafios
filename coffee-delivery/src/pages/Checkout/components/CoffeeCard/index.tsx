import { QuantityInput } from "../../../../components/QuantityInput";
import { Icons } from "../../../../components/icons";
import { Paragraph } from "../../../../components/typographt";
import { coffeeList } from "../../../../config/coffee-list";
import { ActionsContainer, CoffeeCardContainer, RemoveButton } from "./styles";

const coffeeData = coffeeList[0];

export default function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <div>
                <img src={coffeeData.svg} alt={coffeeData.name} />

                <div>
                    <Paragraph color="subtitle">{coffeeData.name}</Paragraph>

                    <ActionsContainer>
                        <QuantityInput
                            onDecrease={() => console.log("decrease")}
                            onIncrease={() => console.log("increase")}
                            quantity={1}
                        />
                        <RemoveButton type="button">
                            <Icons.trash size={16} />
                            <span>REMOVER</span>
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>

            <p>R$ {coffeeData.price}</p>
        </CoffeeCardContainer>
    );
}
