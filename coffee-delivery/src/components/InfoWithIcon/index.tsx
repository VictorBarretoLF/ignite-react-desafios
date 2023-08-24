import { IconTypes, Icons } from "../icons";
import { IconsContainerProps, InfoWithIconContainer } from "./styles";

type Props = {
    text?: string;
    icon: IconTypes;
};

export default function InfoWithIcon({ text, icon }: Props) {
    const Icon = Icons[icon];
    return (
        <InfoWithIconContainer>
            <Icon />
            {!text ? null : <p>{text}</p>}
        </InfoWithIconContainer>
    );
}
