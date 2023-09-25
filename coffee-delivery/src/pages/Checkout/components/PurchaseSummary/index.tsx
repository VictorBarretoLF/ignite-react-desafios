import { Paragraph } from "../../../../components/typographt";
import { useCart } from "../../../../hooks/useCart";
import { DELIVERY_PRICE } from "../../../../lib/constants";
import { formatMoney } from "../../../../lib/utils";
import { ConfirmButton, PurchaseSummaryContainer } from "./styles";

function PurchaseSummary() {
    const { totalItemsInCart, totalPriceInCart } = useCart();

    const formattedTotalPriceInCart = formatMoney(totalPriceInCart);
    const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
    const formattedCartTotalPlusDelivery = formatMoney(DELIVERY_PRICE + totalPriceInCart);

    return (
        <PurchaseSummaryContainer>
            <div>
                <Paragraph size="s">Total de itens</Paragraph>
                <Paragraph>R$ {formattedTotalPriceInCart}</Paragraph>
            </div>
            <div>
                <Paragraph size="s">Entrega</Paragraph>
                <Paragraph>R$ {formattedDeliveryPrice}</Paragraph>
            </div>
            <div>
                <Paragraph weight="700" color="subtitle" size="l">
                    Total
                </Paragraph>
                <Paragraph weight="700" color="subtitle" size="l">
                    R$ {formattedCartTotalPlusDelivery}
                </Paragraph>
            </div>

            <ConfirmButton type="submit" disabled={totalItemsInCart <= 0}>
                confirmar pedido
            </ConfirmButton>
        </PurchaseSummaryContainer>
    );
}

export default PurchaseSummary;
