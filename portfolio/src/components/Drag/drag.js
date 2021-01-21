import * as React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import FramerProjects from '../../pages/Projects/framerProjects';

import "./drag.css";

function Drag () {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef}>
    
      </motion.div>    
      <motion.div drag dragConstraints={constraintsRef}>
    </motion.div>
    </>
  );
};

export default Drag;
