import { useFormContext } from "react-hook-form";
import SectionHeaderWithIcon from "../../../../components/SectionHeaderWithIcon";
import { Icons } from "../../../../components/icons";
import { ErrorText, PaymentOptionContainer, PaymentOptionsContainer } from "./styles";
import { OrderData } from "../../../../hooks/useConfirmOrder";

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
    const {
        register,
        formState: { errors },
    } = useFormContext<OrderData>();

    return (
        <PaymentOptionsContainer>
            <SectionHeaderWithIcon
                icon="currencyDollar"
                iconColor="brand-purple"
                title="Pagamento"
                subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            />

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "2rem" }}>
                {Object.keys(paymentOptionsData).map((key) => {
                    const option = paymentOptionsData[key as PaymentOptionKeys];
                    const Icon = option.icon;
                    return (
                        <PaymentOptionContainer key={key}>
                            <input
                                type="radio"
                                id={key}
                                value={key}
                                {...register("paymentMethod")}
                            />
                            <label htmlFor={key}>
                                <Icon />
                                <span>{option.label}</span>
                            </label>
                        </PaymentOptionContainer>
                    );
                })}
            </div>

            {errors.paymentMethod && <ErrorText>{errors.paymentMethod.message}</ErrorText>}
        </PaymentOptionsContainer>
    );
}
