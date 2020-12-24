import React from 'react';

import { Row, Col, Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

import './contact.css';


const { Content } = Layout;

function Contact() {
    return (
        <div>
            <Layout id="contact-layout">
                <Content id="content">
                <div>
                    <h1 id="contact-title">Contact</h1>
                    <div id="socials">
                        <h2>Linkedin</h2>
                        <div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="wynton-davis-a63119187">
                            <a class="LI-simple-link" href='https://www.linkedin.com/in/wynton-davis-a63119187?trk=profile-badge'>Wynton Davis</a>
                        </div>
                        <h2>GitHub</h2>
                        <GithubOutlined />
                    </div>

                </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Contact;