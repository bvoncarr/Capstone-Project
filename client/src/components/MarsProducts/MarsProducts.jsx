import React, {useState, useEffect}  from 'react';
import Grid from '@material-ui/core/Grid';
import MarsProduct from './MarsProduct/MarsProduct';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Mars from '../Landing-Page/Mars';

const fetch = require('node-fetch');

const useStyles = makeStyles({
  
  title: {
      fontFamily: 'Quicksand',
      fontWeight: 'bold',
      fontSize: '30px',
      color: '#fff',
      textAlign: 'center',
      marginTop: '15px',
  },
  
});



const MarsProducts = () => {
  const classes = useStyles();
  const [marsData, setMarsData] = useState([])
  useEffect(() => {
    // Update the document title using the browser API
    fetch("http://localhost:5000/mars")
          .then((res) => res.json())
          .then((data) => setMarsData(data));


  },[]);
  console.log(marsData)
  return (

    marsData ?
    <>
    <Mars />
    <Typography component="h1" 
          className={classes.title}>Ticket Options for Mars</Typography>
       
    <div id="marsProducts">
      
      <Box mx={2}  boxShadow={3}>
      <Grid container justifyContent='center' spacing={4}>
        {marsData.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <MarsProduct product={product} />
          </Grid>
        ))}
      </Grid>
      </Box>

    </div>
    </>
      :''
  )
    
 
}
export default MarsProducts;