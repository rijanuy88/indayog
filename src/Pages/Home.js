// https://www.npmjs.com/package/react-apexcharts
import React from "react";
import "./Home.css";
import Sidebar from "../Components/Home/Sidebar";
import "react-image-gallery/styles/css/image-gallery.css";
import Charts from "../Components/Home/Charts";
import Carousel from "react-material-ui-carousel";
import { ImgGal } from "../Components/Home/ImgGal";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Standing from "../Components/Home/Standing";

import { useSpring, animated as a } from "react-spring";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    box: {
        position: "absolute",
        backgroundColor: "white",
        borderRadius: "26px 0 0 26px",
        height:"100%",
    },
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

function Home() {
    const classes = useStyles();
    const standing = {
        color: "#D51E49",
        transform: "rotate(270deg)",
        fontFamily: "boldstrom",
        width: "100%",
    };

    

    const [greetingStatus, displayGreeting] = React.useState(false);

    const contentProps = useSpring({
        //opacity: greetingStatus ? 1 : 0,
        // marginTop: greetingStatus ? 0 : -500
        right: greetingStatus ? 0 : -1400,
    
    });

    return (
        <div>
            <Grid
                style={{ width: "100%", margin: 0 }}
                container
                spacing={2}
                justifyContent="space-around"
            >
                <Grid item xs={4} md={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={4} md={6}>
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
                                >
                                    <Typography variant="h4" style={standing}>
                                        Indayog 2021 Cluster Standing
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={8}>
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

export default Home;
