import { styled } from "styled-components";

export const PaymentOptionsContainer = styled.div`
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["base-card"]};

    margin-top: 0.75rem;
    padding: 2.5rem;

    /* display: flex;
    flex-direction: column;
    gap: 2rem; */
`;

export const PaymentOptionContainer = styled.div`
    input {
        visibility: hidden;
        appearance: none;
        display: none;
    }

    label {
        width: 11.1875rem;
        padding: 1rem;
        background: ${({ theme }) => theme.colors["base-button"]};
        color: ${({ theme }) => theme.colors["base-text"]};

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.75rem;

        font-size: 0.75rem;
        text-transform: uppercase;

        border-radius: 6px;
        border: 1px solid ${({ theme }) => theme.colors["base-button"]};

        &:hover {
            background-color: ${({ theme }) => theme.colors["base-hover"]};
        }

        cursor: pointer;
    }

    svg {
        color: ${({ theme }) => theme.colors["brand-purple"]};
        width: 1rem;
        height: 1rem;
    }

    input:checked + label {
        background: ${({ theme }) => theme.colors["brand-purple-light"]};
        border-color: ${({ theme }) => theme.colors["brand-purple"]};

        &:hover {
            background: ${({ theme }) => theme.colors["brand-purple-light"]};
        }
    }
`;

export const ErrorText = styled.span`
    color: ${({ theme }) => theme.colors["base-error"]};
    font-size: 0.75rem;
`;
