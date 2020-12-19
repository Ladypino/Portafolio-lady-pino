
import React from "react";


import Footer from "../components/Footer.js";
import NavbarPage from "../components/IndexNavbar.js";
import  IndexHeader from "../components/IndexHeader.js";
import  AboutMe from "../components/about.js";
import Proyects from "../components/proyects.js";

import Nada from "../components/nada.js";





const HelloWorld = (props) => {




    return (
   
    
      <div className="main">
           <NavbarPage />
<IndexHeader/>
<AboutMe/>
<Proyects/>
<Nada/>

<Footer />
      </div>

    );
};

export default HelloWorld;



