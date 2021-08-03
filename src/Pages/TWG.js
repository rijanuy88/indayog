import React from 'react'
import Profiles from '../Components/Twg/Profiles'
import { TwgData } from '../Components/Twg/TwgData'
import Typography from '@material-ui/core/Typography';
import { Button, Grid } from '@material-ui/core';
import Gradient from 'rgt'
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '100vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/TWG BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    buttonStyle: {
        background:"white",
        fontSize:"2rem",
        padding: "10px",
        alignItems:"center",
        paddingLeft:"20px",
        paddingRight:"20px",
        color: "linear-gradient(to right, #CC2552 0%, #661693 100%)",
        borderRadius:"20px",
        marginBottom:"20px",
        marginLeft:"20px",
    }
}));

function TWG({ forwardedRef }) {
    const classes = useStyles();

    return (
        <Grid container direction="column" alignItems="center" className={classes.rootContainer} innerRef={forwardedRef}>
            <Grid item>
                <Typography variant="h1" style={{fontFamily:'america',fontSize:'3rem',marginBottom:"65px",color:'white'}}>
                    Meet the Team Behind {' '}  
                    <Button className={classes.buttonstyle}>
                        <Gradient dir="right-to-left" from="#CC2552" to="#661693" >
                            Indayog 2021
                        </Gradient>
                    </Button>
                </Typography>
            </Grid>
            <Grid item>
                <Grid container justify="center" alignItems="center">
                    {TwgData.map((twg) => {
                        return (
                            <Grid item xs={2}>
                                <Profiles key={twg.id} img={twg.img} alt={twg.alt} name={twg.name} position={twg.position} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default handleViewport(TWG)
