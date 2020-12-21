import React from 'react';

import { Row, Col, Layout } from 'antd';

import './projects.css';


const { Content } = Layout;

function Projects() {
    return (
        <div>
            <Layout id="layout">
                <Content id="content">
                <div>
                    <h1 id="heading-name">Projects</h1>
                </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Projects;