import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import Charts from "./Charts";

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
        // <Grid container direction="row" justifyContent="space-evenly" alignItems="center">

        //         <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography>
        //         <Charts />
        //         <hr/>
        //         <Typography variant="h2" style={judging}>Judging Updates</Typography>

        // </Grid>

        <div className="home_chart">
            {/* <Button onClick={() => displayGreeting(a => !a)}> */}
            {/* <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography> */}
            {/* </Button> */}
            <Charts />
            <hr />
            <Typography variant="h2" style={judging}>
                Judging Updates
            </Typography>
        </div>

        // <div className="home_chart">
        //     {/* <button onClick={() => displayGreeting(a => !a)} className="button">
        //         <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography>
        //     </button> */}

        //     {!greetingStatus ? (
        //         <div className="home_chart">
        //             <Button onClick={() => displayGreeting(a => !a)}>
        //                 <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography>
        //             </Button>
        //             <Charts />

        //             <hr />
        //             <Typography variant="h2" style={judging}>Judging Updates</Typography>
        //         </div>
        //     ) : (
        //         <a.div className="box" style={contentProps}>
        //             <div className="home_chart">
        //                 <Button onClick={() => displayGreeting(a => !a)}>
        //                     <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography>
        //                 </Button>
        //                 <Charts />

        //                 <hr />
        //                 <Typography variant="h2" style={judging}>Judging Updates</Typography>
        //             </div>
        //         </a.div>
        //     )}
        // </div>
    );
}

export default Standing;
