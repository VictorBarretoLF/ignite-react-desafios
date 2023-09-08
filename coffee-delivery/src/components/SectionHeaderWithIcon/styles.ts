import { styled } from "styled-components";

export const SectionHeaderWithIconContainer = styled.header`
    display: flex;
    gap: 0.5rem;

    svg {
        width: 1.375rem;
        height: 1.375rem;
    }

    div > p:first-child {
        color: ${({ theme }) => theme.colors["base-title"]};
    }

    div > p:last-child {
        color: ${({ theme }) => theme.colors["base-text"]};
    }
`;
