function itemReducer(state,action){
    if(state === undefined){
        return {
            totalCost: 0,
            itemCart: []
        }
    }
    switch(action.type){
        case 'addItem':
            console.log('Inside reducer'+ action.itemData.itemName)
            return {
                ...state, 
                totalCost: state.totalCost+ parseInt(action.itemData.itemPrice),
                itemCart: state.itemCart.concat({
                    itemName: action.itemData.itemName,
                    itemPrice: action.itemData.itemPrice,
                    itemDescription: action.itemData.itemDescription
                })
            }

        case 'deleteItem':
        const updateArray = state.itemCart.filter(item =>{
            return item.itemName !== action.itemData.itemName
        })
        return {
            ...state,
            totalCost: state.totalCost - parseInt(action.itemData.itemPrice),
            itemCart: updateArray
        }

        default:
        return state;
    }
}

export default itemReducer;