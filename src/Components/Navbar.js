import React from 'react'
// import logo from './logo.svg'
import { links } from '../data'
import './Navbar.css'

const Navbar = () => {
    const handleClick = (e) => {
        e.preventDefault()
        const target = e.target.getAttribute('href')
        const location = document.querySelector(target).offsetTop
        // const location = document.querySelector(target)
        // console.log(location);

        window.scrollTo({
            left: 0,
            top: location - 64,
        })
    }
    
    return (
        <nav className='navbar sticky'>
            <div className='nav-center'>
                {/* <img src={logo} alt='smooth scroll' /> */}
                <div className="header_left">
                    <h2>INDAYOG 2021</h2>
                    <h4>73rd Ateneo Fiesta</h4>
                </div>
                <div className="header_right">
                {links.map((link) => {
                    return (
                    <a href={link.url} key={link.id} onClick={handleClick}>
                        {link.text}
                    </a>
                    )
                })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar