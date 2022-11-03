import React from 'react';
import banner_bg from '../imgs/banner_bg.jpg';

const Banner = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${banner_bg})` }}>
            <h1 className="jobType1">Software Engineer</h1>
            <h1 className="jobType2">Web Developer</h1>
            <h2>Java | Python | React | HTML | CSS | Javascript</h2>
        </div>
    )
}

export default Banner