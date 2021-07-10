import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import Box from '@material-ui/core/Box';


// import { Classes } from '@material-ui/styles';
// import useStyles from './Product/styles';

const products = [
    { id: 1, name: 'Moon Ticket - Single', description: "I'm going to the moon!", price: '$5', image: './images/tickets.jpg'},
    { id: 2, name: 'Family Moon Ticket Package', description: "We're going to the moon!", price: '$50', image: './images/tickets.jpg'},
    { id: 3, name: 'Mars Ticket - Single', description: "I'm going to Mars!", price: '$200', image: './images/tickets.jpg'},
    { id: 4, name: 'Family Mars Ticket Package', description: "We're all going to Mars!", price: '$2000', image: './images/tickets.jpg'},
];

const Products = () => {
  return (

    <main id="products">
      <Box mx={2}  boxShadow={3}>
      <Grid container justifyContent='center' spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      </Box>
    </main>
  )
    
 
}
export default Products;