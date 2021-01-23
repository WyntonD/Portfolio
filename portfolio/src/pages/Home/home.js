import React, {useEffect }from 'react';
import {
    BrowserRouter as Router,
    NavLink
}
from 'react-router-dom';

import Colors from '../../components/ColorDots/color';

import { motion, 
        useMotionValue, 
        useTransform, 
        useViewportScroll, 
        useAnimation } from 'framer-motion';

import { Row, Col, Layout } from 'antd';

import './home.css';


const { Content } = Layout;

function HomeContent() {
    const x = useMotionValue(0);
    const opacity = useTransform(x, [-200, 0, 200], [0, 1, 1]);
    const { scrollYProgress } = useViewportScroll()

    const controls = useAnimation();

    return (
        <div className="home-container">
            <Layout id="layout">
            <Colors/>
                <Content className ="content">
                    <div>
                        <motion.div
                        animate={{ x: -100 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        drag="x" style={{ x, opacity, pathLength: scrollYProgress }}
                        whileHover={{ scale: 1.1 }}
                        >
                        <h1 className="heading-name">Wynton Davis</h1>
                        </motion.div>
                        
                        <motion.div

                        transition={{ ease: "easeIn", duration: 2 }}
                        drag="y" style={{ x, pathLength: scrollYProgress }}
                        whileHover={{ scale: 1.1 }}
                        >
                        <h2 className="job-title">Full Stack Web Developer</h2>
                        </motion.div>
                        <motion.div 
                        animate={{ x: -100 }}
                        transition={{ ease: "easeIn", duration: 4 }}
                        whileHover={{ scale: 1.1 }}
                        >
                            <p className="description">A keen eye for detail and precision</p>
                        </motion.div>
                        <motion.div 
                        animate={{ x: 100 }}
                        transition={{ ease: "easeIn", duration: 4 }}
                        whileHover={{ scale: 1.1 }}
                        >
                            <NavLink to= "/about">
                                <motion.div
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 2 }}>
                                    About Me
                                </motion.div>
                            </NavLink> 
                        </motion.div>
                    </div>
                </Content>
            </Layout>
        </div>
    )
}

export default HomeContent;