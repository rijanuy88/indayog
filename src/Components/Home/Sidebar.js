import React from 'react'
import './Sidebar.css'
import Tweets from './Tweets'

function Sidebar() {
    
    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <h3>Now Happening</h3>
                <h4>event</h4>
                <h4>event</h4>
                <h3>Up Next</h3>
                <h4>event</h4>
                <h4>event</h4>
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
