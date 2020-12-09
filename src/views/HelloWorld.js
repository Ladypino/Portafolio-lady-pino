
import React from "react";

import IndexHeader from "../components/IndexHeader.js";
import ProfilePage from "../components/ProfilePage.js";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer.js";
import NavbarPage from "../components/IndexNavbar.js";




const HelloWorld = (props) => {
    return (
   
    
      <div className="main">
           <NavbarPage />
      <IndexHeader />
      <ProfilePage/>
     <LandingPage/>
    
     
        <Footer />
      </div>

    );
};

export default HelloWorld;



