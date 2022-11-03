import React from 'react'
import experience_bg from '../imgs/experience_bg.jpg'

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="experienceBanner" style={{backgroundImage: `url(${experience_bg})`}}>Experience</h1>
            {/* Freelance Web Developer Position */}
            <div className="position">
                <h1 className="positionTitle">Freelance Web Developer</h1>
                <h2>Self-employed</h2>
                <h3>Covington, WA | August, 1st 2022 - Present</h3>
                <ul>
                    <li className="positionDetails">Work with small businesses to plan, design, integrate and deploy a website for their business.</li>
                </ul>
            </div>
            {/* Les Schwab Tire Center Position */}
            <div className="position">
                <h1 className="positionTitle">Brake and Alignment Techician</h1>
                <h2>Les Schwab Tire Center</h2>
                <h3>Covington, WA | June, 1st 2021 - March 19th, 2022</h3>
                <ul>
                    <li className="positionDetails">Diagnosed and fixed brake and suspension components on customers vehicles while providing an industry leading customer service experience for the customer</li>
                </ul>
            </div>
            {/* VoiceBox Technologies Position */}
            <div className="position">
                <h1 className="positionTitle">Software Test Engineer</h1>
                <h2>VoiceBox Technologies</h2>
                <h3>Bellevue, WA | August 25th, 2016 - January 31st, 2019</h3>
                <ul>
                    <li className="positionDetails">Performed both manual and automation testing for Toyota in-dash navigation systems to develop a better conversational UI experience for the consumer</li>
                    <li className="positionDetails">Wrote automation test scripts using Shell/Batch scripts and Groovy running tests and analyzed the results</li>
                    <li className="positionDetails">Logged bugs and feature requests in Jira and used previous bugs to develop future regression testing</li>
                    <li className="positionDetails">Worked as lead QA on a demo product for a new client for a text-based chat-bot for their website</li>
                </ul>
            </div>
            {/* TEKsystem - T-Mobile Position */}
            <div className="position">
                <h1 className="positionTitle">Software Tester</h1>
                <h2>TEKsystems - T-Mobile</h2>
                <h3>Redmond, WA | January 26th, 2015 - May 29th, 2015</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of T-Mobile preloaded apps on Android and iOS tablets and smartphones before OTA software updates</li>
                    <li className="positionDetails">Created test plans and executed test cases on specific devices targeted by an OTA update</li>
                    <li className="positionDetails">Reported and tracked all bugs using Jira</li>
                </ul>
            </div>
            {/* TEKsystems - Amazon Position */}
            <div className="position">
                <h1 className="positionTitle">Software Tester</h1>
                <h2>TEKsystems - Amazon</h2>
                <h3>Seattle, WA | October 24th, 2014 - December 29th, 2014</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of Amazon Shopping application on Amazon Fire tablets and phones</li>
                    <li className="positionDetails">Created test plans and executed test cases based on the type of device being tested</li>
                    <li className="positionDetails">Reported and tracked all bugs found using Jira</li>
                </ul>
            </div>
            {/* Nuance Communication Position */}
            <div className="position">
                <h1 className="positionTitle">QA Engineer</h1>
                <h2>Nuance Communications</h2>
                <h3>Seattle, WA | December 8th, 2011 - February 15th, 2013</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of Swype keyboard and Nuance Dragon software</li>
                    <li className="positionDetails">Created test plans and executed test cases on a variety of devices from Android, Symbian, Meego, Windows 7 and Amazon Kindle</li>
                    <li className="positionDetails">Reported and tracked all bugs found using Jira</li>
                    <li className="positionDetails">Created training documentation to train new employees and test tools and procedures</li>
                </ul>
            </div>
            {/* Swype Inc. Position */}
            <div className="position">
                <h1 className="positionTitle">Software Tester</h1>
                <h2>Swype Inc.</h2>
                <h3>Seattle, WA | May 15th, 2011 - December 7th, 2011</h3>
                <ul>
                    <li className="positionDetails">Performed manual testing of Swype keyboard</li>
                    <li className="positionDetails">Created test plans and executed test cases on a variety of Android devices</li>
                </ul>
            </div>
            {/* ADC Telecommunications Position */}
            <div className="position">
                <h1 className="positionTitle">Equipement Installer</h1>
                <h2>ADC Telecommunications</h2>
                <h3>Washington State | August, 2010 - April, 2011</h3>
                <ul>
                    <li className="positionDetails">Worked inside Central Offices, Switch Centers and Data Centers for various telecommunications providers across Washington State</li>
                    <li className="positionDetails">Installed bays and cabinets with servers, routers, switch panels and other telecommunications equipment</li>
                    <li className="positionDetails">Pull fiber optic, DS1, DS3 and other cabling to connect installed equipment to existing live equipment</li>
                    <li className="positionDetails">Test equipment to make sure everything is runniner properly</li>
                </ul>
            </div>
            {/* Flextronics Position */}
            <div className="position">
                <h1 className="positionTitle">Customer Service Technician 3</h1>
                <h2>Flextronics</h2>
                <h3>Issaquah, WA | March, 2008 - June, 2010</h3>
                <ul>
                    <li className="positionDetails">Worked inside a Verizon Wireless retail store to troubleshoot customer devices such as Cell phones, Smartphones, Netbooks, and Aircards</li>
                    <li className="positionDetails">Helped customers with account questions, new lines of service and upgrades</li>
                    <li className="positionDetails">Ranked number one several months for my ability to troubleshoot devices, maintaining high sales metrics, and for providing an exceptional customer service experience</li>
                </ul>
            </div>
        </div>
    )
}

export default Experience