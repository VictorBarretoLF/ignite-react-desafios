import { styled } from "styled-components";

export const SectionHeaderWithIconContainer = styled.header`
    display: flex;
    gap: 0.5rem;

    svg {
        width: 1.375rem;
        height: 1.375rem;

        color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;
