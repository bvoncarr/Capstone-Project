import React, { useContext, useState } from 'react';
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
    const [cartItem, setCartItem] = useState(0);

   
   
// This addItem NEEDS to add one more of the same item already in cart - it does NOT work
    // const addItem = (product) => {
    //     setCart([...cart]);
    // };

// This function removes/hides one item in the cart & does NOT work

//    const removeItem = product => {
//        setCart([...cart].filter(product => product.id !== product.id))
//    }
   
// This was Corey's code for the remove from cart.
    // const removeFromCart = () => {
    //     const cartProduct = {name: product.Company, price: product.Price};
    //     setCart(curr => [...curr, cartProduct]);
    //     console.log(cartProduct)
    // }

// This clearCart function removes ALL items instead of just one it DOES work. 
      const clearCart = (productsToRemove) => {
      setCart(
        cart.filter((product) => product.id !== productsToRemove.id)
      ) 
    }



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
                        ${product.price.toFixed(2)}
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
                        <AddBoxIcon onClick={console.log("you clicked me")}/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Remove Item">
                    <IconButton aria-label="Remove Item" className={classes.removeIcon}>
                        <IndeterminateCheckBoxIcon onClick={console.log("you clicked me")}/>
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