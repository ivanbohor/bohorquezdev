import React, {useEffect} from 'react'
import "./About.css" 
import pc from "../../img/destokfin.png"
import tablet from "../../img/tabletvista.png"
import cel from "../../img/celvista.png"
import iconc from "../../img/Check.svg"
import BarraColor from '../contact/BarraColor'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const About = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000,
    });
}, [])
  return (
    <section id="serv"> 
    <div className="a">
      <BarraColor/>
      <div class="contAbout">
        <div className="bloque1">
          <div className="pcimg">
            <img src={pc} alt="pc" width="450" data-aos="zoom-in-left"/>
          </div>
          <div className="text-up" data-aos="fade-left">
            <h2>Tu marca en todos lados!</h2>
            <p>Ya sea un emprendimiento,un proyecto personal 
              o tu portfolio laboral, <b> tener tu propia pagina Web 
              es primordial.</b></p> 
            <h3 class="text-sepa">Te destacara positivamente en cualquier ambito! </h3>
            <div className="items-ico">

              <div className="item-i"> <img src={iconc} alt="icon"/><span>Aumenta tu presencia digital. Brindar una imagen seria y profesional es la mejor manera para abrir las puertas a nuevos clientes.</span></div>
              <div className="item-i"> <img src={iconc} alt="icon"/><span>Transmiti confianza agregando valor a tu marca ya sea empresa, proyecto o servicios que prestes. </span></div>
              <div className="item-i"> <img src={iconc} alt="icon"/> <span>Genera impacto y destacate de la competencia con un diseño web atractivo, dinámico y con un acabado impecable! </span></div>
            </div>
          </div>
        </div>
        <div className="bloque2">
          <div className="mobilesimg" data-aos="zoom-in-left">
            <img src={tablet} alt="tablet" width="300"/>
            <img src={cel} alt="cel" className="cel-img" width="200"/>
          </div>
          <div className="text-down" data-aos="fade-right">
            <h2 className="text-sub">100% responsive!</h2>
            <p><b>OPTIMIZADO </b>: Tu sitio web se adaptará a todos los dispositivos, es muy importante que se visualice correctamente desde teléfonos y tablets. </p>
            <p> Tu sitio web estara optimizado, de carga rapida y funcional.
            Diseñemos un sitio web moderno que se adapte a las personas, con una interfaz intuitiva para su usuario. </p>
          </div>
        </div>
        
      </div>
    </div>
    </section>
  )
}

export default About