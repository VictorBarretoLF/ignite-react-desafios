import { FormProvider } from "react-hook-form";
import { Heading } from "../../components/typographt";
import ProfileAddress from "./components/ProfileAddress";
import {
    CheckoutContainer,
    AddressAndPaymentOptionsContainer,
    LeftHeader,
    CoffeeListContainer,
} from "./styles";
import { useConfirmOrder } from "../../hooks/useConfirmOrder";
import PaymentOptions from "./components/PaymentOptions";
import SelectedCoffees from "./components/SelectedCoffees";

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

                    <PaymentOptions />
                </AddressAndPaymentOptionsContainer>

                <CoffeeListContainer>
                    <LeftHeader>
                        <Heading size="xs" weight="700" color="subtitle">
                            Cafés
                        </Heading>
                    </LeftHeader>

                    <SelectedCoffees />
                </CoffeeListContainer>
            </CheckoutContainer>
        </FormProvider>
    );
}
