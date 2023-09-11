function PurchaseSummary() {
    return (
        <div>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>
            <div>
                <RegularText size="s">Entrega</RegularText>
                <RegularText>R$ {formattedDeliveryPrice}</RegularText>
            </div>
            <div>
                <RegularText weight="700" color="subtitle" size="l">
                    Total
                </RegularText>
                <RegularText weight="700" color="subtitle" size="l">
                    R$ {formattedCartTotal}
                </RegularText>
            </div>
        </div>
    );
}

export default PurchaseSummary;
