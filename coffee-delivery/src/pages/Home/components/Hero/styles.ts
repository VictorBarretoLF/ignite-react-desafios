import { styled } from "styled-components";

export const HeroContainer = styled.section`
    width: 100%;
    min-height: 34rem;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    gap: 3.5rem;
`;

export const HeaderContainer = styled.section`
    margin-bottom: 4.125rem;
    max-width: 36.75rem;
`;

export const AdvantagesContainer = styled.div`
    width: 100%;
    max-width: 35rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1.25rem;
    column-gap: 2.5rem;
`;
