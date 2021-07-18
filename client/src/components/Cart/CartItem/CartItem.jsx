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
                image={product.pics} 
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

            </CardActions>
        </Card>
            
    )
}

export default CartItem;