import React from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


function getModalStyle() {
    const top = 30 ;
    const left = 35 ;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
    //   transform: `translate(-${top}%, -${left}%)`,
    };
  }
const styles = theme => ({
    paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
    },
});

class CartItemModal extends React.Component {
    state = {
        open: false,
        amount: '',
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
      };


    render() {
        const { classes } = this.props;

        return (
            <div>
                <Button onClick={this.handleOpen} className="itemButton">Add To Cart</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={{alignItems:'center',justifyContent:'center'}}
                >
                    <Slide direction="up" in={this.state.open} mountOnEnter unmountOnExit>
                    <div style={getModalStyle()} className={classes.paper}>
                        <Grid container>
                            <Grid item xs={12}>
                                <h2>Add to Cart</h2>
                            </Grid>
                            <Grid item xs={12} id="cartModal">
                                <h4>Would you like to add to cart?</h4>
                                <form autoComplete="off">
                                <InputLabel>How many?</InputLabel>
                                 <FormControl className={classes.formControl}>
                                    <Select
                                        value={this.state.amount}
                                        onChange={this.handleChange}
                                        inputProps={{
                                        name: 'amount',
                                        id: 'itemMultiple',
                                        }}
                                        className="itemAmount"
                                    >
                                        <MenuItem value="">
                                        <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                    </Select>
                                    </FormControl>
                                </form>
                                <Button onClick={()=> this.props.onAddItemToCart({
                                    amount: this.state.amount                     
                                })} color="secondary">Close</Button>
                                <Button onClick="" color="primary">Add</Button>
                            </Grid>
                        </Grid>
                    </div>
                    </Slide>
                </Modal>
            </div>
        );
    }
}
CartItemModal.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  // We need an intermediary variable for handling the recursive nesting.
  const SimpleModalWrapped = withStyles(styles)(CartItemModal);


export default SimpleModalWrapped


