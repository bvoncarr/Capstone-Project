import React, {useState, useEffect, useContext, useRef} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../../context/CartContext';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Confetti from 'react-confetti';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';


toast.configure();
const notify = () => {
  toast.success('Thank you for you purchase!!', {
    position: toast.POSITION.TOP_CENTER,
    autoClose: false,
    delay: 30000,
   
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
      paddingTop: '60px',
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


function handleToken(token, addresses) {
    console.log({token, addresses })
}

const Cart = () => {
    const classes = useStyles();
    const [cart, setCart] = useContext(CartContext);
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const [show, setShow] = useState(false);
    const confettiRef = useRef(null);
    
  useEffect(() => {
    setHeight(confettiRef.current.clientHeight);
    setWidth(confettiRef.current.clientWidth);
  }, [])

  const handleShow = toggle => {
    setShow(toggle);
  }
  
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  
    
    console.log(cart.length);

      const clearCart = (productsToRemove) => {
      setCart(
        cart.filter((product) => product.id !== productsToRemove.id)
      ) 
    }

    
    return (
      
     
        <div className={classes.root} onMouseEnter={() => handleShow(true)}
        onMouseLeave={() => handleShow(false)}
        className="confetti-wrap"
        ref={confettiRef}>
        <Confetti
          recycle={show}
          numberOfPieces={80}
          width={width}
          height={height}
        />

         
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

                  <button onMouseOut={clearCart} onClick={notify}  className="btn-small purple" >Buy Now</button>
                  <br/>
                  
             
                </StripeCheckout>

        </div>
          <div style={{textAlign: 'center'}}>
            <Link className="btn-small purple" to='/' >Continue Shopping</Link>
          </div>
              
        
        </div>
      
      )
        
     
  }
    export default Cart;