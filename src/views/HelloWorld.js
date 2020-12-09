
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import ProfilePage from "views/examples/ProfilePage.js";
import LandingPage from "views/examples/LandingPage";


import DemoFooter from "components/Footers/DemoFooter.js";

import React from 'react';


const HelloWorld = (props) => {
    return (
   
    
      <div className="main">
           <IndexNavbar />
      <IndexHeader />
      <ProfilePage/>
     <LandingPage/>
    
     
        <DemoFooter />
      </div>

    );
};

export default HelloWorld;



