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
    
    const standing = {
        color: "#D51E49",
        transform: "rotate(270deg)",
        fontFamily: "boldstrom",
    };


    return (
        <Grid container spacing={2} justifyContent="space-around" alignItems="flex-start">
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
            {/* <Grid item md={12}> */}
                {/* <Typography variant="h2" style={standing}>Indayog 2021 Cluster Standing</Typography> */}
                {/* <div className="home_chart"> */}
                    {/* <Charts /> */}
                    {/* judging updates */}
                    {/* <Typography variant="h2">Judging Updates</Typography> */}
                {/* </div> */}
            {/* </Grid> */}
        </Grid>
    )
}

export default Home
