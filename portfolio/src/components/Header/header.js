import React from 'react';
import { motion } from 'framer-motion';

import './header.css';

function TopHeader() {
    const headStyle = {
        marginLeft:'5px',
        marginRight:'5px'
    }
    return (
        <div className="top-header">
            <motion.div
            whileHover={{scale: 1.1}}>
                <a className="socials">LinkedIn</a>
            </motion.div>
            <motion.div
            whileHover={{scale: 1.1}}>
                <a className="socials">GitHub</a>
            </motion.div>
        </div>
    )
}

export default TopHeader;
