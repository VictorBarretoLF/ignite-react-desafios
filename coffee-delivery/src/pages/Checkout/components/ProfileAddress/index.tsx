import { Input } from "../../../../components/Input";
import { Icons } from "../../../../components/icons";
import AddressForm from "../AddressForm";
import { ProfileAddressHeader, ProfileAdressContainer } from "./styles";

export default function ProfileAddress() {
    return (
        <ProfileAdressContainer>
            <ProfileAddressHeader>
                <div>
                    <Icons.mapPinLine />
                </div>
                <div>
                    <p>Endereço de Entrega</p>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </ProfileAddressHeader>
            <AddressForm />
        </ProfileAdressContainer>
    );
}
