function addItem(product){
    return {
        type: "addItem",
        itemData: {
            itemName: product.itemName,
            itemPrice: product.itemPrice,
            itemDescription: product.itemDescription
        }
    }
}
export default addItem;