import { FormProvider } from "react-hook-form";
import { Heading } from "../../components/Typographt";
import ProfileAddress from "./components/ProfileAddress";
import {
    CheckoutContainer,
    AddressAndPaymentOptionsContainer,
    LeftHeader,
    CoffeeListContainer,
} from "./styles";
import { useConfirmOrder } from "../../hooks/useConfirmOrder";

export default function Checkout() {
    const confirmOrderForm = useConfirmOrder();

    return (
        <FormProvider {...confirmOrderForm}>
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
        </FormProvider>
    );
}
