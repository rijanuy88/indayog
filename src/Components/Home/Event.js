import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
// import './Event.css'

const useStyles = makeStyles({
        image: {
            width: 58,
            height: 58,
            radius: 10,
        },
        details:{
            paddingLeft: 15,
            
        }
    });

function Event({img, alt, link}) {
    const classes = useStyles();
    return (
        <div className='event'>
            <Grid direction="row" container wrap="nowrap" spacing={2} >
                <img className={classes.image} src={img} alt={alt}/>
                <Grid className={classes.details} direction="column" container wrap="nowrap" spacing={0} >
                    <h4>{alt}</h4>
                    <h5>{link}</h5>
                </Grid>
            </Grid>
        </div>

        // <div className='event'>
        //     <img src={img} alt={alt}/>
        //     <div className="event_details">
        //         <h4>{alt}</h4>
        //         <h5>{link}</h5>
        //     </div>
        // </div>
    )
}

export default Event
