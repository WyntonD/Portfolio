import React from "react";
import { useState, useRef } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./framerProjects.css";

/**
 * This is an example of animating shared layouts in Framer Motion 2.
 *
 * The open state of each panel is contained locally to that component. Wrapping
 * them all in the same AnimateSharedLayout component allows them all to animate
 * in response to state changes that affect each other's layout.
 *
 * Try removing AnimateSharedLayout to see how that affects the animation.
 */

export const Drag = () => {
    const constraintsRef = useRef(null);
  
    return (
        <>
        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div drag dragConstraints={constraintsRef} />
        </>
    );
  };
  

export default function FramerProjects() {
  const style1= {
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    background: '#fff',
    padding: '20px',
    borderRadius: '25px',
  }
  return (
      <div>
    <AnimateSharedLayout>
      <motion.ul layout initial={{ borderRadius: 25 }} style={style1}>
        {projects.map(e => {
        return (
          <Item key={e} />
        )   
        })}
        Wyntluger Beats
      </motion.ul>
    </AnimateSharedLayout>
    </div>
  );
}

function Item() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const style2 = {
    backgroundColor: 'rgba(214, 214, 214, 0.5)',
    borderRadius: '10px',
    padding: '20px',
    marginBottom: '20px',
    overflow: 'hidden',
    cursor: 'pointer'
  }

  const projects = ["Wyntluger Beats", "LIRI Node App", "Google Books Search"];

  return (
    <div>
    <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }} style={style2}>
      <motion.div className="avatar" layout />
      <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
    </motion.li>
    </div>
  );
}

function Content() {

  const projects = ["Wyntluger Beats", "LIRI Node App", "Google Books Search"];
  
  const listProjects = projects.map(function(project) {
    return project
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {listProjects}
    </motion.div>
  );
}

const content = "This is a sentence in a paragraph"

const projects = ["Wyntluger Beats", "LIRI Node App", "Google Books Search"];
