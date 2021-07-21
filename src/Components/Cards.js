import CardMedia from '@material-ui/core/CardMedia';
import React from 'react'
import { Card, CardActionArea, makeStyles } from '@material-ui/core';
import './Cards.css'

function Cards({img, alt,title}) {
    const useStyles = makeStyles({
    root: {
        // maxWidth: 345,
        maxWidth: 345,
        maxHeight: 345,
        width: 275,
        height:350,
        
    },
    });
    const classes = useStyles();
    return (
        <div className="cards">
            <Card className={classes.root} id='card'>
                <h4>{title}</h4>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    alt={alt}
                    height="140"
                    image={img}
                    title={title}
                    />
                </CardActionArea>
            </Card>
        </div>
        
    );
}

export default Cards;