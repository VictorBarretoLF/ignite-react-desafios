import { styled } from "styled-components";

export const PaymentOptionsContainer = styled.div`
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["base-card"]};

    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
