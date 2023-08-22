import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;

    background-color: ${({ theme }) => theme.colors["base-background"]};

    max-width: 70rem;
    margin: 0 auto;
`;
