import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    useRouteMatch,
    useLocation
  } from "react-router-dom";

function Hamburger() {
    const [open, setOpen] = useState(false);

    const burgerStyle = {
        position:'fixed',
        top:'0',
        left:'0',
        height:'100vh',
        diplay:'flex',
        flexDirection:'column',
        fontSize:'25px',
        backgroundColor:'#000'
    }

    return (
        <div>

        <nav className="navigation" style={burgerStyle}>
            <li>
            <NavLink to="/">
                Home
            </NavLink>
            </li>
            <li>
            <NavLink to="/about">
                About
            </NavLink>
            </li>
            <li>
            <NavLink to="/projects">
                Projects
            </NavLink>
            </li>
            <li>
            <NavLink to="/contact">
                Contact
            </NavLink>
            </li>
      </nav>
        </div>
    )
}

export default Hamburger;