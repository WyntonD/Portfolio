
import React from 'react';

import { motion } from 'framer-motion';

import './barg.css';

function BarGraph () {
    return (
        <div>
        <section className="bar-graph bar-graph-vertical bar-graph-two">
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-one bar-container">
                <div className="bar" dataPercentage="40%"></div>
                <span className="year">HTML</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-two bar-container">
                <div className="bar" dataPercentage="55%"></div>
                <span className="year">CSS</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-three bar-container">
                <div className="bar" dataPercentage="68%"></div>
                <span className="year"> JAVASCRIPT</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-four bar-container">
                <div className="bar" dataPercentage="82%"></div>
                <span className="year">REACT</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
        <div className="bar-four bar-container">
            <div className="bar" dataPercentage="82%"></div>
            <span className="year">NODE</span>
        </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-four bar-container">
                <div className="bar" dataPercentage="82%"></div>
                <span className="year">MYSQL</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-four bar-container">
                <div className="bar" dataPercentage="82%"></div>
                <span className="year">jQuery</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-four bar-container">
                <div className="bar" dataPercentage="82%"></div>
                <span className="year">Express</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-four bar-container">
                <div className="bar" dataPercentage="82%"></div>
                <span className="year">GitHub</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-four bar-container">
                <div className="bar" dataPercentage="82%"></div>
                <span className="year">MongoDB</span>
            </div>
        </motion.div>
        <motion.div
        whileHover={{ scale: 1.1, duration: 2 }}
        >
            <div className="bar-four bar-container">
                <div className="bar" dataPercentage="82%"></div>
                <span className="year">Agile</span>
            </div>
        </motion.div>
        </section>
        </div>
    )
}
 
export default BarGraph;