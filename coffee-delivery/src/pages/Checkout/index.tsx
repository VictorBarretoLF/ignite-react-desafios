import { FormProvider } from "react-hook-form";
import { Heading } from "../../components/typographt";
import ProfileAddress from "./components/ProfileAddress";
import {
    CheckoutContainer,
    AddressAndPaymentOptionsContainer,
    LeftHeader,
    CoffeeListContainer,
    ConfirmOrderSection,
} from "./styles";
import { ConfirmOrderFormData, useConfirmOrder } from "../../hooks/useConfirmOrder";
import PaymentOptions from "./components/PaymentOptions";
import SelectedCoffees from "./components/SelectedCoffees";
import PurchaseSummary from "./components/PurchaseSummary";

export default function Checkout() {
    const confirmOrderForm = useConfirmOrder();
    const {
        handleSubmit,
        formState: { errors },
    } = confirmOrderForm;
    console.log(errors);
    function handleConfirmOrder(data: ConfirmOrderFormData) {
        console.log(data);
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
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

                    <ConfirmOrderSection>
                        <SelectedCoffees />
                        <PurchaseSummary />
                    </ConfirmOrderSection>
                </CoffeeListContainer>
            </CheckoutContainer>
        </FormProvider>
    );
}
