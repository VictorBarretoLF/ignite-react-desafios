import { styled } from "styled-components";

export const InfoWithIconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.75rem;
`;

export interface IconsContainerProps {
    rounded: "default" | "full";
}

export const IconContainer = styled.div<IconsContainerProps>`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;
`;
