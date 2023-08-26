import Coffee from "../../../../assets/coffees/Type=Americano.svg";
import { CoffeeCardContainer, CoffeeTags } from "./styles";


export default function CoffeeCard() {
    return (
        <CoffeeCardContainer>
            <img src={Coffee} />

            <CoffeeTags>
                <span>teste</span>
                <span>teste</span>
            </CoffeeTags>
        </CoffeeCardContainer>
    );
}
