import React from 'react';
import {connect} from 'react-redux';
import addItem from '../actions/addItem';
import Grid from '@material-ui/core/Grid';

class AddItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemName: '',
            itemPrice: 0,
            itemDescription: ''
        }
        
    }

    itemNameChange(e){
        this.setState({
            itemName: e.target.value 
        })
    }

    itemPriceChange(e){
        this.setState({
            itemPrice: e.target.value
        })
    }
    
    itemDescriptionChange(e){
        this.setState({
            itemDescription: e.target.value
        })
    }
    render() {
        return (
            <div>
                <Grid container className="addingItems" >
                    <Grid item className="addingItemsContainer" xs={12}>
                        <div>
                        <input type="text"
                        placeholder="Item Name"
                        onChange={(e)=> this.itemNameChange(e)}
                        />
                        <input type="text"
                        placeholder="Item Price"
                        onChange={(e)=> this.itemPriceChange(e)}
                        />
                        </div>
                        <div>
                        <input type="text"
                        placeholder="Item Description"
                        onChange={(e)=> this.itemDescriptionChange(e)}
                        />
                        </div>
                        <div>
                        <button onClick={()=> this.props.onAddItem({
                            itemName: this.state.itemName,
                            itemPrice: this.state.itemPrice,
                            itemDescription: this.state.itemDescription,
                        })}>Add Item</button>
                        </div>
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

    return {
        onAddItem: (itemData) => dispatch(addItem(itemData)) 
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(AddItem)