import * as React from 'react';
import { useRef } from "react";
import {
  BrowserRouter as Router,
  Link, 
  Switch,
  Route,
  NavLink
}  from 'react-router-dom';
// import HomeContent from '../../pages/Home/home';
// import About from '../../pages/About/about';
// import Projects from '../../pages/Projects/projects';
// import Contact from '../../pages/Contact/contact';
// import FramerProjects from '../../pages/Projects/framerProjects';
// import Drag from '../../components/Drag/drag';

import { motion, useCycle } from "framer-motion";
// import { useDimensions } from "../FramerPractice/use-dimensions";
import { MenuToggle } from "../FramerPractice/MenuToggle";
import { Navigation } from "../FramerPractice/Navigation";

// import {
//     GithubOutlined,
//     LinkedinOutlined,
//     MailOutlined,
//     UserOutlined
//   } from '@ant-design/icons';

import './nav.css';

// import { Layout, Image, Avatar } from 'antd';

// const { Header, Footer, Sider } = Layout;

// const sidebar = {
//   open: (height = 1000) => ({
//     clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
//     transition: {
//       type: "spring",
//       stiffness: 20,
//       restDelta: 2
//     }
//   }),
//   closed: {
//     clipPath: "circle(30px at 40px 40px)",
//     transition: {
//       delay: 0.5,
//       type: "spring",
//       stiffness: 400,
//       damping: 40
//     }
//   }
// };

function Nav() {

  const burgerStyle = {
    position:'fixed',
    top:'0',
    left:'0',
    height:'100vh',
    diplay:'flex',
    flexDirection:'column',
    fontSize:'25px',
    backgroundColor:'#000',
    textAlign:'center',
    fontFamily: "'Cormorant Garamond', serif"
}

const listStyling = {
  textAlign:'center',
  color:'#fff'
}

  const [isOpen, toggleOpen] = useCycle(false, true);
  // const containerRef = useRef(null);
  // const { height } = useDimensions(containerRef);

    var styling = {
        display: 'block',
        margin:'3px',
        fontSize:'20px'
    }

    return (
        <div>   
          <nav className="navigation" style={burgerStyle}>
              <li>
                <NavLink to="/" style={listStyling}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" style={listStyling}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/skills" style={listStyling}>
                  Skills
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" style={listStyling}>
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" style={listStyling}>
                  Contact
                </NavLink>
              </li>
          </nav>
        </div>
    )
}

export default Nav;