import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import { Link as Scroll } from 'react-scroll';


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
        color: '#6377AD',
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
        color: '#6377AD',
        fontWeight: 'bold',
       fontStyle: 'italic',
    },
    goDown: {
        color: '#FDFDFD',
        fontSize: '5rem',
    },
}));

export default function Header() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=> {
        setChecked(true);
    },[])
    return (
        <div className={classes.root} id="header">
           <AppBar className={classes.appbar}>
               <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>To The <span className={classes.colorText}>
                        Moon</span></h1>
                  </Toolbar>
           </AppBar>
           <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
           <div className={classes.container}>
               <h1 className={classes.dreamIntro}>Is your dream to go to outer <span className={classes.colorText}>space</span>?</h1>
               <p className={classes.moreInfo}>We can get you to the <span className={classes.moreInfoColor}>Moon</span> AND <span className={classes.moreInfoColor}>Mars</span>. </p> 
               <p className={classes.moreInfo}>Select your tickets from <span className={classes.moreInfoColor}>Axiom Space</span>, <span className={classes.moreInfoColor}>Blue Origin</span>, or <span className={classes.moreInfoColor}>Virgin Galactic</span>.</p> 
               <p className={classes.moreInfo}>Want to take your adventure even farther? You can catch a ride to Mars with <span className={classes.moreInfoColor}>SpaceX</span>.</p>
               <Scroll to="moon-or-mars" smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>
                </Scroll>
           </div>
            </Collapse>
        </div>
    );
}