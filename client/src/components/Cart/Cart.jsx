import React, {useState, useEffect, useContext} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../../context/CartContext';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CartItem from './CartItem/CartItem';


const fetch = require('node-fetch');




const useStyles = makeStyles({
  
  title: {
      fontFamily: 'Quicksand',
      fontWeight: 'bold',
      fontSize: '30px',
      color: '#fff',
      textAlign: 'center',
      marginTop: '20px',
  },
  
});

function handleToken(token, addresses) {
    console.log({token, addresses })
}


const Cart = () => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    console.log(cart.length)
    console.log(cart)
  return (
    <main>
        <Typography component="h1"
        className={classes.title}>Checkout</Typography>

        <div id="CartItem">
        <Box mx={2}  boxShadow={3}>
        <Grid container justifyContent='center' spacing={2}>
        {cart.map((product) => (
            <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
                <CartItem />
            </Grid>
            ))}
        </Grid>
        </Box>
        
        </div>
    </main>
    

  )
    
 
  }
export default Cart;