import React from "react";
import { links } from "../data";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";
import logo from "../Assets/Logo/logo.png";

const Navbar = () => {
    const handleClick = e => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const location = document.querySelector(target).offsetTop;
        // const location = document.querySelector(target)
        // console.log(location);

        window.scrollTo({
            left: 0,
            top: location - 80,
            duration: 1500,
            delay: 100,
            smooth: "easeInOutQuint",
        });
    };

    return (
        <nav className="navbar sticky">
            <div className="nav-center">
                <div className="header_left">
                    {/* <a href='#home' key='1' onClick={handleClick}>INDAYOG 2021 <br></br>73rd Ateneo Fiesta </a> */}

                    <img
                        href="#home"
                        alt="home"
                        key="1"
                        onClick={handleClick}
                        src={logo}
                    />
                </div>
                <div className="header_right">
                    {links.map(link => {
                        return (
                            // <a href={link.url} key={link.id} onClick={handleClick}>
                            //     {link.text}
                            // </a>
                            <Link
                                to={link.url}
                                href={link.url}
                                key={link.id}
                                onClick={handleClick}
                                smooth={true}
                            >
                                {link.text}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
