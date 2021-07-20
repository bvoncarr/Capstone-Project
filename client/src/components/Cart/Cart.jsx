import React, {useState, useEffect, useContext} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../../context/CartContext';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CartItem from './CartItem/CartItem';


toast.configure();
const notify = () => {
  toast.success('Thank you for you purchase!!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: false,
    delay: 12000,
    
  })
}


const fetch = require('node-fetch');

const useStyles = makeStyles({
  
  title: {
      fontFamily: 'Quicksand',
      fontWeight: 'bold',
      fontSize: '30px',
      color: '#fff',
      textAlign: 'center',
      paddingTop: '40px',
      marginTop: '15px',
      marginBottom: '15px',
  },
  itemCount: {
    fontFamily: 'Quicksand',
    color: '#fff',
    fontSize: '20px',
    paddingTop: '20px',
  },
  stripePay: {
    textAlign: 'center',
    paddingTop: '15px',
    paddingBottom: '50px',
  },
});

// const products = [

//     { id: 3, name: 'Mars Ticket - Single', description: "I'm going to Mars!", price: '$200', image: './images/tickets.jpg'},
//     { id: 4, name: 'Family Mars Ticket Package', description: "We're all going to Mars!" , price: '$2000', image: './images/tickets.jpg'},
// ];

function handleToken(token, addresses) {
    console.log({token, addresses })
}

const Cart = () => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    
    const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

    
    
    console.log(cart.length);
    
    return (
    
        <div className={classes.root}>
         <Confetti/>
        <Typography component="h1" className={classes.title}>
         Cart Items 
         
          </Typography> 
        <Box mx={2}  boxShadow={3}>
        <Grid container justifyContent='center' spacing={4}>
        {cart.map((product) => (
            <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
                <CartItem product={product} />
            </Grid>
            ))}
        
        </Grid>
          <Typography component="h1" className={classes.title}>
         Total Price: ${totalPrice.toFixed(2)}
          </Typography> 
        </Box>      
        <div className={classes.stripePay}>
          <StripeCheckout 
                 
                    stripeKey="pk_test_51JCwAjJ2y4foQN28G60krernrOJVvd2uAXm8wmkXJNoyFZTVLuiZdTtIpS1DJr0axUWFaI56sHY18zvrK0atTh7F00Y153pjf0"
                    
                    token={handleToken}
                    name="To The Moon Checkout"
                    billingAddress
                    shippingAddress
                >

                  <button onClick={notify}className="btn-small purple">Buy Now</button>
                  

                </StripeCheckout>

        </div>
          
        
        </div>
    
      )
        
     
  }
    export default Cart;