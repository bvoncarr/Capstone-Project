import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import places from '../../static/places';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column', 
        }
    },
}));

export default function Mars () {
    const classes = useStyles();

    return (
        <Scroll to="marsProducts" smooth={true}>
        <div className={classes.root} id="mars">
            <ImageCard place={places[1] }/>
        </div>
        </Scroll>
    )
}