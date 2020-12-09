
import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import ProfilePage from "views/examples/ProfilePage.js";
import LandingPage from "views/examples/LandingPage";


import DemoFooter from "components/Footers/DemoFooter.js";


const Index= ()=> {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <IndexNavbar />
      <IndexHeader />
      <ProfilePage/>
     <LandingPage/>
    
      <div className="main">
     
        <DemoFooter />
      </div>
    </>
  );
}

export default Index;
