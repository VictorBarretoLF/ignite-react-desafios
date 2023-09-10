import CoffeeCard from "../CoffeeCard";
import { SelectedCoffeesContainer } from "./styles";

export default function SelectedCoffees() {
    return (
        <SelectedCoffeesContainer>
            <CoffeeCard />
            <CoffeeCard />
        </SelectedCoffeesContainer>
    );
}
