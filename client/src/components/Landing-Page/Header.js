import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Button } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import useSound from 'use-sound';
import newMusic from '../../audioclips/newMusic.mp3';
import { Link as Scroll } from 'react-scroll';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import { Link, withRouter, Router, Switch, BrowserRouter } from "react-router-dom";




const MusicButton = () => {
  const [play] = useSound(newMusic, {volume: 0.1});
  

  return <button onClick={play} style={{backgroundColor: '#4C4CA9', color: '#FB8DA0', borderRadius: '15px', marginTop: '240px', fontSize: '12px'}}>Click!</button>;
};


    

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontFamily: 'Quicksand',
    },
    appbar: {
        background: 'none',
        fontFamily: 'Syncopate',
    },
    appbarWrapper: {
        width: '100%',
        margin: '0 auto'
    },
    appbarTitle: {
        flexGrow: '1',
        fontSize: '25px',
    },
    colorText: {
        color: '#FB8DA0',
        fontWeight: 'bold',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',
    },
    container: {
        textAlign: 'center',
    },
    dreamIntro: {
        color: '#FDFDFD',
        fontSize: '2.5rem',
    },
    moreInfo: {
        color: '#fff',
        fontSize: '25px',
        fontFamily: 'Quicksand',
        textAlign: 'center',
    },
    moreInfoColor: {
        color: '#FB8DA0',
        fontWeight: 'bold',
       fontStyle: 'italic',
    },
    goDown: {
        color: '#FDFDFD',
        fontSize: '5rem',
    },
    button: {
        margin: theme.spacing.unit,
      },
      musicButton: {
         color: 'red',
      }, 
}));

export default function Header() {
    const classes = useStyles();
    const routes = ["/moonproducts", "/marsproducts", "/snackproducts", "/merchproducts",]
    const [checked, setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    },[])
    return (
        
        <div className={classes.root} id="header">
           <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedSize={50}>
           <div className={classes.container}>
               <h1 className={classes.dreamIntro}>Is your dream to go to outer <span className={classes.colorText}>space</span>?</h1>
               <p className={classes.moreInfo}>We can get you to the <span className={classes.moreInfoColor}>Moon</span> AND <span className={classes.moreInfoColor}>Mars</span>. </p> 
               <p className={classes.moreInfo}>Select your tickets from <span className={classes.moreInfoColor}>Virgin Galactic</span> or <span className={classes.moreInfoColor}>SpaceX</span>.</p> 
               
               
               <Button
               startIcon={<ConfirmationNumberIcon />}
               variant="contained"
               color="primary"
               label="Moon"
               value={routes[0]}
               component={Link}
               to={routes[0]}>Moon Tickets
               
               </Button>
               <Button
               startIcon={<ConfirmationNumberIcon />} 
               className={classes.button}
               variant="contained"
               color="primary"
               label="Mars"
               value={routes[1]}
               component={Link}
               to={routes[1]}>Mars Tickets
               
               </Button>
                
           </div>
            </Collapse>

           
            <MusicButton  />
        </div>
    );
}