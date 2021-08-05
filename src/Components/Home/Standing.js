import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Charts from "./Charts";
import Event from "./Event";
import { judgingData } from './judgingData.js'

function Standing() {
    const judging = {
        color: "#661693",
        fontFamily: "boldstrom",
        fontSize: "3.18vh",
    };

    return (
        <Grid container spacing={4} wrap="nowrap">
            <Grid item xs>
                <Charts />
            </Grid>
            <Grid item>
              <div style={{ 
                  backgroundColor: '#AAAAAA',
                  width: 1,
                  height: '100%'
               }} />
            </Grid>
            <Grid item xs>
                <Typography variant="h2" style={judging}>
                    Judging Updates
                </Typography>
                <Grid container direction="column" spacing={2}>
                    {judgingData.map((now) => {
                        return (
                            <Grid item>
                                <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
        </Grid>

        // <div className="home_chart">
        //     {/* <Button onClick={() => displayGreeting(a => !a)}> */}
        //     {/* <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography> */}
        //     {/* </Button> */}
        //     <Charts />
        //     <hr  style={{ transform: "rotate(270deg)" }} />

        //     <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
        //         <Typography variant="h2" style={judging}>
        //             Judging Updates
        //         </Typography>
        //         {judgingData.map((now) => {
        //             return (
        //                 <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
        //             )
        //         })}
        //     </Grid>
        // </div>
    );
}

export default Standing;
