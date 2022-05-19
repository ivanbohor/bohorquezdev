import React from 'react'
import "./Services.css"
import Desi1 from "../../img/desi1.png"

const Services = () => {
  return (
    <div className="serv">
        <h2 className="pl-title" >Servicios</h2>
    <div className="cont-serv" style={{marginTop:40}}>
        <div className="item-serv shadow-pop-bl">
                <div className="ico-serv"> ICONO </div>
                <div className="text-serv"> lorem ipsum dolor sit amet</div>
         </div>
        <div className="item-serv2 shadow-pop-bl">
            <div className="ico-serv"></div>
            <div className="text-serv"></div>
        </div>
        <div className="item-serv3 shadow-pop-bl">
            <div className="ico-serv"></div>
            <div className="text-serv"></div>
         </div>
    </div>
    
    
    </div>
  )
}

export default Services