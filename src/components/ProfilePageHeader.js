
import React from "react";

import { Link,  Element, animateScroll as scroll,  } from 'react-scroll';
import WorkWhithMe from '../components/WorkWhithMe.jsx';
import Proyects from  '../components/proyects.jsx'
import AboutMe from "../components/about.jsx";
import ContactMe from "../components/contactMe.jsx";



// reactstrap components

// core components

function ProfilePageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
   
      <div>
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li><Link activeClass="active" className="test1" to= "AboutMe"    spy={true} smooth={true} duration={500} >Acerca de mi </Link></li>
                  <li><Link activeClass="active" className="test2" to="Proyects" spy={true} smooth={true} duration={500}>Proyects</Link></li>
                  <li><Link activeClass="active" className="test3" to="WorkWhithMe" spy={true} smooth={true} duration={500} >Trabajemos juntos</Link></li>
                  <li><Link activeClass="active" className="test4" to="ContactMe" spy={true} smooth={true} duration={500}>Contactame</Link></li>
                  <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
                  <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>
                  
                </ul>
              </div>
            </div>
          </nav>

          <Element name="AboutMe" className="element" >
          <AboutMe/>
        </Element>

          <Element name="Proyects" className="element">
          <Proyects/>
        </Element>

          <Element name="WorkWhithMe" className="element">
          <WorkWhithMe/>
        </Element>

          <Element name="ContactMe" className="element">
           <ContactMe/>
        </Element>

          <Element name="test5" className="element">
            test 5
        </Element>

          <div id="anchor" className="element">
            test 6 (anchor)
        </div>

          
        


          <a onClick={this.scrollToTop}>Inicio</a>
      </div>
    );
  }


export default ProfilePageHeader;
