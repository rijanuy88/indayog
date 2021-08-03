import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
        image: {
            width: 58,
            height: 58,
            borderRadius: 10,
        },
        details:{
            paddingLeft: 15,
            alignContent:"center",
            
        }
    });


const via = {
    color:"#AAAAAA",
    fontSize:"1.9vh",
    fontWeight:"700",
    fontFamily:"Monteserrat",
    lineHeight:"2.4vh",
};
const name = {
    fontSize:"2.4vh",
    fontWeight:"800",
    fontFamily:"Monteserrat",
    lineHeight:"2.9vh",
};
const grid = {
    marginBottom:"20px",
    marginTop:"20px",
};



function Event({img, alt, link}) {
    const classes = useStyles();
    return (
        <div className='event'>
            <Grid style={grid} direction="row" container wrap="nowrap" spacing={2} >
                <img className={classes.image} src={img} alt={alt}/>
                <Grid className={classes.details} direction="column" container wrap="nowrap" spacing={0} >
                    <Typography variant="h4" style={name}>{alt}</Typography>
                    <Typography variant="h5" style={via}>{link}</Typography>
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
