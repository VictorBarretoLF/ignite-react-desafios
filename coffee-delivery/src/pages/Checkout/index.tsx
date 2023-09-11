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
import { useConfirmOrder } from "../../hooks/useConfirmOrder";
import PaymentOptions from "./components/PaymentOptions";
import SelectedCoffees from "./components/SelectedCoffees";
import PurchaseSummary from "./components/PurchaseSummary";

export default function Checkout() {
    const confirmOrderForm = useConfirmOrder();
    // TODO: SEPARAR MELHOR OS COMPONENTES DE OPÇÕES DE PAGAMENTO E DA LISTA DE CAFÉS E CONFIRMAÇÃO DE PAGANENTO
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

                    <ConfirmOrderSection>
                        <SelectedCoffees />
                        <PurchaseSummary />
                    </ConfirmOrderSection>
                </CoffeeListContainer>
            </CheckoutContainer>
        </FormProvider>
    );
}
