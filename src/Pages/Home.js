// https://www.npmjs.com/package/react-apexcharts
import React from "react";
import Sidebar from "../Components/Home/Sidebar";
import Carousel from "react-material-ui-carousel";
import { ImgGal } from "../Components/Home/ImgGal";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Standing from "../Components/Home/Standing";

import { useSpring, animated as a } from "react-spring";
import useWindowDimensions from "../Utils/useWindowDimensions";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import handleViewport from 'react-in-viewport';

const useStyles = makeStyles((theme) => ({
    rootContainer: {
        minHeight: '100vh',
        padding: theme.spacing(4),
        paddingTop: '4rem',
        paddingBottom: '4rem',
        backgroundImage: 'url("/assets/Backgrounds/Home BG.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    box: {
        position: "absolute",
        backgroundColor: "white",
        borderRadius: "26px 0 0 26px",
        height: "100%",
        top: 0,
    },
    standing: {
        color: "#D51E49",
        fontFamily: "boldstrom",
        width: "100%",
    }
}));

function Image(props) {
    return (
        <Card style={{ borderRadius: 20 }}>
            <CardMedia
                component="img"
                alt={`image_${props.key}`}
                height="100%"
                width="100%"
                image={props.item.original}
                title={`image_${props.key}`}
            />
        </Card>
    );
}

function Home({ forwardedRef }) {
    const classes = useStyles();

    const { width } = useWindowDimensions();

    const [greetingStatus, displayGreeting] = React.useState(false);

    const contentProps = useSpring({
        //opacity: greetingStatus ? 1 : 0,
        // marginTop: greetingStatus ? 0 : -500
        // left: greetingStatus ? 200 : width - 200,
        left: greetingStatus ? 20 : width - 200,
    });

    return (
        <div className={classes.rootContainer} ref={forwardedRef}>
            <Grid
                style={{ width: "100%", margin: 0, position: 'relative' }}
                container
                spacing={2}
                justifyContent="space-around"
            >
                <Grid item xs={4} md={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={4} md={8}>
                    <Carousel autoPlay>
                        {ImgGal.map((img, i) => (
                            <Image item={img} key={i} />
                        ))}
                    </Carousel>
                </Grid>

                <Grid item xs={2} md={1} align="center">
                    {/* {!greetingStatus ? (
                        <div
                            style={{ backgroundColor: "white", height: "100%" }}
                            onClick={() => displayGreeting(a => !a)}
                        >
                            <Typography style={standing}>
                                Indayog 2021 Cluster Standing
                            </Typography>
                        </div>
                    ) : ( */}
                    <a.div className={classes.box} style={contentProps}>
                        <Grid
                            container
                            alignItems="center"
                            style={{ padding: 10 }}
                        >
                            <Grid item xs={2}>
                                <Button
                                    onClick={() => displayGreeting(a => !a)}
                                    style={{ transform: "rotate(270deg)" }}
                                    fullWidth
                                >
                                    <Grid item>
                                        <img src='/public/assets/Buttons/Artboard 1@4x.png' alt="FiestaYarn" />
                                    </Grid>
                                    
                                    <Typography variant="h4" className={classes.standing}>
                                        Indayog 2021 Cluster Standing
                                    </Typography>
                                    
                                </Button>
                            </Grid>
                            <Grid item xs={8}  direction="column">
                                <Standing />
                            </Grid>
                            
                        </Grid>
                    </a.div>
                    {/* )} */}
                </Grid>

                {/* <Grid item md={12}> */}
                {/* <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography> */}
                {/* <div className="home_chart"> */}
                {/* <Charts /> */}
                {/* judging updates */}
                {/* <Typography variant="h2">Judging Updates</Typography> */}
                {/* </div> */}
                {/* </Grid> */}
            </Grid>
        </div>
    );
}

export default handleViewport(Home);
