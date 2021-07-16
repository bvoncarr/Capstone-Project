import React, {useState, useEffect, useContext} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../../context/CartContext';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
  return (

    <div className={classes.root}>
      
    <Box mx={2}  boxShadow={3}>
    <Grid container justifyContent='center' spacing={4}>
      <span>
      item count : {cart.length}
      </span>
    </Grid>
    

            <StripeCheckout 
                stripeKey="pk_test_51JCwAjJ2y4foQN28G60krernrOJVvd2uAXm8wmkXJNoyFZTVLuiZdTtIpS1DJr0axUWFaI56sHY18zvrK0atTh7F00Y153pjf0"
                token={handleToken}
            />
      
            </Box>      
    
    </div>

  )
    
 
  }
export default Cart;