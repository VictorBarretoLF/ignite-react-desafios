import styled from "styled-components";

export const CheckoutSuccessContainer = styled.main`
    display: flex;
    justify-content: space-between;

    margin-top: 5rem;
`;

export const CheckoutSuccessStatus = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
`;

export const CheckoutImageContainer = styled.div``;

export const OrderInfoContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    padding: 2.5rem;

    background: white;
    min-width: 32rem;

    border-radius: 6px 36px 6px 36px;
    border: 1px solid transparent;
    /*
        caso queira contruir uma borda com um gradiente linear
        https://codyhouse.co/nuggets/css-gradient-borders 
    */
    background:
        linear-gradient(
                ${({ theme }) => theme.colors["base-background"]},
                ${({ theme }) => theme.colors["base-background"]}
            )
            padding-box,
        linear-gradient(to bottom right, #dbac2c, #8047f8) border-box;
`;
