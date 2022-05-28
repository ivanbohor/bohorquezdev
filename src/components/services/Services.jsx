import React, {useEffect} from 'react'
import "./Services.css"
import Desi from "../../img/ser-desi.svg"
import Desi2 from "../../img/ser-desi2.svg"
import Desi3 from "../../img/ser-desi3.svg"

import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Services = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000,
    });
}, [])
  return (
    <div className="serv">
        <h2 className="pl-title" >Servicios</h2>
    <div className="cont-serv" style={{marginTop:40}}>
        <div className="item-serv shadow-pop-bl ov-btn-slide-top" data-aos="fade-up" >
                <div className="ico-serv" > 
                <img src={Desi2} alt="design" />
                 </div>
                <div className="text-serv">
                  <h3>Diseño Web Personalizado</h3>
                  Sitio web personalizado a medida desde cero.
                  Colores, logos, marca, estilos. Selecionamos lo que confluya 
                  y se adapte mas a tus clientes o publico objetivo.
                  </div>
         </div>
        <div className="item-serv shadow-pop-bl ov-btn-slide-top"  data-aos="fade-up">
            <div className="ico-serv">
            <img src={Desi3} alt="design" />
            </div>
            <div className="text-serv">
            <h3>Desarrollo Web </h3>
            Puesta en practica del diseño web personalizado (o si ya tenes un diseño lo replicamos) con las mejores practicas 
            para que su sitio sea seguro, estable, escalable y eficiente.

            </div>
        </div>
        <div className="item-serv shadow-pop-bl ov-btn-slide-top"  data-aos="fade-up">
            <div className="ico-serv"> 
            <img src={Desi} alt="design" />
            </div>
            <div className="text-serv">
            <h3>Marketing</h3>
            Conectaremos tu web con las redes sociales más importantes,diseñamos y realizamos el desarrollo web para emprendimientos y marcas. 
            Trabajamos para que tus negocios sean visibles en la red.

            </div>
         </div>
    </div>
    
    
    </div>
  )
}

export default Services