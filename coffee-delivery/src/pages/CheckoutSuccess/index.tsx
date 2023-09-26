import { useLocation, useNavigate } from "react-router-dom";
import { ConfirmOrderFormData } from "../../hooks/useConfirmOrder";
import { useEffect } from "react";

export default function CheckoutSuccess() {
    const location = useLocation();
    const navigate = useNavigate();
    const state = location.state as ConfirmOrderFormData;

    useEffect(() => {
        if (!state) {
            navigate("/");
        }
    }, []);

    return <div>CheckoutSuccess</div>;
}
