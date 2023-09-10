import { Icons } from "../icons";
import { QuantityInputContainer, IconWrapper } from "./styles";

interface QuantityInputProps {
    size?: "medium" | "small";
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function QuantityInput({
    onIncrease,
    onDecrease,
    quantity,
    size = "medium",
}: QuantityInputProps) {
    return (
        <QuantityInputContainer size={size}>
            <IconWrapper onClick={onDecrease} disabled={quantity <= 1}>
                <Icons.minus size={14} weight="fill" />
            </IconWrapper>
            <span>{quantity}</span>
            <IconWrapper onClick={onIncrease} disabled={quantity >= 9}>
                <Icons.plus size={14} weight="fill" />
            </IconWrapper>
        </QuantityInputContainer>
    );
}
