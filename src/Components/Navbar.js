import React from 'react'
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
                <div className="header_left">
                    <a href='#home' key='1' onClick={handleClick}>INDAYOG 2021 <br></br>73rd Ateneo Fiesta </a>
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