
import React from "react";


import Footer from "../components/Footer.js";
import NavbarPage from "../components/IndexNavbar.js";
import  IndexHeader from "../components/IndexHeader.js";
import  AboutMe from "../components/about.js";
import Proyects from "../components/proyects.js";
import WorWhithMe from "../components/WorkWhithMe.js";
import Test from "../components/test.js";




const HelloWorld = (props) => {




    return (
   
    
      <div className="main">
           <NavbarPage />
<IndexHeader/>
<AboutMe/>
<Proyects/>
<Test/>
<WorWhithMe/>
<Footer />
      </div>

    );
};

export default HelloWorld;



