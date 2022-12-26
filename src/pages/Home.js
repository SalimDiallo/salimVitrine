import React from 'react';
import Buttons from '../Components/Buttons';
import DynamicText from '../Components/DynamicText';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import SocialNetwork from '../Components/SocialNetwork';
import { motion } from 'framer-motion';

const Home = () => {

    const variants = {
        initial :{
            opacity: 0,
            transition: {duration: 0.5},
            x:100
        },
        visible:{
             opacity: 1,
                x:0
        },
         exit:{
            opacity: 0,
            transition: {duration: 0.3},
            x:-100,
        }
    }
    return (
        <div>
            <Mouse/>
            <motion.div className="home" initial="initial" animate="visible" exit='exit' variants={variants} >
                <Navigation/>
                <SocialNetwork/>
                <div className="home-main">
                    <div className="main-content">
                        <motion.h1 drag onDragEnd dragConstraints={{
                            left:-250,
                            right: 150,
                            top:-200,
                            bottom:250
                        }}>Salim Vitrine</motion.h1>
                       <motion.h2 drag onDragEnd dragConstraints={{
                            left:-250,
                            right: 150,
                            top:-200,
                            bottom:250
                        }}> <DynamicText/></motion.h2>
                    </div>
                </div>
                <Buttons right="/projet-1"/>
            </motion.div>
           
        </div>
    );
};

export default Home;