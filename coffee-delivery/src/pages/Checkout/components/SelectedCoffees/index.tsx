import { useCart } from "../../../../hooks/useCart";
import CoffeeCard from "../CoffeeCard";
import { SelectedCoffeesContainer } from "./styles";

export default function SelectedCoffees() {
    const { cartItems } = useCart();

    return (
        <SelectedCoffeesContainer>
            {cartItems.map((item) => (
                <CoffeeCard key={item.id} coffee={item} />
            ))}
        </SelectedCoffeesContainer>
    );
}
