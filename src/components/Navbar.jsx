import React from 'react'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navTitle">
                <h1>James Luty</h1>
            </div>
            <ul className="navWrapper sm">
                <li className='navLink'>
                    <a href="#about">About Me</a>
                </li>
                <li className='navLink'>
                    <a href="#projects">Projects</a>
                </li>
                <li className='navLink'>
                    <a href="#skills">Skills</a>
                </li>
                <li className='navLink'>
                    <a href="#experience">Experience</a>
                </li>
                <li className='navLink'>
                    <a href="#education">Education</a>
                </li>
                <li className='navLink'>
                    <a href="#contact">Contact Me</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar