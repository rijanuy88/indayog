import React from 'react'
import Profiles from '../Components/Twg/Profiles'
import { TwgData } from '../Components/Twg/TwgData'
import './TWG.css'


function TWG() {
    return (
        <div className='twg'>
            <h1>Meet the Team Behind Indayog 2021</h1>
            <div className="twg_images">
                {TwgData.map((twg) => {
                    return (
                        <Profiles img={twg.img} alt={twg.alt} name={twg.name} position={twg.position} />
                    )
                })}
                
            </div>
        </div>
    )
}

export default TWG
