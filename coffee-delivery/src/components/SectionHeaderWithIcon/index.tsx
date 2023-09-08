import { IconTypes, Icons } from "../icons";
import { SectionHeaderWithIconContainer } from "./styles";
import { DefaultThemeColors } from "../../styles/themes/default";
import { useTheme } from "styled-components";

interface SectionHeaderWithIconProps {
    title: string;
    subtitle: string;
    icon: IconTypes;
    iconColor?: DefaultThemeColors;
}

export default function SectionHeaderWithIcon({
    title,
    subtitle,
    icon,
    iconColor,
}: SectionHeaderWithIconProps) {
    const Icon = Icons[icon];
    const theme = useTheme();

    return (
        <SectionHeaderWithIconContainer>
            <div>
                <Icon color={!iconColor ? "black" : theme.colors[iconColor]} />
            </div>
            <div>
                <p>{title}</p>
                <p>{subtitle}</p>
            </div>
        </SectionHeaderWithIconContainer>
    );
}
