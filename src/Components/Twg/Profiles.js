import React from 'react'
import './Profiles.css'
import CardMedia from '@material-ui/core/CardMedia';
import { Card, CardActionArea, makeStyles } from '@material-ui/core';

function Profiles({img, alt, name,position}) {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
    });
    const classes = useStyles();
    return (
        <div className='profiles'>
            <Card className={classes.root} id='card'>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={alt}
                    height="345"
                    image={img}
                    title={name}
                    />
                </CardActionArea>
                <h4>{name}</h4>
                <h4>{position}</h4>
            </Card>
        </div>
    )
}

export default Profiles
