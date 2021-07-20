import React from 'react';
import MoonProducts from './components/MoonProducts/MoonProducts';
import MarsProducts from './components/MarsProducts/MarsProducts';
import SnackProducts from './components/SnackProducts/SnackProducts';
import MerchProducts from './components/MerchProducts/MerchProducts';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavBar/Navbar';
import Cart from './components/Cart/Cart';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { CartProvider } from './context/CartContext'
import Header from './components/Landing-Page/Header';



const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/galaxy.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));

const App = () => {
    const classes = useStyles();
    
    // eslint-disable-next-line
      return (
          <>
        
          <CartProvider>
          <div className={classes.root}>
            <CssBaseline />
          <Router>
            <Navbar />
          
            <Switch>
            
              <Route exact path="/"component={Header} />
              <Route path="/moonproducts"><MoonProducts /></Route>
              <Route path="/marsproducts"><MarsProducts /></Route>
              <Route path="/snackproducts"><SnackProducts /></Route>
              <Route path="/merchproducts"><MerchProducts /></Route>
              <Route path="/cart"><Cart /></Route>
            </Switch>
         

           
          </Router>
         </div>
          </CartProvider>
         </>
      );
  }


export default App;




