import React from 'react'
import Event from './Event'
import { eventDataNext } from './eventDataNext'
import { eventDataNow } from './eventDataNow'
import './Sidebar.css'
import Tweets from './Tweets'

function Sidebar() {
    
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <h3 id='#now'>Now Happening</h3>
                <div className="sidebar_eventNow">
                    {eventDataNow.map((now) => {
                        return (
                            <Event img={now.img} name={now.name} link={now.Link} />
                        )
                    })}
                </div>
                <hr />
                <h3 id='#next'>Up Next</h3>
                <div className="sidebar_eventNext">
                    {eventDataNext.map((next) => {
                        return (
                            <Event img={next.img} name={next.name} link={next.Link} />
                        )
                    })}
                </div>

                
            </div>
            <div className="sidebar_bottom">
                {/* SAMAHAN Twitter Tweets */}
                <h4>SAMAHAN Twitter Tweets</h4>
                <Tweets />
            </div>
        </div>
    )
}

export default Sidebar
