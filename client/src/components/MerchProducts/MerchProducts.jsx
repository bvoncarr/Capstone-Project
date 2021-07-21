import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import MerchProduct from './MerchProduct/MerchProduct';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Merch from '../Landing-Page/Merch';

const fetch = require('node-fetch');

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


const MerchProducts = () => {
  const classes = useStyles();
  const [merchData, setMerchData] = useState([])
  useEffect(() => {
    // Update the document title using the browser API
    fetch("API_URL")
          .then((res) => res.json())
          .then((data) => setMerchData(data));


  },[]);
  console.log(merchData)
  return (

    merchData ?

    <main>
    <Merch />
    <Typography component="h1"
    className={classes.title}>Available Swag</Typography>

    <div id="merchProducts">
     <Box mx={2}  boxShadow={3}>
       <Grid container justifyContent='center' spacing={2}>
       {merchData.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <MerchProduct product={product} />
          </Grid>
        ))}
      </Grid>
      </Box>
    
    </div>
    </main>
    : ''
  )
    
 
}
export default MerchProducts;