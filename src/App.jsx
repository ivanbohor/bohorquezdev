import {useContext} from "react"
import About from "./components/about/About.jsx";
import Contact from "./components/contact/Contact.jsx";
import { ThemeContext, } from "./components/context.js";
import Footer from "./components/footer/Footer.jsx";
import Intro from "./components/intro/Intro.jsx"
import ProductList from "./components/productList/ProductList.jsx";
import Services from "./components/services/Services.jsx";
import Toggle from "./components/toggle/Toggle.jsx";

const App = () => {
const theme = useContext(ThemeContext)
const darkMode = theme.state.darkMode

  return <div style={{ backgroundColor:darkMode ? "#222" : "ghostwhite",
  color: darkMode && "ghostwhite", overflow: "hidden"}}>
    <Toggle/>
    <Intro/>
    <About/>
    <Services/>
    <ProductList/>
    <Contact/>
    <Footer/>
  </div>;
};

export default App;