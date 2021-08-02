import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import Charts from './Charts'



function Standing() {
    const standing = {
        color: "#D51E49",
        transform: "rotate(270deg)",
        fontFamily: "boldstrom",
    };
    const judging = {
        color: "#661693",
        fontFamily: "boldstrom",
        fontSize: "3.18vh",
    };
    return (
        <Grid item md={12} direction="row" justifyContent="space-evenly" alignItems="center">
            <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography>
            <Grid item xs={3}>
                <Charts />
            </Grid>
            <Grid item xs={3}>
                <Typography variant="h2" style={judging}>Judging Updates</Typography>
            </Grid>
            {/* <div className="home_chart"> */}
                {/* <Charts /> */}
                {/* judging updates */}
                {/* <hr /> */}
                {/* <Typography variant="h2" style={judging}>Judging Updates</Typography> */}
            {/* </div> */}
        </Grid>
    )
}

export default Standing
