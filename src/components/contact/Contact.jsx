import React, { useRef, useState, useContext,useEffect } from 'react';
import "./Contact.css"
import "./BarraColor.jsx"

import email from "../../img/email.png";
import Whatic from "../../img/what.png"
import Loca from "../../img/location (2).png"


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
                    <a target="_blank" rel="noreferrer"  href="https://wa.me/1123920404?text=Hola+vengo+de+tu+web!"> <img src={Whatic} alt="phone" className="c-icon"/></a>
                        11-2320404
                    </div>
                    <div className="c-info-item">
                    <a target="_blank" rel="noreferrer"  href="mailto:ivan.olivera07@hotmail.com"> <img src={email} alt="email" className="c-icon"/> </a> ivan.olivera07@hotmail.com 
                    </div>
                    <div className="c-info-item">
                        <img src={Loca} width="25" alt="phone" className="c-icon"/>
                        CABA,Arg
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc" data-aos="fade-left">
                    <b>Digitalicemos tu marca. </b> Ya sabes como queres que sea tu pagina web? Hagamosla! <br />
                    Tenes dudas o necesitas asesoramiento? Charlemos sin compromiso</p>  
                
                <form ref={formRef} onSubmit={handleSubmit} rel="noreferrer"  >
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