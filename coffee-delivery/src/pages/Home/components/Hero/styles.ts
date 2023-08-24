import { styled } from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    height: 34rem;
    border: 1px solid red;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AdvantagesContainer = styled.div`
    width: 100%;
    max-width: 35rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
`;
