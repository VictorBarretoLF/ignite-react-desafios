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
