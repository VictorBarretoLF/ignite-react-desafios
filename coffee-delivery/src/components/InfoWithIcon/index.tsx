import { ReactNode } from "react";
import { IconTypes, Icons } from "../icons";
import { IconContainer, IconsContainerProps, InfoWithIconContainer } from "./styles";

type Props = {
    text?: string | ReactNode;
    icon?: IconTypes;
    secondaryText?: string;
} & IconsContainerProps;

export default function InfoWithIcon({
    text,
    icon = "bank",
    $iconBackgroundColor = "brand-purple",
}: Props) {
    const Icon = Icons[icon];
    return (
        <InfoWithIconContainer>
            <IconContainer $iconBackgroundColor={$iconBackgroundColor}>
                <Icon weight="fill" />
            </IconContainer>
            <div>{typeof text === "string" ? <p>{text}</p> : text}</div>
        </InfoWithIconContainer>
    );
}
