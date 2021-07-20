import React, { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
// import { Classes } from '@material-ui/styles';
import useStyles from './styles';

import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';




const CartItem = ({ product }) => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    // const [] = useState(0);

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
                 image={product.image}
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