import React from 'react'
import "./Footer.css"
import Face from "../../img/fb.png"
import Linke from "../../img/linke.png"
import Insta from "../../img/instagram.png"


const Footer = () => {
  return (
    <section>
         <footer>
            <div className="foo-ico">
                <span><img src={Face} width="32" alt="redes" /></span>
                <span><img src={Linke}  width="34" alt="redes" /></span>
                <span><img src={Insta}  width="29" alt="redes" /></span>
            </div>
            <p> <a href="#intro" >Ir Arriba </a></p>
           <a target="_blank" rel="noreferrer"  href="https://www.linkedin.com/in/ivanoliverab/"> <span className="foo-down">By Ivan Bohorquez  <img src={Linke} width="25" alt="redes"/> </span> </a>
        </footer>
    </section>
  )
}

export default Footer