import React from 'react'
import Episode from '../Components/Episode'
import './Tv.css'

function Tv() {
    return (
        <div className='tv'>
            <div className="tv_left">
                <div className="tv_left_poster">
                    <img src="https://venngage-wordpress-gallery.s3.amazonaws.com/uploads/2018/10/25.jpg" alt="" />
                </div>
            </div>
            <div className="tv_right">
                <h2>SAMAHAN TV?</h2>
                <h4>SAMAHAN TV DESCRIPTION</h4>
                <div className="tv_right_episodes">
                    <Episode img="https://images.template.net/wp-content/uploads/2016/04/27133811/Youtube-Thumbnail1.jpg?width=584" alt='ep 1' episode ='Episode 1' description='episode 1 description' />
                </div>
            </div>
        </div>
    )
}

export default Tv
