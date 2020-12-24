import React from 'react';

import { Row, Col, Layout, Card, Avatar } from 'antd';

import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './projects.css';


const { Content } = Layout;
const { Meta } = Card;

const projects = [
        {
        name: "Wyntluger Beats",
        description: "A Leasing and Purchasing Site"
        },
        {   
        name: "Google Book Search",
        description: "A React app used to search and purchase books from Google API"
        },
        {
        name: "LIRI Bot NodeJS",
        description: "A node based app used to search for music artist info, concert times, and movies"
        }
]

function Projects() {
    return (
        <div>
            <Layout id="project-layout">
                <Content id="content">
                <div>
                    <h1 id="project-title">Projects</h1>

                <div id="project-cards">
                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        actions={[
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Wyntluger Beats"
                        description="Leasing and Purchasing Store"
                        />
                    </Card>

                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        actions={[
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="Google Books Search"
                        description="A React app used to search and purchase books from Google API"
                        />
                    </Card>

                    <Card
                        style={{ width: 300 }}
                        cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                        }
                        actions={[
                        <EllipsisOutlined key="ellipsis" />,
                        ]}
                    >
                        <Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="LIRI Node App"
                        description="A node based app used to search for music artist info, concert times, and movies"
                        />
                    </Card>
                    </div>
                </div>
                </Content>
            </Layout>
        </div>
    )
}

export default Projects;