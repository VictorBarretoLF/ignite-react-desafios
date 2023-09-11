import { Paragraph } from "../../../../components/typographt";
import { ConfirmButton, PurchaseSummaryContainer } from "./styles";

function PurchaseSummary() {
    return (
        <PurchaseSummaryContainer>
            <div>
                <Paragraph size="s">Total de itens</Paragraph>
                <Paragraph>R$ 10,00</Paragraph>
            </div>
            <div>
                <Paragraph size="s">Entrega</Paragraph>
                <Paragraph>R$ 50,00</Paragraph>
            </div>
            <div>
                <Paragraph weight="700" color="subtitle" size="l">
                    Total
                </Paragraph>
                <Paragraph weight="700" color="subtitle" size="l">
                    R$ 10,00
                </Paragraph>
            </div>

            <ConfirmButton type="submit">confirmar pedido</ConfirmButton>
        </PurchaseSummaryContainer>
    );
}

export default PurchaseSummary;
