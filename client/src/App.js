import React from 'react';
import MoonProducts from './components/MoonProducts/MoonProducts';
import MarsProducts from './components/MarsProducts/MarsProducts';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavBar/Navbar';
import Cart from './components/Cart/Cart';
import StripeCheckout from 'react-stripe-checkout';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Landing-Page/Header';
// 


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
    
    
      return (
          <>
          <div className={classes.root}>
          
            <CssBaseline />
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" exact component={Header} />
              <Route path="/moonproducts"><MoonProducts /></Route>
              <Route path="/marsproducts"><MarsProducts /></Route>
              <Route path="/cart"><Cart /></Route>
            </Switch>
         

           
          </Router>
         </div>
         </>
      );
  }


export default App;




