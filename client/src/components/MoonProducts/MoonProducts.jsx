import React from 'react';
import Grid from '@material-ui/core/Grid';
import MoonProduct from './MoonProduct/MoonProduct';
import Box from '@material-ui/core/Box';


// import { Classes } from '@material-ui/styles';
// import useStyles from './Product/styles';

const products = [
    { id: 1, name: 'Moon Ticket - Single', description: "I'm going to the moon!", price: '$5', image: './images/tickets.jpg'},
    { id: 2, name: 'Family Moon Ticket Package', description: "We're going to the moon!", price: '$50', image: './images/tickets.jpg'},

];

const MoonProducts = () => {
  return (

    <div id="products">
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
  )
    
 
}
export default MoonProducts;