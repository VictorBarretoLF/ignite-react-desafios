import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmOrderFormData } from "../../hooks/useConfirmOrder";
import { useEffect } from "react";
import ManRidingMotorCycle from "../../assets/man-riding-motorcycle.svg";
import { CheckoutImageContainer, CheckoutSuccessContainer, CheckoutSuccessStatus } from "./styles";
import { Heading, Paragraph } from "../../components/typographt";

export default function CheckoutSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as ConfirmOrderFormData;

    // useEffect(() => {
    //     if (!state) {
    //         navigate("/");
    //     }
    // }, []);

    return (
        <CheckoutSuccessContainer>
            <CheckoutSuccessStatus>
                <Heading color="brand-yellow-dark" size="l">
                    Uhu! Pedido confirmado
                </Heading>
                <Paragraph size="l" color="subtitle">
                    Agora é só aguardar que logo o café chegará até você
                </Paragraph>
            </CheckoutSuccessStatus>
            <CheckoutImageContainer>
                <img src={ManRidingMotorCycle} alt="" />
            </CheckoutImageContainer>
        </CheckoutSuccessContainer>
    );
}
