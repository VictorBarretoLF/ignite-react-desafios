import { Heading } from "../../../../components/typography";
import { coffeeList } from "../../../../config/coffee-list";
import CoffeeCard from "../CoffeeCard";
import { CoffeeList, CoffeeMenuContainer } from "./styles";

function CoffeeMenu() {
    return (
        <CoffeeMenuContainer>
            <Heading>Nossos cafés</Heading>

            <CoffeeList>
                {coffeeList.map((singleCoffee) => {
                    return <CoffeeCard key={singleCoffee.id} coffee={singleCoffee} />;
                })}
            </CoffeeList>
        </CoffeeMenuContainer>
    );
}

export default CoffeeMenu;
