import React, { useEffect } from 'react'
import "./Intro.css"
import Perfil from "../../img/Group.svg"
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Intro = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, [])

  return (
    <div className="i"  >
        <div className="i-left" data-aos="fade-right">
            <div className="i-left-wrapper">
                <h2 className="i-intro">
                    Hola mi nombre es
                </h2>
                <h1 className="i-name">
                    Ivan  Bohorquez
                </h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item"> Desarrollador Web</div>
                        <div className="i-title-item"> Diseñador Web</div>
                        <div className="i-title-item">Programador</div>
                    </div>
                </div>
                    <h2 className="text-fly">Despega tu marca</h2>
                    <h2 className="text-fly2">Amplia tu presencia en internet mediante una web moderna
                    y actualizada, que atraiga a tu publico objetivo y genere confianza!</h2>
                <div className="text-yel" data-aos="fade-down-right">
                    <h3>Vendes un producto? Aumenta tus clientes!</h3>
                </div>
                <br/>
                <div className="text-yel" data-aos="fade-down-right">
                <h3 >Ofreces un servicio? Aumenta tu imagen profesional! </h3>
                 </div>
                
            </div>
            </div>
        <div className="i-right" data-aos="fade-left">
            <div className="i-bg"></div>
            <img src={Perfil} alt="imagen" className="i-img" />
            
        </div>
    </div>
  )
}

export default Intro