import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";
import { AddressFormContainer } from "./styles";
import { OrderData } from "../../../../hooks/useConfirmOrder";

export default function AddressForm() {
    const {
        register,
        formState: { errors },
    } = useFormContext<OrderData>();

    return (
        <AddressFormContainer>
            <Input type="text" placeholder="CEP" {...register("cep")} className="cep" />
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
