import SectionHeaderWithIcon from "../../../../components/SectionHeaderWithIcon";
import { Icons } from "../../../../components/icons";
import { OptionContainer, PaymentOptionsContainer, PaymentSelectOptionContainer } from "./styles";

export default function PaymentOptions() {
    return (
        <PaymentOptionsContainer>
            <SectionHeaderWithIcon
                icon="currencyDollar"
                iconColor="brand-purple"
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <PaymentSelectOptionContainer>
                <OptionContainer>
                    <Icons.cart />
                    <label>Cartão de crédito</label>
                </OptionContainer>
                <OptionContainer>
                    <Icons.cart />
                    <label>Cartão de crédito</label>
                </OptionContainer>
                <OptionContainer>
                    <Icons.cart />
                    <label>Cartão de crédito</label>
                </OptionContainer>
            </PaymentSelectOptionContainer>
        </PaymentOptionsContainer>
    );
}
