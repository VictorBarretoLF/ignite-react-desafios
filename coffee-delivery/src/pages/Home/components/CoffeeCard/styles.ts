import { styled } from "styled-components";

export const CoffeeCardContainer = styled.div`
    width: 100%;
    max-width: 16rem;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;

    background: ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px 36px 6px 36px;

    padding: 0 1.25rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -1.25rem;
    }
`;

export const CoffeeTags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    margin-top: 0.75rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;

    span {
        background: ${({ theme }) => theme.colors["brand-yellow-light"]};
        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
        font-size: ${({ theme }) => theme.textSizes["components-tag"]};
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        font-weight: 700;
    }
`;

export const PriceContainer = styled.div`
    display: flex;
    align-items: baseline;
    gap: 0.25rem;
`;
