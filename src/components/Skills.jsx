import React from 'react';
import skills_bg from '../imgs/skills_bg.jpg';
import java_icon from '../imgs/java_icon.png';
import python_icon from '../imgs/python_icon.png';
import js_icon from '../imgs/js_icon.png';
import html_icon from '../imgs/html_icon.png';
import css_icon from '../imgs/css_icon.png';
import spring_icon from '../imgs/spring_icon.png';
import flask_icon from '../imgs/flask_icon.png';
import node_icon from '../imgs/node_icon.png';
import react_icon from '../imgs/react_icon.png';
import express_icon from '../imgs/express_icon.png';
import bootstrap_icon from '../imgs/bootstrap_icon.png';
import mysql_icon from '../imgs/mysql_icon.png';
import mongodb_icon from '../imgs/mongodb_icon.png';
import json_icon from '../imgs/json_icon.png';
import git_icon from '../imgs/git_icon.png';
import jenkins_icon from '../imgs/jenkins_icon.png';
import jira_icon from '../imgs/jira_icon.png';
import confluence_icon from '../imgs/confluence_icon.png';
import postman_icon from '../imgs/postman_icon.png';

const Skills = () => {
    return (
        <div id="skills">
            <h1 className="skillsBanner" style={{backgroundImage: `url(${skills_bg})`}}>Skills</h1>
            <div>
                <h1 className="skillsHeader">Languages</h1>
                {/* Languages */}
                <div className="skills">
                    <div className="skillsIcon">
                        <div className="iconDiv">
                            <img src={java_icon} alt="java" className="icon"/>
                        </div>
                        <h3 className="skillName">Java</h3>
                    </div>
                    <div className="skillsIcon">
                        <div className="iconDiv">
                            <img src={python_icon} alt="python" className="icon"/>
                        </div>
                        <h3 className="skillName">Python</h3>
                    </div>
                    <div className="skillsIcon">
                        <div className="iconDiv">
                            <img src={js_icon} alt="javascript" className="icon"/>
                        </div>
                        <h3 className="skillName">JavaScript</h3>
                    </div>
                    <div className="skillsIcon">
                        <div className="iconDiv">
                            <img src={html_icon} alt="html" className="icon"/>
                        </div>
                        <h3 className="skillName">HTML</h3>
                    </div>
                    <div className="skillsIcon">
                        <div className="iconDiv">
                            <img src={css_icon} alt="css" className="icon"/>
                        </div>
                        <h3 className="skillName">CSS</h3>
                    </div>
                </div>
                <hr />
                {/* Frameworks/Libraries */}
                <div>
                    <h1 className="skillsHeader">Frameworks/Libraries</h1>
                    <div className="skills">
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={spring_icon} alt="spring" className="icon"/>
                            </div>
                            <h3 className="skillName">Spring Boot</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={flask_icon} alt="flask" className="icon"/>
                            </div>
                            <h3 className="skillName">Flask</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={node_icon} alt="node" className="icon"/>
                            </div>
                            <h3 className="skillName">Node.js</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={react_icon} alt="react" className="icon"/>
                            </div>
                            <h3 className="skillName">React.js</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={express_icon} alt="express" className="icon"/>
                            </div>
                            <h3 className="skillName">Express.js</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={bootstrap_icon} alt="bootstrap" className="icon"/>
                            </div>
                            <h3 className="skillName">BootStrap</h3>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Databases */}
                <div>
                    <h1 className="skillsHeader">Databases</h1>
                    <div className="skills">
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={mysql_icon} alt="mysql" className="icon"/>
                            </div>
                            <h3 className="skillName">MySQL</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={mongodb_icon} alt="mongodb" className="icon"/>
                            </div>
                            <h3 className="skillName">MongoDB</h3>
                        </div>
                    </div>
                </div>
                <hr />
                {/* Tools */}
                <div>
                    <h1 className="skillsHeader">Tools</h1>
                    <div className="skills">
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={json_icon} alt="json" className="icon"/>
                            </div>
                            <h3 className="skillName">JSON</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={git_icon} alt="git" className="icon"/>
                            </div>
                            <h3 className="skillName">GIT</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={jenkins_icon} alt="jenkins" className="icon"/>
                            </div>
                            <h3 className="skillName">Jenkins</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={jira_icon} alt="jira" className="icon"/>
                            </div>
                            <h3 className="skillName">Jira</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={confluence_icon} alt="confluence" className="icon"/>
                            </div>
                            <h3 className="skillName">Confluence</h3>
                        </div>
                        <div className="skillsIcon">
                            <div className="iconDiv">
                                <img src={postman_icon} alt="postman" className="icon"/>
                            </div>
                            <h3 className="skillName">Postman</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills