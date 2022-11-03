import React from 'react';
import contact_bg from '../imgs/contact_bg.jpg';
import github_icon from '../imgs/github_icon.png';
import linkedin_icon from '../imgs/linkedin_icon.png';
import pdf_icon from '../imgs/pdf_icon.png';
import email_icon from '../imgs/email_icon.png';
import resume from '../files/Resume.pdf'

const Contact = () => {
    return (
        <div id="contact">
            <h1 className="contactBanner" style={{backgroundImage: `url(${contact_bg})`}}>Contact Me</h1>
            <div className="contactSection">
                <div className="contactDiv">
                    <div className="iconDiv">
                        <a href="mailto: luty0125@gmail.com"><img src={email_icon} alt="email" className="icon"/></a>
                    </div>
                    <h3 className="contactName">Email</h3>
                </div>
                <div className="contactDiv">
                    <div className="iconDiv">
                        <a href="https://www.linkedin.com/in/james-luty-01286344/" target="_blank" rel="noreferrer"><img src={linkedin_icon} alt="LinkedIn" className="icon"/></a>
                    </div>
                    <h3 className="contactName">LinkedIn</h3>
                </div>
                <div className="contactDiv">
                    <div className="iconDiv">
                        <a href="https://github.com/jamesluty" target="_blank" rel="noreferrer"><img src={github_icon} alt="github" className="icon"/></a>
                    </div>
                    <h3 className="contactName">GitHub</h3>
                </div>
                <div className="contactDiv">
                    <div className="iconDiv">
                        <a href={resume} target="_blank" rel="noreferrer"><img src={pdf_icon} alt="pdf" className="icon"/></a>
                    </div>
                    <h3 className="contactName">Resume</h3>
                </div>
            </div>
            <h2 className="footer">James Luty</h2>
        </div>
    )
}

export default Contact
