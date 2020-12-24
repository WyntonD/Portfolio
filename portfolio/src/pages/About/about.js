import React from 'react'
import { Row, Col, Layout } from 'antd';
import ReactLogo from '../../components/Logos/React/reactLogo';
import '../About/about.css';

import { NodeCollapseOutlined } from '@ant-design/icons';

const { Content } = Layout;

function About() {
    return (
        <div>
        <Layout id="about-layout">
            <Content id="content">
            <img></img>
            <h1>About Me</h1>
            <div id="about-para">
            <img alt="biopic" src="#"/>
            <p id="bio">
            I'm a full stack web developer with a passion for design and quality for optimal user activity. 
            Prior to my coding introduction, I was previosuly geared to go to medical school while in college.
            However, I continually grew more curious as to how technology works for us to look up proper terminologies
            in our everyday lives. 

            Technology is a mercurial and powerful tool for us to use for limitless opportunities and discoveries. 
            </p>
            </div>
            <div id="about-buttons">
                
                <button>
                <h3>Resume </h3>
                <img src="https://img.icons8.com/nolan/96/submit-resume.png"/>
                </button>
                <button>
                <h3>Projects </h3> 
                    <img src="https://img.icons8.com/nolan/96/group-of-projects.png"/>
                </button>
            </div>

            <h1 id="skills-title"> Skills </h1>
            <div id = "technologies">
                <h1>HTML5 <br />
                <div className="html-img">
                <img src="https://img.icons8.com/nolan/128/html-5.png"/>
                </div> </h1>
                <h1>CSS3 <br />
                <img className="css-img" src="https://img.icons8.com/dusk/128/000000/css3.png"/></h1>
                <h1>JavaScript <br />
                <img className="javascript-img" src="https://img.icons8.com/color/144/000000/javascript.png"/></h1>
                <h1>React <br />
                <img className="react-img" src="https://img.icons8.com/plasticine/160/000000/react.png"/></h1>
                <h1>NodeJS <br />
                <img className="node-img" src="https://img.icons8.com/color/128/000000/add-node.png"/></h1>
                <h1>jQuery <br />
                <img className="jquery-img" src="https://img.icons8.com/ios-filled/100/000000/jquery.png"/></h1>
            </div>

            </Content>
        </Layout>
        </div>
    )
}

export default About;
