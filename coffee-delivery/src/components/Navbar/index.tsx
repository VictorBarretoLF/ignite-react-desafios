import CoffeeLogo from "../../assets/coffee-logo.svg";
import { CartButton, LinksContainer, NavbarContainer, RegionContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";

type IPAddressInfo = {
    query: string;
    status: "success";
    country: string;
    countryCode: string;
    region: string;
    regionName: string;
    city: string;
    zip: string;
    lat: number;
    lon: number;
    timezone: string;
    isp: string;
    org: string;
    as: string;
};

const DEFAULT_LOCATION: IPAddressInfo = {
    query: "192.168.1.1", // You can set an actual IP if needed
    status: "success",
    country: "Brazil",
    countryCode: "BR",
    region: "PB",
    regionName: "Paraíba",
    city: "João Pessoa",
    zip: "58000-000", // This is a general ZIP code; you might want to use a specific one
    lat: -7.1196,
    lon: -34.8456,
    timezone: "America/Fortaleza",
    isp: "Example ISP", // Replace with a real ISP if needed
    org: "Example Organization", // Replace with a real organization if needed
    as: "AS123456 Example Autonomous System", // Replace with a real AS number if needed
};

export default function Navbar() {
    const [currentLocation, setCurrentLocation] = useState<IPAddressInfo>(DEFAULT_LOCATION);

    useEffect(() => {
        async function getClientCurrentLocation() {
            try {
                const res = await fetch("http://ip-api.com/json/");
                const data: IPAddressInfo = await res.json();
                setCurrentLocation(data);
            } catch (error) {
                console.error("An error occurred:", error);
            }
        }

        getClientCurrentLocation();
    }, []);

    return (
        <NavbarContainer>
            <img src={CoffeeLogo} />

            <LinksContainer>
                <RegionContainer>
                    <MapPin size={22} weight="fill" />
                    <p>
                        <span>{currentLocation?.city + ", " + currentLocation?.region}</span>
                    </p>
                </RegionContainer>
                <NavLink to="#">
                    <CartButton>
                        <ShoppingCart size={22} weight="fill" />
                    </CartButton>
                </NavLink>
            </LinksContainer>
        </NavbarContainer>
    );
}
