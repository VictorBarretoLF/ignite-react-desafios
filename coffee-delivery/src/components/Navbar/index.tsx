import CoffeeLogo from "../../assets/coffee-logo.svg";
import {
    CartButton,
    IconShoppingCart,
    LinksContainer,
    NavbarContainer,
    RegionContainer,
} from "./styles";
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

export default function Navbar() {
    const [currentLocation, setCurrentLocation] = useState<IPAddressInfo>();
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
