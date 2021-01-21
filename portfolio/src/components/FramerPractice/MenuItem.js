import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { motion } from "framer-motion";

import HomeImage from '../../images/home.svg';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const imgArray = [{HomeImage}]

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const menuTabs = ["Home", "About", "Resume", "Projects", "Contact"];
const menuIcons = [
    {HomeImage}
]

function MenuItem ({i}) {
  // const style = { border: `2px solid #000`, color:'#fff' };
  const tabs = `${menuTabs[i]}`;
  // const icons = `${menuIcons[i]}`;
  return (
<div>
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="tab-items"
    >
      {/* <div className="icon-placeholder" >
        {icons}
        </div> */}
      <div className="text-placeholder">
        {tabs}
      </div>
    </motion.li>
    </div>
  );
};

export default MenuItem;

