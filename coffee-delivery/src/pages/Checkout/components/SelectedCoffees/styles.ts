import styled from "styled-components";

export const SelectedCoffeesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    border-radius: 6px 44px 6px 44px;
    background: ${({ theme }) => theme.colors["base-card"]};

    padding: 2.5rem;
`;
