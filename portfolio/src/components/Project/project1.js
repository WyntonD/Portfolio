import React from 'react';
import { motion } from 'framer-motion';
import { Card } from 'antd';

function Projects () {

    const style = {
        margin:'40px',
        position:'relative',
        top:'10%',
        display:'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexBasis: 'auto'
    }

    const { Meta } = Card;

    return (
        <div className="project-buttons" style={style}>
            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
            >
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Wyntluger Beats" description="www.instagram.com" />
                </Card>
            </motion.button>

            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                style={style}
            >
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="LIRI Node App" description="www.instagram.com" />
                </Card>
            </motion.button>

            <motion.button
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                style={style}
            >
                <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <Meta title="Google Book Search" description="www.instagram.com" />
                </Card>
            </motion.button>
        </div>
    )
}

export default Projects;