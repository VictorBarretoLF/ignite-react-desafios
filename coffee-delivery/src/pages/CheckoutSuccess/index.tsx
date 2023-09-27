import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmOrderFormData } from "../../hooks/useConfirmOrder";
import { useEffect } from "react";
import ManRidingMotorCycle from "../../assets/man-riding-motorcycle.svg";
import {
    CheckoutImageContainer,
    CheckoutSuccessContainer,
    CheckoutSuccessStatus,
    OrderInfoContainer,
} from "./styles";
import { Heading, Paragraph } from "../../components/typography";
import InfoWithIcon from "../../components/InfoWithIcon";
import { paymentOptionsData } from "../Checkout/components/PaymentOptions";

export default function CheckoutSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as ConfirmOrderFormData;

    useEffect(() => {
        if (!state) {
            navigate("/");
        }
    }, []);

    return (
        <CheckoutSuccessContainer>
            <CheckoutSuccessStatus>
                <header>
                    <Heading color="brand-yellow-dark" size="l">
                        Uhu! Pedido confirmado
                    </Heading>
                    <Paragraph size="l" color="subtitle">
                        Agora é só aguardar que logo o café chegará até você
                    </Paragraph>
                </header>

                <OrderInfoContainer>
                    <InfoWithIcon
                        $iconBackgroundColor="brand-purple"
                        text={
                            <>
                                <p>
                                    Entrega em <strong>{state.street}</strong>, {state.number}
                                </p>
                                <p>
                                    {state.neighborhood} - {state.city}, {state.uf}
                                </p>
                            </>
                        }
                    />

                    <InfoWithIcon
                        $iconBackgroundColor="brand-yellow"
                        text={
                            <>
                                <p>Previsão de entrega</p>
                                <strong>20 min - 30 min</strong>
                            </>
                        }
                    />

                    <InfoWithIcon
                        $iconBackgroundColor="brand-yellow-dark"
                        text={
                            <>
                                <p>Pagamento na entrega</p>
                                <strong>{paymentOptionsData[state.paymentMethod].label}</strong>
                            </>
                        }
                    />
                </OrderInfoContainer>
            </CheckoutSuccessStatus>
            <CheckoutImageContainer>
                <img src={ManRidingMotorCycle} alt="" />
            </CheckoutImageContainer>
        </CheckoutSuccessContainer>
    );
}
