
import React from "react";
import IndexNavbar from "../components/IndexNavbar.js";
import IndexHeader from "../components/IndexHeader.js";
import ProfilePage from "../views/ProfilePage.js";
import LandingPage from "../views/LandingPage";
import Footer from "../components/Footer.js";




const HelloWorld = (props) => {
    return (
   
    
      <div className="main">
           <IndexNavbar />
      <IndexHeader />
      <ProfilePage/>
     <LandingPage/>
    
     
        <Footer />
      </div>

    );
};

export default HelloWorld;



