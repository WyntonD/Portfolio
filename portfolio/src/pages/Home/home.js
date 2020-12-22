import React from 'react';

import { Row, Col, Layout } from 'antd';

import './home.css';


const { Content } = Layout;

function HomeContent() {
    return (
        <div>
            <Layout id="layout">
                <Content id="content">
                <div>
                    <h1 id="heading-name">Wynton Davis</h1>
                    <h2>Full Stack Web Developer</h2>
                    <p>A keen eye for detail and precision</p>
                    <button id="about-button">    
                        About Me
                    </button>
                </div>
                </Content>
            </Layout>
        </div>
    )
}

export default HomeContent;