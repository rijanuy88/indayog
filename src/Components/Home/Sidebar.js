import { Grid } from '@material-ui/core'
import React from 'react'
import Event from './Event'
import { eventDataNext } from './eventDataNext'
import { eventDataNow } from './eventDataNow'
import './Sidebar.css'
import Tweets from './Tweets'

function Sidebar() {
    
    return (
        <div className='sidebar'>
            <Grid direction="column" container wrap="nowrap" spacing={2} >
                <h3>Now Happening</h3>
                {eventDataNow.map((now) => {
                    return (
                        <Event img={now.img} key={now.id} alt={now.alt} link={now.link} />
                    )
                })}
                <hr />
                <h3>Up Next</h3>
                {eventDataNext.map((next) => {
                    return (
                        <Event img={next.img} key={next.id} alt={next.alt} link={next.link} />
                    )
                })}
                <h4>SAMAHAN Twitter Tweets</h4>
                <Tweets />
            </Grid>
        </div>

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
