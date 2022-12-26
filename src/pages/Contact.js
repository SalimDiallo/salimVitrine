import React from 'react';
import Mouse from '../Components/Mouse';
import Navigation from '../Components/Navigation';
import Logo from '../Components/Logo';
import ContactForm from '../Components/ContactForm';
import { CopyToClipboard } from "react-copy-to-clipboard";
import SocialNetwork from '../Components/SocialNetwork';
import Buttons from '../Components/Buttons';
import { motion } from 'framer-motion';

const Contact = () => {

      const variants = {
        out :{
            opacity: 0,
            transition: {duration: 0.5},
            x:100
        },
        in:{
             opacity: 1,
                x:0
        },
        
    }
    return (
      <main>
        <Mouse/>
        <motion.div className="contact"
        initial="out" animate="in" exit='out' variants={variants}>
            <Navigation />
            <Logo/>
            <ContactForm />
            <div className="contact-infos">

              <div className="address">
                  <div className="content">
                    <h4>adresse</h4>
                    <p>15 Rue Hollande</p>
                    <p>3600 fes</p>
                  </div>
                </div>

              <div className="phone">
                <div className="content">
                    <h4>telephone</h4>
                    <CopyToClipboard text="+212684499227" className='hover'>
                        <p style={{cursor:"pointer"}} onClick={()=>alert("Numero copié")} className="clipboard">+212 68 44 99 227</p>
                    </CopyToClipboard>
                </div>
              </div>

                <div className="email">
                <div className="content">
                    <h4>Email</h4>
                    <CopyToClipboard text="guintechprod@gamil.com" className='hover'>
                        <p style={{cursor:"pointer"}} onClick={()=>alert("Email copié")} className="clipboard">guintechprod@gmail.com</p>
                    </CopyToClipboard>
                </div>
              </div>

              <SocialNetwork/>
              <div className="credits">
                <p>Salim Diallo - Tous droits Revervés</p>
              </div>
            </div>
            <Buttons left="/projet-4" />
        </motion.div>
      </main>
    );
};

export default Contact;