import { styled } from "styled-components";

export interface IconsContainerProps {
    $iconBackgroundColor: string;
}

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export const IconContainer = styled.div<IconsContainerProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    background: ${({ $iconBackgroundColor }) =>
        $iconBackgroundColor}; // Note the $ prefix should stop a DOM error
    color: ${({ theme }) => theme.colors["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;
`;
