import { styled } from "styled-components";

export const ProfileAdressContainer = styled.div`
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors["base-card"]};

    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const ProfileAddressHeader = styled.header`
    display: flex;
    gap: 0.5rem;

    svg {
        width: 1.375rem;
        height: 1.375rem;

        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;
