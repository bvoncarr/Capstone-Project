import React from 'react';
import { Link, withRouter, Router, Switch, BrowserRouter } from "react-router-dom";
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, Tab, Tabs } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import moon from '../../assets/moon.png';
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();
    const routes = ["/moonproducts","/marsproducts"]

    return (

        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={moon} alt="To The Moon" height="25px" className={classes.image} />
                        ToThe<span className={classes.titleColor}> Moon</span> 
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
                        </Tabs>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <ShoppingCartIcon fontSize="large" 
                            color="primary"
                            className={classes.cart}/>
                            <Badge badgeContent={2} color="primary"
                            fontSize="large"
                            >
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar;
