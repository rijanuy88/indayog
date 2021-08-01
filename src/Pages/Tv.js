import React from 'react'
import Episode from '../Components/SamahanTv/Episode'
import logo from '../Assets/Logo/Samahan TV Logo@4x.png'
import bg from '../Assets/Backgrounds/1martinHall.jpg'
import { tvData } from '../Components/SamahanTv/tvData'
import './Tv.css'

function Tv() {
    return (
        <div className='tv'>
            <div className="tv_left">
                <div className="tv_left_poster">
                    <img src={bg} alt="martin Hall" />
                </div>
            </div>
            <div className="tv_right">
                <h2>SAMAHAN TV?</h2>
                <h4>SAMAHAN TV DESCRIPTION</h4>
                <div className="tv_right_episodes">
                    {tvData.map((tv) => {
                        return (
                            // <Episode img={tv.img} alt={tv.alt} episode={tv.episode} description={tv.description} />
                            <Episode key={tv.id} embedId={tv.embedId} episode={tv.episode} description={tv.description} />
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default Tv
