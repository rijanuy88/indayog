import { Grid } from '@material-ui/core'
import React from 'react'
import Event from './Event'
import { eventDataNext } from './eventDataNext'
import { eventDataNow } from './eventDataNow'
import './Sidebar.css'
import Tweets from './Tweets'
import Typography from '@material-ui/core/Typography';

function Sidebar() {

    const now = {
        color:"#F78701",
        fontSize:"3.2vh",
        textAlign:"center",
        fontWeight:"400",
        marginBottom:"20px",
    };
    const next2 = {
        color:"#545454",
        fontSize:"3.2vh",
        textAlign:"center",
        fontWeight:"400",
        marginBottom:"20px",
    };

    const grid = {
        background: "#FFFFFF",
        boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
        borderRadius: "20px",
        // position: "absolute",
        width: "320px",
        // height: "375px",
        left: "107px",
        top: "201.98px",
        paddingLeft:"47px"
        
    }
    const bar = {
        // position: "absolute",
        width: "257px",
        textAlign:"center",
        border: "1px solid #CECECE",
        marginBottom:"11px",
        
    }


    return (
        <Grid style={grid} direction="column" container wrap="nowrap" spacing={2} >
            <Grid item>
                <Typography variant="h3" style={now}>Now Happening</Typography>
                {eventDataNow.map((now) => {
                    return (
                        <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
                    )
                })}
            </Grid>
            <Grid item>
                <hr style={bar}/>
                <Typography variant="h3" style={next2}>Up Next</Typography>
                {eventDataNext.map((next) => {
                    return (
                        <Event img={next.img} key={next.id} alt={next.alt} link={next.link} />
                    )
                })}
            </Grid>
            {/* <Grid item>
                <hr />
            </Grid>
            <Grid item>
                <h4>SAMAHAN Twitter Tweets</h4>
                <Tweets />
            </Grid> */}
        </Grid>

        // <div className='sidebar'>
        //     <div className="sidebar_top">
        //         <h3 id='#now'>Now Happening</h3>
        //         <div className="sidebar_eventNow">
        //             {eventDataNow.map((now) => {
        //                 return (
        //                     <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
        //                 )
        //             })}
        //         </div>
        //         <hr />
        //         <h3 id='#next'>Up Next</h3>
        //         <div className="sidebar_eventNext">
        //             {eventDataNext.map((next) => {
        //                 return (
        //                     <Event img={next.img} key={next.id} alt={next.alt} link={next.link} />
        //                 )
        //             })}
        //         </div>

                
        //     </div>
        //     <div className="sidebar_bottom">
        //         {/* SAMAHAN Twitter Tweets */}
        //         <h4>SAMAHAN Twitter Tweets</h4>
        //         <Tweets />
        //     </div>
        // </div>
    )
}

export default Sidebar
