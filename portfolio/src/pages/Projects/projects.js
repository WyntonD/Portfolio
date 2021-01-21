import React, { useState } from 'react';

import { motion } from "framer-motion";
import { Row, Col, Layout, Card, Avatar, Modal, Button } from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './projects.css';


const { Content } = Layout;
const { Meta } = Card;

const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  
const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  }

const title = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 100 },
}

const style = { background: '#0092ff',      
                padding: '8px 0',
                height:'20vh',
                margin:'10vh',
                fontSize:'30px',
                color:'#fff',
                background:'red'
              };

function Projects() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    
    const [projects, setProjects] = useState(
        {project1: "Wyntluger Beats"},
        {project2: "LIRI Node App"},
        {project3: "Google Books Search"}
    )

    const modal1handler = () => {
        setProjects(projects.project1);
        return 
        <Col className="gutter-row" 
             span={8} 
             variants={list}
             showproj={() => modal1handler}
             >
                <div>{projects.project1}</div>
        </Col>
    }

    const modal2handler = () => {
        setProjects(projects.project2);
        return projects.project2;
    }
    const modal3handler = () => {
        setProjects(projects.project3);
        return projects.project3;
    }

    const showModal = () => {
    setIsModalVisible(true);
    };

    const handleOk = () => {
    setIsModalVisible(false);
    };

    const handleCancel = () => {
    setIsModalVisible(false);
    };

//   const wlBtn = () => {
//       return (
//           <div>
//             <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
//             <p>Wyntluger Beats</p>
//             <p>A leasing and purchasing site for beats</p>
//             <p>Some contents...</p>
//             </Modal>
//         </div>
//       )
//   }
    return (
        <div>
        <Row gutter={16}>
        
            <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            animate="visible"
            variants={item}
            style={style}
            drag = "y"
            dragConstraints={{ bottom: 0, top: 0 }}
            onClick={showModal}
            >
            <Col className="gutter-row" span={8} variants={list}>
                <div>{projects.project1}</div>
            </Col>
            </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={item}
        style={style}
        drag = "y"
        dragConstraints={{ bottom: 0, top: 0 }}
        onClick={showModal}
        >
      <Col className="gutter-row" span={8} style={{textAlign:'center'}} variants={list}>
        <div showproj={modal2handler}>{projects.project2}</div>
      </Col>
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial="hidden"
        animate="visible"
        variants={item}
        style={style}
        drag = "y"
        dragConstraints={{ bottom: 0, top: 0 }}
        >
      <Col className="gutter-row" span={8} variants={list}>
        <div>Google Book Search</div>
      </Col>
      </motion.button>
    </Row>
    <h1 
        style={{
        position:'fixed', 
        top:'25%', 
        left:'20%'}}
    >Projects</h1>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>A node based application used to render information</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
        // <div className="project-container">
        //         <h1 className="project-title">Projects</h1>
        //             <div id="project-cards">
        //                 <Card
        //                     style={{ width: 300 }}
        //                     cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
        //                     className="card"
        //                 >
        //                     <Meta
        //                     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        //                     title="Wyntluger Beats"
        //                     description="React based Leasing and Purchasing Store"
        //                     />
        //                     <a>GitHub</a>
        //                 </Card>

        //                 <Card
        //                     style={{ width: 300 }}
        //                     cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
        //                     className="card"
        //                 >
        //                     <Meta
        //                     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        //                     title="Google Books Search"
        //                     description="A React app used to search and purchase books from Google API"
        //                     />
        //                     <a>GitHub</a>
        //                 </Card>

        //                 <Card
        //                     style={{ width: 300 }}
        //                     cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
        //                     className="card"
        //                 >
        //                     <Meta
        //                     avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        //                     title="LIRI Node App"
        //                     description="A node based app used to search for music artist info, concert times, and movies"
        //                     />
        //                     <a>GitHub</a>
        //                 </Card>
        //             </div>
        // </div>
    )
}

export default Projects;