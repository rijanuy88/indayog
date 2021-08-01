import React from 'react'
import Profiles from '../Components/Twg/Profiles'
import { TwgData } from '../Components/Twg/TwgData'
import './TWG.css'
import Typography from '@material-ui/core/Typography';

function TWG() {
    return (
        <div className='twg'>
            <Typography variant="h1">Meet the Team Behind Indayog 2021</Typography>
            <div className="twg_images">
                {TwgData.map((twg) => {
                    return (
                        <Profiles key={twg.id} img={twg.img} alt={twg.alt} name={twg.name} position={twg.position} />
                    )
                })}
                
            </div>
        </div>
    )
}

export default TWG
