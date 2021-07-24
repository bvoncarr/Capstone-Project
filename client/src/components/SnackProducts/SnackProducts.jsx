import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import SnackProduct from './SnackProduct/SnackProduct';
import Box from '@material-ui/core/Box';
// import Confetti from 'react-confetti';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Snack from '../Landing-Page/Snack';



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



// var getThisData = function () {
//   fetch("http://localhost:3001/moon")
//         .then((res) => res.json())
//         .then((data) => console.log(data));
// }
// console.log(getThisData());


// const products = [
//     { id: 1, name: 'Moon Ticket - Single', description: "I'm going to the moon!", price: '$50', image: './images/tickets.jpg'},
//     { id: 2, name: 'Family Moon Ticket Package', description: "We're all going to the moon!", price: '$500', image: './images/tickets.jpg'},

// ];

const SnackProducts = () => {
  const classes = useStyles();
  const [snackData, setSnackData] = useState([])
  useEffect(() => {
    // Update the document title using the browser API
    fetch("https://moon-or-mars.herokuapp.com/snacks")
          .then((res) => res.json())
          .then((data) => setSnackData(data));


  },[]);
  console.log(snackData)
  return (

    snackData ?

    <main>
    <Snack />
    <Typography component="h1"
    className={classes.title}>Available Snacks</Typography>

    <div id="snackProducts">
     <Box mx={2}  boxShadow={3}>
       <Grid container justifyContent='center' spacing={2}>
       {snackData.map((product) => (
          <Grid item key={product.id}  xs={12} sm={6} md={4} lg={3}>
            <SnackProduct product={product} />
          </Grid>
        ))}
      </Grid>
      </Box>
    
    </div>
    </main>
    : ''
  )
    
 
}
export default SnackProducts;