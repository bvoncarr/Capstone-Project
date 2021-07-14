import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import { Classes } from '@material-ui/styles';
import useStyles from './styles';

const MoonProduct = ({ product }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia 
                className={classes.media} 
                // image={product.image} 
                title={product.Company}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography 
                    variant='h5' 
                    gutterBottom>
                    {product.Company}
                    </Typography>
                    <Typography 
                    variant='h5'>
                    {product.Price}
                    </Typography>
                </div>
                <Typography 
                    variant='h6' 
                    color="textSecondary">
                    {product.SpaceShip}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCartIcon  />
                </IconButton>
            </CardActions>
        </Card>
            
    )
}

export default MoonProduct;