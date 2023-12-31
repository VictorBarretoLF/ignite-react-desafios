import styled from "styled-components";

export const PurchaseSummaryContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const ConfirmButton = styled.button`
    padding: 0.75rem 2.8rem;

    color: ${({ theme }) => theme.colors["base-white"]};
    background: ${({ theme }) => theme.colors["brand-yellow"]};

    font-weight: 700;
    font-size: ${({ theme }) => theme.textSizes["components-button-g"]};

    border: none;
    border-radius: 6px;
    margin-top: 0.7rem;
    text-transform: uppercase;
    transition: 0.4s;
    line-height: 1.3rem;

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }

    &:not(:disabled):hover {
        background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }

    cursor: pointer;
`;
