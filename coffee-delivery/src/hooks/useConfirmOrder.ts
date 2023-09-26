import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
}

const confirmOrderFormValidationSchema = z.object({
    cep: z.string().min(1, "Informe o CEP"),
    street: z.string().min(1, "Informe o Rua"),
    number: z.string().min(1, "Informe o Número"),
    complement: z.string(),
    neighborhood: z.string().min(1, "Informe o Bairro"),
    city: z.string().min(1, "Informe a Cidade"),
    uf: z.string().min(1, "Informe a UF").max(2, "Max 2 caracteres"),
    paymentMethod: z.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return { message: "Informe o método de pagamento" };
        },
    }),
});

export type OrderData = z.infer<typeof confirmOrderFormValidationSchema>;

export type ConfirmOrderFormData = OrderData;

export function useConfirmOrder() {
    return useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
    });
}
