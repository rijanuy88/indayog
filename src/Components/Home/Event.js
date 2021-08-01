import React from 'react'
import './Event.css'

function Event({img, alt, link}) {
    return (
        <div className='event'>
            <img src={img} alt={alt}/>
            <div className="event_details">
                <h4>{alt}</h4>
                <h5>{link}</h5>
            </div>
        </div>
    )
}

export default Event
