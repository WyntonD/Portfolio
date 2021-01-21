import React from 'react';

import { motion } from 'framer-motion';

import './about-me.css';

function AboutMe() {

    const style= {
        backgroundColor: '#fff'
    }
    return (
        <div className="about-container" style={style}>
            <motion.div
            animate={{ x: -100 }}
            transition={{ ease: "easeOut", duration: 2 }}
            drag="x"
            whileHover={{ scale: 1.1 }}
            >
            <h1 className="about-heading">About Me</h1>
            </motion.div>
            <p className="about-para">
            I'm a full stack web developer with a passion for design and quality. 
            Prior to my coding introduction, I was previously geared to go to medical school while in college.
            However, I continually grew more curious as to how technology works for us to look up proper terminologies
            in our everyday lives. This led me to follow my curiousity and get certified as a web developer and I haven't looked back since.
            Technology is a mercurial and powerful tool for us to use for limitless opportunities and discoveries. 
            </p>
            <div className="about-btns">
                <motion.div
                whileHover={{scale:1.2}}>
                    <button className="resume-btn">
                        Resumes
                    </button>
                </motion.div>
                <motion.div
                whileHover={{scale:1.2}}>
                    <button className="project-btn">
                        Projects
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
export default AboutMe;