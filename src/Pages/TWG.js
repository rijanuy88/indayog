import React from 'react'
import Profiles from '../Components/Twg/Profiles'
import { TwgData } from '../Components/Twg/TwgData'
import './TWG.css'
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import Gradient from 'rgt'

function TWG() {
    const buttonstyle = {
        background:"white",
        fontSize:"2rem",
        // padding: "10px",
        alignItems:"center",
        // paddingLeft:"10px",
        color: "linear-gradient(to right, #CC2552 0%, #661693 100%)",
        borderRadius:"20px",
        marginBottom:"20px",
    };
    return (
        <div className='twg'>
            <Typography variant="h1" style={{fontFamily:'america',fontSize:'4rem',marginBottom:"65px",}}>
                Meet the Team Behind {' '}
                <Button style={buttonstyle}>
                    <Gradient dir="right-to-left" from="#CC2552" to="#661693">
                        Indayog 2021
                    </Gradient>
                </Button>
            </Typography>

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
