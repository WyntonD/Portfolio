import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch
} from "react-router-dom";

import { motion } from "framer-motion";
import  MenuItem  from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: 1, },
  }
};

export const Navigation = () => (
  <motion.ul variants={variants} className="nav-tab">
    {/* {itemIds.map(i => ( */}
      {/* <MenuItem variants={variants} /> */}
    // ))}
  <Router>
    <Switch>
        <NavLink to="/about">
        About
        </NavLink>
    </Switch>
  </Router>
  </motion.ul>
);

const itemIds = [0, 1, 2, 3, 4];