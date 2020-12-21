import React from 'react';
import HomeContent from '../../pages/Home/home';
import './nav.css';

import { Layout, Image } from 'antd';

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
            <Image
                id="cover-image"
                width={200}
                marginTop={30}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
              <a style= {styling}>Home</a>
              <a style= {styling}>About Me</a>
              <a style= {styling}>Resume</a>
              <a style={styling}>Projects</a>
              <a style={styling}>Contact</a>
          </nav>
        </Sider>
      <Layout>
        <Header>
            <div>
                <h2 id="header">
                    Wynton Davis - Full Stack Web Developer 
                </h2> 
            </div>
        </Header>
        <HomeContent/>
        {/* <Footer>Footer</Footer> */}
      </Layout>
    </Layout>
        </div>
    )
}

export default Nav;