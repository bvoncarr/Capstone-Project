import React, {useContext} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { Classes } from '@material-ui/styles';
import useStyles from './styles';
import { CartContext } from '../../../context/CartContext';


const MarsProduct = ({ product }) => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {
        const cartProduct = {name: product.company, price: product.price};
        setCart(curr => [...curr, cartProduct]);
        console.log(cartProduct)
    };

    return (
       
        <Card className={classes.root}>
            <CardMedia 
                className={classes.media} 
                // image={product.image} 
                title={product.company}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography 
                    variant='h5' 
                    gutterBottom>
                    {product.company}
                    </Typography>
                    <Typography 
                    variant='h5'>
                    {product.price}
                    </Typography>
                </div>
                <Typography 
                    variant='h6' 
                    color="textSecondary">
                    {product.spaceship}
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

export default MarsProduct;