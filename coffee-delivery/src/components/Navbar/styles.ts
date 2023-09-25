import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
    height: 6.5rem;

    position: sticky;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const LinksContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 0.75rem;
`;

export const CartButton = styled.button`
    background-color: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    padding: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 6px;

    cursor: pointer;

    position: relative;

    span {
        position: absolute;

        background-color: red;

        top: 0;
        right: 0;

        transform: translate(50%, -50%);

        width: 1.25rem;
        height: 1.25rem;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
        color: ${({ theme }) => theme.colors["base-white"]};

        font-size: 0.75rem;
        font-weight: 700;
    }
`;

export const RegionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.25rem;
    padding: 0.5rem;

    background-color: ${({ theme }) => theme.colors["brand-purple-light"]};
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};

    border-radius: 6px;

    font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};
`;
