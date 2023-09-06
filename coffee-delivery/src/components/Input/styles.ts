import { styled } from "styled-components";

export const InputFieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`;

interface StyledInputContainerProps {
    isInvalid: boolean | undefined;
}

export const StyledInputContainer = styled.div<StyledInputContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 4px;

    border: 1px solid
        ${({ theme, isInvalid }) =>
            isInvalid ? theme.colors["base-error"] : theme.colors["base-button"]};

    background: ${({ theme }) => theme.colors["base-input"]};

    &:focus-within {
        border-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
    }
`;

export const StyledInput = styled.input`
    flex: 1;

    background: none;
    border: none;

    padding: 0.75rem;
    font-size: 0.75rem;

    color: ${({ theme }) => theme.colors["base-text"]};

    &::placeholder {
        color: ${({ theme }) => theme.colors["base-label"]};
    }
`;

export const ErrorText = styled.p`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors["base-error"]};
`;

export const RightText = styled.p`
    font-size: 0.75rem;
    margin-right: 0.75rem;
    font-style: italic;
    color: ${({ theme }) => theme.colors["base-label"]};
`;
