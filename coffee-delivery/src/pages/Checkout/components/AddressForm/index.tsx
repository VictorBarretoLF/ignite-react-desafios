import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";

export default function AddressForm() {
    return (
        <AddressFormContainer>
            <Input type="text" placeholder="CEP" className="cep" />
            <Input type="text" placeholder="Rua" className="street" />
            <Input type="text" placeholder="Número" />
            <Input
                type="text"
                placeholder="Complemento"
                rightText="Opcional"
                className="complement"
            />
            <Input type="text" placeholder="Bairro" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" />
        </AddressFormContainer>
    );
}
