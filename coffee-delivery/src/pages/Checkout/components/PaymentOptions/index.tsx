import SectionHeaderWithIcon from "../../../../components/SectionHeaderWithIcon";
import { PaymentOptionsContainer } from "./styles";

export default function PaymentOptions() {
    return (
        <PaymentOptionsContainer>
            <SectionHeaderWithIcon
                icon="currencyDollar"
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />
        </PaymentOptionsContainer>
    );
}
