import React from 'react';
import Products from './components/Products/Products';

import Navbar from './components/NavBar/Navbar';

import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Landing-Page/Header';
import MoonorMars from './components/Landing-Page/MoonorMars';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '100vh',
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/galaxy.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
  }));

const App = () => {
    const classes = useStyles();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
  }, []);
    
      return (
          <>
          <div className={classes.root}>
            <CssBaseline />
          <Header />
          <MoonorMars />
          </div>
        <div>
            <Navbar />
            <Products />
            <p>{!data ? "Loading..." : data}</p>
         </div>
         </>
      );
  }


export default App;




