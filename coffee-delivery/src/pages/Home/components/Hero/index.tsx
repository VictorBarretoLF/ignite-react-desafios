import { AdvantagesContainer, HeaderContainer, HeroContainer } from "./styles";
import InfoWithIcon from "../../../../components/InfoWithIcon";
import { Heading, Paragraph } from "../../../../components/typographt";
import IntroLogo from "../../../../assets/intro-img.png";

export default function Hero() {
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
                        $iconBackgroundColor="brand-yellow-dark"
                    />
                    <InfoWithIcon
                        icon="package"
                        text="Embalagem mantém o café intacto"
                        $iconBackgroundColor="base-text"
                    />
                    <InfoWithIcon
                        icon="timer"
                        text="Entrega rápida e rastreada"
                        $iconBackgroundColor="brand-yellow"
                    />
                    <InfoWithIcon
                        icon="coffee"
                        text="O café chega fresquinho até você"
                        $iconBackgroundColor="brand-purple"
                    />
                </AdvantagesContainer>
            </div>

            <img src={IntroLogo} />
        </HeroContainer>
    );
}
