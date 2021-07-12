import React from 'react';
import Grid from '@material-ui/core/Grid';
import MoonProduct from './MoonProduct/MoonProduct';
import Box from '@material-ui/core/Box';

const fetch = require('node-fetch');

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Moon from '../Landing-Page/Moon';


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


var getThisData = function () {
  fetch("http://localhost:3001/moon")
        .then((res) => res.json())
        .then((data) => console.log(data));
}
console.log(getThisData());
const products = [
    { id: 1, name: 'Moon Ticket - Single', description: "I'm going to the moon!", price: '$50', image: './images/tickets.jpg'},
    { id: 2, name: 'Family Moon Ticket Package', description: "We're all going to the moon!", price: '$500', image: './images/tickets.jpg'},

];

const MoonProducts = () => {
  const classes = useStyles();
  return (

    <>
    <Moon />
    <Typography component="h1"
    className={classes.title}>Ticket Options for the Moon</Typography>

    <div id="moonProducts">
     <Box mx={2}  boxShadow={3}>
       <Grid container justifyContent='center' spacing={2}>
       {products.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <MoonProduct product={product} />
          </Grid>
        ))}
      </Grid>
      </Box>
    
    </div>
    </>

  )
    
 
}
export default MoonProducts;