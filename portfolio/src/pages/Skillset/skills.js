import React from 'react';
import BarGraph from '../../components/Graphs/barg';
import PieGraph from '../../components/Graphs/pieg';

import { motion } from 'framer-motion';

import './skills.css';


function Skills () {
    
    return (
    <motion.div
    animate="in"
    exit="out"
    initial="initial">
    <div>
        <motion.div
        whileHover={{scale:1.1}}
        animate={{ease: 'easeOut', duration: 2}}
        className="skill-heading"
        >
            <h1>Skillsets</h1>
        </motion.div>
        <BarGraph />
        <PieGraph />
    </div>
    </motion.div>
    )
}

export default Skills;