import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import moon from '../../assets/moon.png';
import useStyles from './styles';


const Navbar = () => {
    const classes = useStyles();

    return (

        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={moon} alt="To The Moon" height="25px" className={classes.image} />
                        To The Moon
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={2} color="secondary">
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar;
