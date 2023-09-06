import { forwardRef, InputHTMLAttributes } from "react";
import {
    ErrorText,
    InputFieldContainer,
    RightText,
    StyledInput,
    StyledInputContainer,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    isInvalid?: boolean;
    error?: string;
    rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ error, rightText, isInvalid, className, ...props }, ref) => {
        return (
            <InputFieldContainer>
                <StyledInputContainer isInvalid={isInvalid}>
                    <StyledInput type="text" ref={ref} {...props} />
                    {!!rightText && <RightText>{rightText}</RightText>}
                </StyledInputContainer>
                {!!error && <ErrorText>{error}</ErrorText>}
            </InputFieldContainer>
        );
    },
);
