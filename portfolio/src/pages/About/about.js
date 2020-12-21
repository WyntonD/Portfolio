import React from 'react'
import { Row, Col, Layout } from 'antd';
import '../About/about.css';

const { Content } = Layout;

function About() {
    return (
        <div>
        <Layout id="layout">
            <Content id="content">
            <img></img>
            <p id="bio">
            I'm a full stack web developer with a passion for design and quality for optimal user activity. 
            Prior to my coding introduction, I was previosuly geared to go to medical school while in college.
            However, I continually grew more curious as to how technology works for us to look up proper terminologies
            in our everyday lives. 

            Technology is a mercurial and powerful tool for us to use for limitless opportunities and discoveries. 
            </p>
            <div>
                <button> Resume </button>
                <button> Projects </button>
            </div>
            </Content>
        </Layout>
        </div>
    )
}

export default About;
