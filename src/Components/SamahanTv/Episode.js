import React from 'react'
import './Episode.css'
import Youtube from './Youtube'

function Episode({img,alt,episode,description}) {
    return (
        <div className='episode'>
            <div className="episode_left">
                {/* <img src={img} alt={alt} /> */}
                <Youtube embedId="rokGy0huYEA" />
            </div>
            <div className="episode_right">
                <h2>{episode}</h2>
                <h3>{description}</h3>
            </div>
        </div>
    )
}

export default Episode
