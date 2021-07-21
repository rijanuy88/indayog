import React from 'react'
import './Header.css'
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className='header'>
            {/* left title */}
            <div className="header_left">
                <h2>INDAYOG 2021</h2>
                <h4>73rd Ateneo Fiesta</h4>
            </div>
            {/* clickables */}
            <div className="header_right">
                <h3>Home</h3>
                <h3>Clusters</h3>
                <h3>Schedule</h3>
                <h3>SAMAHAN TV</h3>
                <h3>Fiesta TWG</h3>
            </div>
        </div>
    )
}

export default Header
