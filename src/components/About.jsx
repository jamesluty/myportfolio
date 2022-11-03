import React, { useEffect } from 'react'
import hawaii from '../imgs/hawaii_pic.jpg'
import airplane from '../imgs/airplane.jpg'
import seahawks from '../imgs/seahawks.jpg'
import skydiving from '../imgs/skydiving.jpg'

const About = () => {

    useEffect(() => {
        let slideIdx = 0;
        let imgArray = ['slideShow1', 'slideShow2', 'slideShow3', 'slideShow4'];
        setInterval(() => {
            if(slideIdx === 0){
                document.getElementById(imgArray[3]).style.display = "none";
            }
            document.getElementById(imgArray[slideIdx]).style.display = 'inherit';
            if(slideIdx > 0){
                document.getElementById(imgArray[slideIdx-1]).style.display = "none";
            } 
            
            slideIdx++;
            if(slideIdx > imgArray.length-1){
                slideIdx = 0;
            }
        }, 3000)
    }, [])


    return (
        <div id="about">
            <div className="aboutContent">
                {/* About Me Section */}
                <div className="aboutLeft">
                    <h1 className="aboutHeader">About Me</h1>
                    <p className="smfont">Hi, my name is James Luty. I was born in Jacksonville, FL but grew up in Renton,
                        Washington. I started
                        out going to school for and working as an Automotive Technician.
                        I decided that wasn't the path I wanted to take in life and found a job as a manual tester for a
                        software company. That's when I realized that this is what I wanted
                        to do for the rest of my life. I started to teach myself how to program while still working and
                        finally
                        found the software bootcamp program at Coding Dojo. </p>
                </div>
                {/* Image Slideshow */}
                <div className="aboutRight smImg">
                    <img className="fade" src={hawaii} alt="hawaii_img" id="slideShow1"/>
                    <img className="fade" src={skydiving} alt="skydiving_img" id="slideShow2"/>
                    <img className="fade" src={airplane} alt="airplane_img" id="slideShow3"/>
                    <img className="fade" src={seahawks} alt="seahawks_img" id="slideShow4"/>
                </div>
            </div>
        </div>
    )
}

export default About