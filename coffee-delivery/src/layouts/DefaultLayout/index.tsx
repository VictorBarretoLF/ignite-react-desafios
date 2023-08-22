import React from "react";
import { Container } from "./styles";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

export function DefaultLayout() {
    return (
        <Container>
            <Navbar />
            <Outlet />
        </Container>
    );
}
