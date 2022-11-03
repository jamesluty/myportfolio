import React from 'react'
import gbtc from '../imgs/gbtc.jpg'
import project_bg from '../imgs/projects_bg.png'
import website_icon from '../imgs/website_icon.png'
import outdoor_adventure from '../imgs/outdoor_adventures.jpg'
import github_icon from '../imgs/github_icon.png'

const Projects = () => {
    return (
        <div id="projects">
            <h1 className="projectsBanner" style={{backgroundImage: `url(${project_bg})`}}>Projects</h1>
            <div className="projectContent">
                {/* Green Belt Tree Care Project */}
                <div className="project">
                    <div className="projectLeft">
                        <h1 className="gbtcTitle">Green Belt Tree Care LLC</h1>
                        <p className="projectDesc">Professional tree care company that provides a range of services related to tree care. Services all of Western Washington.</p>
                        <ul>
                            <li className="listItem">Private project built for a client</li>
                            <li className="listItem">Built using React</li>
                            <li className="listItem">Incorporated EmailJS to allow users to send emails to request a free quote</li>
                        </ul>
                        <div className="projectLinks">
                            <div className="linkDiv">
                                <div className="iconDi">
                                    <a href="http://www.greenbelttreecare.com" target="_blank" rel="noreferrer"><img className="linkIcon" src={website_icon} alt="website_icon"></img></a>
                                </div>
                                {/* <h4 className="projectText">Website</h4> */}
                            </div>
                        </div>
                    </div>
                    <div className="projectRight">
                        <img src={gbtc} alt="green_belt_tree_care" className="projectImg"/>
                    </div>
                </div>
                <hr />
                {/* Outdoor Adventure Project */}
                <div className="project">
                    <div className="projectLeft">
                        <h1 className="outdoorsTitle">Outdoor Adventures</h1>
                        <p className="projectDesc">Gives detailed information for different campsites and National Parks for each state. Information is pulled directly from National Parks Service API.</p>
                        <ul>
                            <li className="listItem">Built using Java with Spring Boot and Javascript for API calls</li>
                            <li className="listItem">Uses the National Park Service API to pull information for campsites and National Parks</li>
                        </ul>
                        <div className="projectLinks">
                            <a href="http://outdoor-adventures.james-luty.com/" target="_blank" rel="noreferrer"><img className="linkIcon" src={website_icon} alt="website_icon"></img></a>
                            <a href="https://github.com/jamesluty/national-park-service-information" target="_blank" rel="noreferrer"><img className="linkIcon" src={github_icon} alt="website_icon"></img></a>
                        </div>
                    </div>
                    <div className="projectRight">
                        <img src={outdoor_adventure} alt="outdoor_adventures" className="projectImg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects