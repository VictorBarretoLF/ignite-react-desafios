import { AdvantagesContainer, HeaderContainer, HeroContainer } from "./styles";
import InfoWithIcon from "../../../../components/InfoWithIcon";
import { Heading, Paragraph } from "../../../../components/typographt";
import IntroLogo from "../../../../assets/intro-img.png";
import { useTheme } from "styled-components";

export default function Hero() {
    const { colors } = useTheme();

    return (
        <HeroContainer>
            <div>
                <HeaderContainer>
                    <Heading size="xl">Encontre o café perfeito para qualquer hora do dia</Heading>
                    <Paragraph as="h3" size="l" color="subtitle">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </Paragraph>
                </HeaderContainer>

                <AdvantagesContainer>
                    <InfoWithIcon
                        icon="cart"
                        text="Compra simples e segura"
                        $iconBackgroundColor={colors["brand-yellow-dark"]}
                    />
                    <InfoWithIcon
                        icon="package"
                        text="Embalagem mantém o café intacto"
                        $iconBackgroundColor={colors["base-text"]}
                    />
                    <InfoWithIcon
                        icon="timer"
                        text="Entrega rápida e rastreada"
                        $iconBackgroundColor={colors["brand-yellow"]}
                    />
                    <InfoWithIcon
                        icon="coffee"
                        text="O café chega fresquinho até você"
                        $iconBackgroundColor={colors["brand-purple"]}
                    />
                </AdvantagesContainer>
            </div>

            <img src={IntroLogo} />
        </HeroContainer>
    );
}
