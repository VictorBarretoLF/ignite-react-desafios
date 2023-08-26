import CoffeeMenu from "./components/CoffeeMenu";
import Hero from "./components/Hero";
import { HomeContainer } from "./styles";

export default function Home() {
    return (
        <HomeContainer>
            <Hero />

            <CoffeeMenu />
        </HomeContainer>
    );
}
