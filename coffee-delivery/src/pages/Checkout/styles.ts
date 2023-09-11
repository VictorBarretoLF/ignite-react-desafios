import { styled } from "styled-components";

export const CheckoutContainer = styled.form`
    width: 100%;
    margin-top: 2.5rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
`;

export const ConfirmOrderSection = styled.section`
    border-radius: 6px 44px 6px 44px;
    background: ${({ theme }) => theme.colors["base-card"]};

    padding: 2.5rem;
`;

export const AddressAndPaymentOptionsContainer = styled.div`
    width: 100%;
    max-width: 40rem;
`;

export const LeftHeader = styled.header`
    margin-bottom: 1rem;
`;

export const CoffeeListContainer = styled.div`
    width: 100%;
    max-width: 28rem;
`;
