import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product';
import { Classes } from '@material-ui/styles';
import useStyles from './Product/styles';
const products = [
    { id: 1, name: 'Moon Ticket', description: "We're going to the mooooooon", price: '$5'},
    { id: 1, name: 'Mars Ticket', description: "Elon is going to kill us there", price: '$200'},
];

const Products = () => {
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
 
};
export default Products;