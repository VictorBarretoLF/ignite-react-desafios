import { Heading } from "../../../../components/Typographt";
import CoffeeCard from "../CoffeeCard";
import { CoffeeMenuContainer } from "./styles";

function CoffeeMenu() {
    return (
        <CoffeeMenuContainer>
            <Heading>Nossos cafés</Heading>

            <CoffeeCard />
        </CoffeeMenuContainer>
    );
}

export default CoffeeMenu;
