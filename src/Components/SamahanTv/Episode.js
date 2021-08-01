import React from 'react'
import './Episode.css'
import Youtube from './Youtube'
import Typography from '@material-ui/core/Typography';

function Episode({embedId,episode,description}) {
    return (
        <div className='episode'>
            <div className="episode_left">
                {/* <img src={img} alt={alt} /> */}
                <Youtube embedId={embedId} />
            </div>
            <div className="episode_right">
                <Typography variant="h2">{episode}</Typography>
                <Typography variant="h3">{description}</Typography>
            </div>
        </div>
    )
}

export default Episode
