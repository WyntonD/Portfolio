import React from 'react';

import HomeContent from '../../pages/Home/home';
import About from '../../pages/About/about';
import Projects from '../../pages/Projects/projects';
import Contact from '../../pages/Contact/contact';

import {
    GithubOutlined,
    LinkedinOutlined,
    MailOutlined,
    UserOutlined
  } from '@ant-design/icons';

import './nav.css';

import { Layout, Image, Avatar } from 'antd';

const { Header, Footer, Sider } = Layout;

function Nav() {

    var styling = {
        display: 'block',
        margin:'3px',
        fontSize:'20px'
    }

    return (
        <div>   
    <Layout>
      <Sider id="sider">
          <nav id="nav-titles">
            <Avatar size={70} icon={<UserOutlined />} />
              <a style= {styling}>Home</a>
              <a style= {styling}>About Me</a>
              <a style= {styling}>Resume</a>
              <a style={styling}>Projects</a>
              <a style={styling}>Contact</a>
          </nav>
        </Sider>
      <Layout>
        <Header id="sticky-top">
            <div id="header">
                <h2>
                    {/* Wynton Davis - Full Stack Web Developer  */}
                    <button> <GithubOutlined /></button>
                    <button> <LinkedinOutlined /></button>
                    <button> <MailOutlined /></button>
                </h2> 
            </div>
        </Header>
        <HomeContent />
        <About />
        <Projects />
        <Contact />
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
        </div>
    )
}

export default Nav;