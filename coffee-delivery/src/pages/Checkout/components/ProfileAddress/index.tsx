import SectionHeaderWithIcon from "../../../../components/SectionHeaderWithIcon";
import AddressForm from "../AddressForm";
import { ProfileAdressContainer } from "./styles";

export default function ProfileAddress() {
    return (
        <ProfileAdressContainer>
            <SectionHeaderWithIcon
                title="Endereço de Entrega"
                subtitle="Informe o endereço onde deseja receber seu pedido"
                icon="mapPinLine"
                iconColor="brand-yellow"
            />

            <AddressForm />
        </ProfileAdressContainer>
    );
}
