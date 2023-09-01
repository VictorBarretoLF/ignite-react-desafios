import { Heading } from "../../components/Typographt";
import ProfileAddress from "./components/ProfileAddress";
import {
    CheckoutContainer,
    AddressAndPaymentOptionsContainer,
    LeftHeader,
    CoffeeListContainer,
} from "./styles";

export default function Checkout() {
    return (
        <CheckoutContainer>
            <AddressAndPaymentOptionsContainer>
                <LeftHeader>
                    <Heading size="xs" weight="700" color="subtitle">
                        Complete seu pedido
                    </Heading>
                </LeftHeader>

                <ProfileAddress />
            </AddressAndPaymentOptionsContainer>

            <CoffeeListContainer>
                <div>cafés</div>
            </CoffeeListContainer>
        </CheckoutContainer>
    );
}
