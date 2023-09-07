import { styled } from "styled-components";

export const AddressFormContainer = styled.div`
    display: grid;
    width: 100%;

    column-gap: 0.75rem;
    row-gap: 1rem;

    @media (min-width: 576px) {
        grid-template-columns: minmax(12.5rem, 1fr) minmax(17.25rem, 1fr) minmax(3.75rem, 1fr);

        .cep {
            grid-column: span 1;
        }

        .street {
            grid-column: span 3;
        }

        .complement {
            grid-column: span 2;
        }
    }
`;
