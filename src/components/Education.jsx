import React from 'react'
import education_bg from '../imgs/education_bg.jpg'

const Education = () => {
    return (
        <div id="education">
            <h1 className="educationBanner" style={{backgroundImage: `url(${education_bg})`}}>Education</h1>
            {/* Coding Dojo */}
            <div className="school">
                <h1>Coding Dojo</h1>
                <h3>Web Development Course</h3>
                <h3>Online | March, 2022 - July, 2022</h3>
                <p className="educationDetails">Certificate of Full Stack Development in Python, Java, and MERN</p>
            </div>
            {/* Devry University */}
            <div className="school">
                <h1>DeVry University</h1>
                <h3>Computer Science</h3>
                <h3>Online | July, 2010 - August, 2011</h3>
                <p className="educationDetails">Coursework towards a Bachelor's Degree in Computer Engineering</p>
            </div>
            {/* Wyoming Technical Institue */}
            <div className="school">
                <h1>Wyoming Technical Institute</h1>
                <h3>Automotive, Desiel and Management Courses</h3>
                <h3>Laramie, WY | October, 2004 - September, 2005</h3>
                <p className="educationDetails">Associates Degree in Specialized Technology in Automotive with Management</p>
            </div>
            {/* Lindbergh High School */}
            <div className="school">
                <h1>Lindbergh High School</h1>
                <h3>Renton, WA | 2000 - 2004</h3>
                <p className="educationDetails">High School Diploma</p>
            </div>
        </div>
    )
}

export default Education