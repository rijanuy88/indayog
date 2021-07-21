import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

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
                <h3><Link activeClass="active" to="secondInsideContainer" spy={true} smooth={true} duration={250} containerId="containerElement" style={{ display: 'inline-block', margin: '20px' }}>Clusters</Link></h3>
                <h3>Schedule</h3>
                <h3>SAMAHAN TV</h3>
                <h3>Fiesta TWG</h3>
            </div>
        </div>
    )
}

export default Header
