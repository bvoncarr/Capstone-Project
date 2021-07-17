import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { Classes } from '@material-ui/styles';
import useStyles from './styles';

const CartItem = ({ product }) => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);

    // const removeFromCart = () => {
    //     const cartProduct = {name: product.Company, price: product.Price};
    //     setCart(curr => [...curr, cartProduct]);
    //     console.log(cartProduct)
    // }

    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.media} 
                // image={product.image} 
                title={cart.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography 
                    variant='h5' 
                    gutterBottom>
                    {cart.name}
                    </Typography>
                    <Typography 
                    variant='h5'>
                    {cart.price}
                    </Typography>
                </div>
                <Typography 
                    variant='h6' 
                    color="textSecondary">
                    {cart.spaceShip}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>

            </CardActions>
        </Card>
            
    )
}

export default CartItem;