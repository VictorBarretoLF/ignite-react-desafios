import { Heading } from "../../components/Typographt";
import ProfileAddressAndCard from "./components/ProfileAddressAndCard";
import { CheckoutContainer, AddressAndPaymentOptionsContainer } from "./styles";

export default function Checkout() {
    return (
        <CheckoutContainer>
            <AddressAndPaymentOptionsContainer>
                <header>
                    <Heading size="xs" weight="700" color="subtitle">
                        Heading
                    </Heading>
                </header>
            </AddressAndPaymentOptionsContainer>

            <div style={{ width: "100%", maxWidth: "28rem" }}>
                <div>cafés</div>
            </div>
        </CheckoutContainer>
    );
}
