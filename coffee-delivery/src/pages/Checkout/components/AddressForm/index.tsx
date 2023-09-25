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
            <Input
                type="text"
                placeholder="CEP"
                {...register("cep")}
                className="cep"
                error={errors.cep?.message}
            />
            <Input
                type="text"
                placeholder="Rua"
                className="street"
                {...register("street")}
                error={errors.street?.message}
            />
            <Input
                type="text"
                placeholder="Número"
                {...register("number")}
                error={errors.number?.message}
            />
            <Input
                type="text"
                placeholder="Complemento"
                rightText="Opcional"
                className="complement"
                {...register("complement")}
            />
            <Input
                type="text"
                placeholder="Bairro"
                {...register("neighborhood")}
                error={errors.neighborhood?.message}
            />
            <Input
                type="text"
                placeholder="Cidade"
                {...register("city")}
                error={errors.city?.message}
            />
            <Input type="text" placeholder="UF" {...register("uf")} error={errors.uf?.message} />
        </AddressFormContainer>
    );
}
