import { IconTypes, Icons } from "../icons";
import { SectionHeaderWithIconContainer } from "./styles";

interface SectionHeaderWithIconProps {
    title: string;
    subtitle: string;
    icon: IconTypes;
}

export default function SectionHeaderWithIcon({
    title,
    subtitle,
    icon,
}: SectionHeaderWithIconProps) {
    const Icon = Icons[icon];
    return (
        <SectionHeaderWithIconContainer>
            <div>
                {/* TODO: DEIXAR AS CORES DINAMICAS CONFORME O TEMA */}
                <Icon />
            </div>
            <div>
                <p>{title}</p>
                <p>{subtitle}</p>
            </div>
        </SectionHeaderWithIconContainer>
    );
}
