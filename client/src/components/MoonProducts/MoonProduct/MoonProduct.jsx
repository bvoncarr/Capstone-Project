import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { Classes } from '@material-ui/styles';
import useStyles from './styles';

const MoonProduct = ({ product }) => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const cartProduct = {name: product.Company, price: product.Price};
        setCart(curr => [...curr, cartProduct]);
        console.log(cartProduct)
    }

    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.media} 
                // image={product.image} 
                title={product.Company}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography 
                    variant='h5' 
                    gutterBottom>
                    {product.Company}
                    </Typography>
                    <Typography 
                    variant='h5'>
                    {product.Price}
                    </Typography>
                </div>
                <Typography 
                    variant='h6' 
                    color="textSecondary">
                    {product.SpaceShip}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart" onClick={addToCart}>
                    <AddShoppingCartIcon  />
                </IconButton>
            </CardActions>
        </Card>
            
    )
}

export default MoonProduct;