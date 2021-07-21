import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { Classes } from '@material-ui/styles';
import useStyles from './styles';
import Tooltip from '@material-ui/core/Tooltip';

const MerchProduct = ({ product }) => {
    const classes = useStyles();
    // eslint-disable-next-line
    const [cart, setCart] = useContext(CartContext);
    const addToCart = () => {

        const cartProduct = {name: product.item, price: product.price, description: product.description, image: product.pics};

   

        setCart(curr => [...curr, cartProduct]);
        console.log(cartProduct)
    }

    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.media} 
                image={product.pics} 
                title={product.item}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography 
                    variant='h5' 
                    gutterBottom>
                    {product.item}
                    </Typography>
                    <Typography 
                    variant='h5'>

                    ${product.price.toFixed(2)}


                    </Typography>
                </div>
                <Typography 
                    variant='h6' 
                    color="textSecondary">

                    {product.description}

                   

                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <Tooltip title="Add to Cart">
                <IconButton aria-label="Add to Cart" onClick={addToCart} className={classes.addIcon}>
                    <AddShoppingCartIcon  />
                </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
            
    )
}

export default MerchProduct;