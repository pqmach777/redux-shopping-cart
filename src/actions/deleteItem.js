var deleteItem = (product) => {

    return(
        {
            type: 'deleteItem',
            itemData: {
                itemName: product.itemName,
                itemPrice: product.itemPrice,
                itemDescription: product.itemDescription

            }
        }
    )
}

export default deleteItem;