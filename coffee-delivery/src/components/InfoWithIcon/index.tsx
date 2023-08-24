import { IconTypes, Icons } from "../icons";
import { IconContainer, IconsContainerProps, InfoWithIconContainer } from "./styles";

type Props = {
    text?: string;
    icon: IconTypes;
} & IconsContainerProps;

export default function InfoWithIcon({ text, icon, $iconBackgroundColor }: Props) {
    const Icon = Icons[icon];
    return (
        <InfoWithIconContainer>
            <IconContainer $iconBackgroundColor={$iconBackgroundColor}>
                <Icon weight="fill" />
            </IconContainer>
            {!text ? null : <p>{text}</p>}
        </InfoWithIconContainer>
    );
}
