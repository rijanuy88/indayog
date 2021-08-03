import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Charts from "./Charts";
import Event from "./Event";
import { judgingData } from './judgingData.js'

function Standing() {
    const standing = {
        color: "#D51E49",
        transform: "rotate(270deg)",
        fontFamily: "boldstrom",
        fontSize: "3.18vh",
    };
    const judging = {
        color: "#661693",
        fontFamily: "boldstrom",
        fontSize: "3.18vh",
    };

    return (
        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={1}>
            <Grid direction="row" item xs={12} sm={6}>
                <Charts />
            </Grid>
            <hr/>
            <Grid direction="row" item xs={12} sm={6}>
                <Typography variant="h2" style={judging}>
                    Judging Updates
                </Typography>
                {judgingData.map((now) => {
                    return (
                        <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
                    )
                })}
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
