import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link, withRouter, Router, Switch, BrowserRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Tab, Tabs, TabScrollButton } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import tothemoon from '../../assets/tothemoon.png';
import moon from '../../assets/moon.png';
import useStyles from './styles';
import Tooltip from '@material-ui/core/Tooltip';



const Navbar = () => {
    const classes = useStyles();
    const routes = ["/moonproducts","/marsproducts","/","/cart","/snackproducts","/merchproducts"]
    const [cart, setCart] = useContext(CartContext);

    return (

        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
               
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit"
                    value={routes[2]}
                    component={Link}
                    to={routes[2]} 
                    >
                        <img src={tothemoon} alt="To The Moon" height="50px" className={classes.image} />
                        
                    </Typography>
                        <Tabs>
                            <Tab 
                                
                                label="Moon"
                                value={routes[0]}
                                component={Link}
                                to={routes[0]}
                            />
                            <Tab 
                                label="Mars"
                                value={routes[1]}
                                component={Link}
                                to={routes[1]}
                            />
                            <Tab 
                                
                                label="Space Snacks"
                                value={routes[4]}
                                component={Link}
                                to={routes[4]}
                            />
                            <Tab 
                                
                                label="Space Swag"
                                value={routes[5]}
                                component={Link}
                                to={routes[5]}
                            />
                        </Tabs>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                         <Tooltip title="Go To Cart">
                        <IconButton aria-label="Show cart items" 
                        color="inherit" 
                        value={routes[3]} 
                        component={Link} 
                        to={routes[3]}
                        >
                          
                            <ShoppingCartIcon fontSize="large" 
                            color="primary"
                            className={classes.cart}/>
                            <Badge badgeContent={cart.length} color="primary"
                            fontSize="large"
                            >
                            </Badge>
                        </IconButton>
                       </Tooltip>
                    </div>
                </Toolbar>
               
            </AppBar>
            
        </div>
    )
}

export default Navbar;
