import React from 'react'
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './about.css';

import { NodeCollapseOutlined } from '@ant-design/icons';

function About() {

    const style = {
        fontSize:'40px'
    }

    return (
        <div className="about-container">
            <div>
                <motion.div
                whileHover={{scale: 1.1, duration: 3}}
                animate={{ x: -50 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="about-heading"
                style={style}
                >
                    <h1>About Me</h1>
                </motion.div>
                    <div className="about-layout">
                    <img alt="biopic" src="#"/>
                <motion.div
                animate={{ x: 20 }}
                transition={{ ease: "easeOut", duration: 3}}
                className="bio">
                        <p>
                        I'm a full stack web developer with a passion for design and quality. 
                        Prior to my coding introduction, I was previously geared to go to medical school while in college.
                        However, I continually grew more curious as to how technology works for us to look up proper terminologies
                        in our everyday lives. This led me to follow my curiousity and get certified as a web developer and I haven't looked back since.
                        Technology is a mercurial and powerful tool for us to use for limitless opportunities and discoveries. 
                        </p>
                </motion.div>
                        <div className="about-buttons">
                            <NavLink to="/resume">
                                <motion.div
                                whileHover={{scale: 1.1, duration: 1}}
                                animate={{ x: 10 }}
                                transition={{ease:"easeIn", duration: 1}}
                                className="about-link"
                                >
                                    <h3>Resume </h3>
                                </motion.div>
                            {/* <img src="https://img.icons8.com/nolan/96/submit-resume.png"/> */}
                            </NavLink>
                            <NavLink to ="/skills">
                                <motion.div
                                whileHover={{scale: 1.1, duration: 1}}
                                animate={{ x: 10 }}
                                transition={{ease:"easeIn", duration: 1}}
                                className="about-link"
                                id="skill"
                                >
                                    <h3>Skillset </h3> 
                                </motion.div>
                                {/* <img src="https://img.icons8.com/nolan/96/group-of-projects.png"/> */}
                            </NavLink>
                            <NavLink to ="/projects">
                                <motion.div
                                whileHover={{scale: 1.1, duration: 1}}
                                animate={{ x: 10 }}
                                transition={{ease:"easeIn", duration: 1}}
                                className="about-link"
                                id="projects"
                                >
                                    <h3>Projects </h3> 
                                </motion.div>
                                {/* <img src="https://img.icons8.com/nolan/96/group-of-projects.png"/> */}
                            </NavLink>
                        </div>
                    </div>
            </div>
            {/* <h1 id="skills-title"> Skills </h1>
            <div id = "technologies">
                <h1>HTML5 <br />
                <div className="html-img">
                <img src="https://img.icons8.com/nolan/128/html-5.png"/>
                </div> </h1>
                <h1>CSS3 <br />
                <img className="css-img" src="https://img.icons8.com/dusk/128/000000/css3.png"/></h1>
                <h1>JavaScript <br />
                <img className="javascript-img" src="https://img.icons8.com/color/144/000000/javascript.png"/></h1>
                <h1>React <br />
                    <img className="react-img" src="https://img.icons8.com/plasticine/160/000000/react.png"/>
                </h1>

                <h1>NodeJS <br />
                <img className="node-img" src="https://img.icons8.com/color/128/000000/add-node.png"/></h1>
                <h1>jQuery <br />
                <img className="jquery-img" src="https://img.icons8.com/ios-filled/100/000000/jquery.png"/></h1>
                <h1>MongoDB</h1> <br />
                <img src="https://img.icons8.com/color/144/000000/mongodb.png"/>
                <h1>MySQL</h1> <br />
                <img src="https://img.icons8.com/ios-filled/120/000000/database-restore.png"/>
            </div> */}
            {/* </Content> */}
            {/* <ViewScroll /> */}
        </div>
    )
}

export default About;
