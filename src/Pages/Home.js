// https://www.npmjs.com/package/react-apexcharts
import React from 'react'
import './Home.css'
import Sidebar from '../Components/Home/Sidebar'
import "react-image-gallery/styles/css/image-gallery.css";
import Charts from '../Components/Home/Charts';
import Carousel from 'react-material-ui-carousel';
import { ImgGal } from '../Components/Home/ImgGal';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// import { Grid, makeStyles, Paper } from '@material-ui/core';

// const useStyles = makeStyles((theme) =>({
//         root: {
//             maxWidth: 345,
//         },

//         theme: {
//             flexGrow: 1,
//             overflow: 'hidden',
//             padding: theme.spacing(0, 3),
//         },
//         paper: {
//             maxWidth: 400,
//             margin: `${theme.spacing(1)}px auto`,
//             padding: theme.spacing(2),
//         },     
//     }));

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
    )
}

function Home() {
    // const classes = useStyles();
    return (
        // <div className='home'>
        //     <Grid direction="row" container wrap="nowrap" spacing={2}>
        //         <Paper className={classes.paper} alignItems="center">
        //             <Sidebar /> 
        //         </Paper>
                
        //         <Grid direction="row" container wrap="nowrap" spacing={2}>
        //             <ImageGallery items={ImgGal} />
        //             <h2>Indayog 2021 Cluster Standing</h2>
        //             <Charts />
        //             <h3>Judging Updates</h3>
        //         </Grid>
        //     </Grid>
        // </div>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid item xs={12} md={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} md={8}>
                <Carousel autoPlay>
                    { ImgGal.map((img, i) => (
                        <Image item={img} key={i} />
                    )) }
                </Carousel>
            </Grid>
            <Grid item md={12}>
                <Typography variant="h2">Indayog 2021 Cluster Standing</Typography>
                <div className="home_chart">
                    <Charts />
                    {/* judging updates */}
                    <Typography variant="h3">Judging Updates</Typography>
                </div>
            </Grid>
        </Grid>
    )
}

export default Home
