import SectionHeaderWithIcon from "../../../../components/SectionHeaderWithIcon";
import { Icons } from "../../../../components/icons";
import { PaymentOptionContainer, PaymentOptionsContainer } from "./styles";

const paymentOptionsData = {
    credit: {
        label: "Cartão de crédito",
        icon: Icons.creditCard,
    },
    debit: {
        label: "Cartão de débito",
        icon: Icons.bank,
    },
    money: {
        label: "Dinheiro",
        icon: Icons.money,
    },
};

type PaymentOptionKeys = keyof typeof paymentOptionsData;

export default function PaymentOptions() {
    return (
        <PaymentOptionsContainer>
            <SectionHeaderWithIcon
                icon="currencyDollar"
                iconColor="brand-purple"
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {Object.keys(paymentOptionsData).map((key) => {
                    const option = paymentOptionsData[key as PaymentOptionKeys];
                    const Icon = option.icon;
                    return (
                        <PaymentOptionContainer key={key}>
                            <input
                                type="radio"
                                id={key}
                                name="paymentMethod"
                                value={key}
                                onClick={(e) => console.log(e.currentTarget.value)}
                            />
                            <label htmlFor={key}>
                                <Icon />
                                <span>{option.label}</span>
                            </label>
                        </PaymentOptionContainer>
                    );
                })}
            </div>
        </PaymentOptionsContainer>
    );
}
