import React from 'react';
import Grid from '@material-ui/core/Grid';
import MarsProduct from './MarsProduct/MarsProduct';
import Box from '@material-ui/core/Box';


// import { Classes } from '@material-ui/styles';
// import useStyles from './Product/styles';

const products = [

    { id: 3, name: 'Mars Ticket - Single', description: "I'm going to Mars!", price: '$200', image: './images/tickets.jpg'},
    { id: 4, name: 'Family Mars Ticket Package', description: "We're all going to Mars!", price: '$2000', image: './images/tickets.jpg'},
];

const MarsProducts = () => {
  return (

    <div id="products">
      <Box mx={2}  boxShadow={3}>
      <Grid container justifyContent='center' spacing={2}>
        {products.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <MarsProduct product={product} />
          </Grid>
        ))}
      </Grid>
      </Box>
    </div>
  )
    
 
}
export default MarsProducts;