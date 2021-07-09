import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';

// import { Classes } from '@material-ui/styles';
// import useStyles from './Product/styles';

const products = [
    { id: 1, name: 'Moon Ticket', description: "We're going to the moon!", price: '$5', image: './assets/tickets.jpg'},
    { id: 2, name: 'Mars Ticket', description: "Elon is going to kill us there", price: '$200', image: './assets/tickets.jpg'},
];

const Products = () => {
  return (

    <main id="products">
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
    
 
}
export default Products;