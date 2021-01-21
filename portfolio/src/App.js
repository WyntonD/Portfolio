import * as React from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
  useLocation
} from "react-router-dom";
// import { render } from 'react-dom';

import {motion, AnimatePresence } from 'framer-motion';
// import Projects from './pages/Projects/projects';
import Projects from './components/Project/project1';
import Hamburger from './components/Hamburger/hamburger';
// import Project from './components/Project/projectpractice';
// import ProjectModal from './components/Modal/modal';
// import HomeContent from './pages/Home/home';
// import Contact from './pages/Contact/contact';
// import  Drag from './components/Drag/drag';
// import Refresh from './components/Drag/refresh';
import Nav from './components/Nav/nav';
import TopHeader from './components/Header/header';
import Skills from './pages/Skillset/skills';
import About from './pages/About/about';
// import FramerNav from './components/FramerPractice/framer';
import './App.css';
// import AboutMe from './pages/About/about-me';
import HomeContent from './pages/Home/home';

function App() {


  return (
    <div className="App">
      <div>
        <Router>
          <TopHeader />
          <Nav />
          <AnimatePresence>
            <Switch>
              <Route exact path="/" component={HomeContent} />
              <Route exact path="/about" component={About} />
              <Route exact path="/skills" component={Skills}/>
              <Route exact path="/projects" component={Projects} />
            </Switch>
          </AnimatePresence>    
        </Router>
    </div>
  </div>
  );

  function Home() {
    return (
      <div> 
        <h1>
          Home
        </h1>
      </div>
    );
  };

  // function About() {
  //   return (
  //     <div> 
  //       <h1>
  //         About
  //       </h1>
  //     </div>
  //   );
  // };
}

export default App;

{/* <TopHeader />
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContent}/>
          <Route exact path="/about" component={AboutMe}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
      </Router> */}
      {/* <Projects /> */}
      {/* <Project /> */}
      {/* <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <Drag key={count} />
      </div>
    </> */}
  {/* <HomeContent/> */}
  {/* <AboutMe/> */}