import React from 'react'
import './Event.css'

function Event({img, name, link}) {
    return (
        <div className='event'>
            <img src={img} />
            <div className="event_details">
                <h4>{name}</h4>
                <h5>{link}</h5>
            </div>
        </div>
    )
}

export default Event
