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

export default function Moon () {
    const classes = useStyles();

    return (
        <Scroll to="moonProducts" smooth={true}>
        <div className={classes.root} id="moon">
            <ImageCard place={places[0]}/>
            <ImageCard place={places[2]} />
            <ImageCard place={places[3]} />
        </div>
        </Scroll>
    )
}