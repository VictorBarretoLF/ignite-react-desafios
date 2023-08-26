import { styled } from "styled-components";

export const CoffeeMenuContainer = styled.section`
    width: 100%;
    padding-bottom: 9.8rem;
`;

export const CoffeeList = styled.div`
    width: 100%;

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
    column-gap: 2rem;
    row-gap: 2.5rem;

    margin-top: 3.5rem;
`;
