import "./ProductList.css"
import React, {useEffect} from 'react'
import Product from "../product/Product"
import {products} from "../../data"

import AOS from 'aos';
import 'aos/dist/aos.css'; 
const ProductList = () => {
  useEffect(() => {
    AOS.init({
        duration: 2000,
    });
}, [])
  return (
    
    <div className="pl">
      <div className="barrita"></div>

      <div className="pl-texts" data-aos="fade-up">
        
        <h2 className="pl-title">Proyectos realizados</h2>
        
        <p className="pl-desc">
        Portfolios profesionales,
        Sitios web Institucionales, Landing Pages
        </p>
      </div>
      <div className="pl-list" data-aos="fade-up">
        {products.map((item) => (
        <Product img={item.img} key={item.id} link={item.link}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList