import React from 'react'
import Episode from '../Components/SamahanTv/Episode'
import logo from '../Assets/Logo/Samahan TV Logo@4x.png'
import Typography from '@material-ui/core/Typography';
import { tvData } from '../Components/SamahanTv/tvData'
import './Tv.css'
import Grid from "@material-ui/core/Grid";

const right ={
    backgroundImage:"url('../Assets/Backgrounds/SAMAHAN TV BG.jpg')",
}

function Tv() {
    return (
        <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
            <Grid style={right} container direction="column" justifyContent="center" alignItems="center" xs={6}>
                <img src={logo} style={{width:"50%",height:"50%" }} alt="martin Hall" />
                <Grid>
                    <Typography variant="p">SAMAHAN TV is an initiative for the upcoming 73rd Ateneo Fiesta for the purposes of information dissemination and to spark interest of Atenans to anticipate the biggest event in Ateneo. 
                The Fiesta Segment will comprise of six (6) episodes highlighting different events and provide a general overview for the upcoming activities.</Typography>
                </Grid>
                
            </Grid>
            <Grid xs={6} container direction="column" justifyContent="space-between" alignItems="flex-start">
                <Typography variant="h3" style={{color: '#FFFF', fontFamily:'america'}}>Episode List</Typography>
                {tvData.map((tv) => {
                        return (
                            // <Episode img={tv.img} alt={tv.alt} episode={tv.episode} description={tv.description} />
                            <Episode key={tv.id} embedId={tv.embedId} episode={tv.episode} description={tv.description} />
                        )
                    })}
            </Grid>

        </Grid>

        // <div className='tv'>
        //     <div className="tv_left">
        //         <div className="tv_left_poster">
        //             {/* <img src={bg} alt="martin Hall" /> */}
        //         </div>
        //     </div>
        //     <div className="tv_right">
        //         <Typography variant="h2">SAMAHAN TV?</Typography>
        //         <Typography variant="h4">SAMAHAN TV DESCRIPTION</Typography>
        //         <div className="tv_right_episodes">
        //             {tvData.map((tv) => {
        //                 return (
        //                     // <Episode img={tv.img} alt={tv.alt} episode={tv.episode} description={tv.description} />
        //                     <Episode key={tv.id} embedId={tv.embedId} episode={tv.episode} description={tv.description} />
        //                 )
        //             })}

        //         </div>
        //     </div>
        // </div>
    )
}

export default Tv
