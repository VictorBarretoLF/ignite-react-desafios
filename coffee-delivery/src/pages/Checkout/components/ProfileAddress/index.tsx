import { Input } from "../../../../components/Input";
import { Icons } from "../../../../components/icons";
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
            <div>
                <Input type="text" placeholder="CEP" isInvalid={true} />
                <Input type="text" placeholder="Rua" />
                <Input type="text" placeholder="Número" />
                <Input type="text" placeholder="Complemento" rightText="Opcional" />
                <Input type="text" placeholder="Bairro" />
                <Input type="text" placeholder="Cidade" />
                <Input type="text" placeholder="UF" />
            </div>
        </ProfileAdressContainer>
    );
}
