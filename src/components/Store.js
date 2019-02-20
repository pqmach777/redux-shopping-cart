import React from 'react';
import {connect} from 'react-redux';
import addItem from '../actions/addItem';
import deleteItem from '../actions/deleteItem';
import AddItem from './AddItem';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Paper } from '@material-ui/core';
import SimpleModalWrapped from './CartItemModal';
class Store extends React.Component {

    render() {
        var items= this.props.itemCart.map((item)=>{
            return  <Grid item  xs={7}>
                <Grid container key="storeItems" className="storeItem">
                    <Grid item className="itemName" xs={4}><Paper className="itemPaper" key={item.itemName}>{item.itemName}</Paper></Grid>
                    <Grid item className="itemDescription" xs={4}><Paper className="itemPaper" key={item.itemDescription}>{item.itemDescription}</Paper></Grid>
                    <Grid item xs={4}><Paper><SimpleModalWrapped /></Paper></Grid>
                </Grid>
            </Grid>
        })
        // var shoppingCartItem = this.props.itemCart.map((item)=>{
        //     return <Grid item className="shoppingCart" xs={5}>
        //     <div key={item.itemPrice}>{item.itemPrice}</div>
        //     <div key={item.itemName}>{item.itemName}</div>
        //     </Grid>
        // })

        return (
            <div>                
                <AddItem />
                <Grid container className="storeFront" >
                    <Grid item className="storeFrontHeader" xs={12}>
                        <div>Redux Store</div>
                    </Grid>
                    <Grid item xs={12}>
                        {items}
                    </Grid>
                    
                </Grid>
            </div>
        );
    }
}


function mapStateToProps(state){
    return{
        totalCost: state.totalCost,
        itemCart: state.itemCart
    }
}

function mapDispatchToProps(dispatch){
    return{
        onAddItem: (itemData)=> {dispatch(addItem(itemData))},
        onDeleteItem: (itemData)=> {dispatch(deleteItem(itemData))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Store);