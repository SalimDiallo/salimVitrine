import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import {init} from '@emailjs/browser'
init(process.env.REACT_APP_KEY)


const ContactForm = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMessage = document.querySelector(".formMessage");

    emailjs.sendForm(process.env.REACT_APP_SERVICE,
     process.env.REACT_APP_TEMPLATE, 
     form.current, 
      process.env.REACT_APP_KEY)
      .then((result) => {
          console.log(result.text);
          form.current.reset();//pour nettoyer le formulaire
            formMessage.innerHTML = "<p class='success'>Message envoyé avec Succes </p>";
            setTimeout(() => {
                formMessage.innerHTML = "";
            }, 2500);
      }, (error) => {
          console.log(error.text);
          formMessage.innerHTML = "<p class='error'>Message non envoyé</p>";
          setTimeout(() => {
              formMessage.innerHTML = "";
          }, 2500);
      });
    }
    return (
        <div className='form-container'>
            <h2>Contactez-nous</h2>
            <form ref={form} onSubmit={sendEmail} className="form-content">
            
                <label >Nom</label>
                <input   type="text" name="name" required id='name'/>
            
                <label >Email</label>
                <input  type="email" name="email" required id='email'/>
          
                <label >Message</label>
                <textarea id='mess' name="message" required/>
           
            <input type="submit" value="Envoyer" className='hover button'/>
         </form>
        
        <div className='formMessage'>

        </div>
    </div>
    );
};

export default ContactForm;