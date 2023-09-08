import { styled } from "styled-components";

export const PaymentOptionsContainer = styled.div`
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["base-card"]};

    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const PaymentSelectOptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.75rem;

    @media (min-width: 576px) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
    font-size: 0.75rem;

    text-transform: uppercase;

    padding: 1rem;
    gap: 0.75rem;

    border: 1px solid ${({ theme }) => theme.colors["base-button"]};
    border-radius: 6px;
    transition: background-color 0.3s;

    svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
        width: 1rem;
        height: 1rem;
    }

    &:hover {
        background: ${({ theme }) => theme.colors["base-hover"]};
    }

    cursor: pointer;
`;
