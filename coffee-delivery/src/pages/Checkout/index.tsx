import { FormProvider } from "react-hook-form";
import { Heading } from "../../components/typography";
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
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export default function Checkout() {
    const confirmOrderForm = useConfirmOrder();
    const { handleSubmit } = confirmOrderForm;
    const navigate = useNavigate();
    const { clearCart } = useCart();

    function handleConfirmOrder(data: ConfirmOrderFormData) {
        navigate("/checkout-success", {
            state: data,
        });
        clearCart();
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
                <AddressAndPaymentOptionsContainer>
                    <LeftHeader>
                        <Heading size="xs" weight="700" color="base-subtitle">
                            Complete seu pedido
                        </Heading>
                    </LeftHeader>

                    <ProfileAddress />

                    <PaymentOptions />
                </AddressAndPaymentOptionsContainer>

                <CoffeeListContainer>
                    <LeftHeader>
                        <Heading size="xs" weight="700" color="base-subtitle">
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
