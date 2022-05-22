import React, { useRef, useState, useContext,useEffect } from 'react';
import "./Contact.css"
import "./BarraColor.jsx"

import phone from "../../img/phone.png";
import email from "../../img/email.png";
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../context';
import BarraColor from './BarraColor.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])
    const formRef= useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode

    const handleSubmit=(e) => {
        e.preventDefault ();
        emailjs.sendForm('ivan', 'template_pk0ccje', formRef.current, 'Em0CR3lQwjM_nbFru')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }
  return (
      <section id="contact">
    <div className="c">
        <BarraColor/>
        <div className="c-wrapper">
            <div className="c-left">
                <div className="c-title" data-aos="fade-right">
                <h1>Hablemos de tu Idea!</h1>
                </div>
                <div className="c-info"  data-aos="fade-up">
                    <div className="c-info-item">
                        <img src={phone} alt="phone" className="c-icon"/>
                        112342424
                    </div>
                    <div className="c-info-item">
                        <img src={email} alt="email" className="c-icon"/>
                        ivan.oliveraetcetc
                    </div>
                    <div className="c-info-item">
                        <img src={phone} alt="phone" className="c-icon"/>
                        112342424
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc"  data-aos="fade-left">
                    <b>Digitalicemos tu marca. </b> Ya sabes que pagina queres? Hagamosla!</p>
                    <p>No estas seguro y necesitas asesoramiento? Charlemos sin compromiso</p>  
                
                <form ref={formRef} onSubmit={handleSubmit} >
                    <input style={{backgroundColor: darkMode && "#333",color: darkMode && "ghostwhite"}} type="text"  placeholder="Tu nombre" name="user_name"/>
                    <input style={{backgroundColor: darkMode && "#333",color: darkMode && "ghostwhite"}}  type="text"  placeholder="Asunto" name="user_subjet"/>
                    <input style={{backgroundColor: darkMode && "#333",color: darkMode && "ghostwhite"}}  type="text"  placeholder="Tu Email" name="email"/>
                    <textarea style={{backgroundColor: darkMode && "#333",color: darkMode && "ghostwhite", padding:15}} rows="5" placeholder="Mensaje" name="message" />
                    <button>Enviar</button>
                    {done && "  Mensaje enviado! Durante el dia recibiras respuesta. Gracias"}
                </form>

            </div>
        </div>
    </div>
    </section>
  )
}

export default Contact