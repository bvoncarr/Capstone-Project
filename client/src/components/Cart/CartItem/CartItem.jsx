import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
// import { Classes } from '@material-ui/styles';
import useStyles from './styles';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IndeterminateCheckBoxIcon from '@material-ui/icons/IndeterminateCheckBox';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';




const CartItem = ({ product }) => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
   
    
// This remove from cart removes ALL items instead of just one.
      const clearCart = (productToRemove) => {
      setCart(
        cart.filter((product) => product.id !== productToRemove.id)
      )
        console.log("this is the " + productToRemove);
      
      
    }

    // const removeFromCart = () => {
    //     const cartProduct = {name: product.Company, price: product.Price};
    //     setCart(curr => [...curr, cartProduct]);
    //     console.log(cartProduct)
    // }

    return (
        <Card className={classes.root}>
            <CardMedia 
            className={classes.media}
            image="/images/doge-moon.jpeg"
            title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography 
                    variant='h5' 
                    gutterBottom>    
                    {product.name}
                    </Typography>
                    <Typography 
                    variant='h5'>
                    ${product.price}
                    </Typography>
                </div>
                <Typography 
                    variant='h6' 
                    color="textSecondary">
                    {product.spaceship}
                </Typography>
            </CardContent>
         
           
            <CardActions disableSpacing className={classes.CardActions}>
                <Tooltip title="Add Item">
                <IconButton aria-label="Add Item" className={classes.addIcon} >
                <AddBoxIcon />
                </IconButton>
                </Tooltip>
                <Tooltip title="Remove Item">
                <IconButton aria-label="Remove Item" className={classes.removeIcon}>
                <IndeterminateCheckBoxIcon />
                </IconButton>
                </Tooltip>
                <Tooltip title="Clear Cart">
                <IconButton aria-label="Clear Cart" className={classes.clearCart}>
                <RemoveShoppingCartIcon onClick={clearCart}/>
                </IconButton>
                </Tooltip>
            </CardActions>
             
        </Card>
            
    )
}

export default CartItem;