import React from "react";

import classnames from "classnames";
import  './Footer.js'
import  './IndexNavbar.css'

import {
  Collapse,
  Button,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
} from "reactstrap";

function NavbarPage() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 299 ||
        document.body.scrollTop > 299
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 300 ||
        document.body.scrollTop < 300
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
        {/*    <NavbarBrand
            data-placement="bottom"
            href="Footer"
        
           
          
          > <i className="fa fa-home" />
           
          </NavbarBrand>  */}
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/ladypino"
                target="_blank"
                title="Agregame en Linkedin"
              >
                <i className="fa fa-linkedin" />
                <p className="d-lg-none" style={{fontWeight:'600', fontSize:'15px'}} >Linkedin</p>
                
              </NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://github.com/Ladypino"
                target="_blank"
                title="Conoce mi Trabajo "
              >
                <i className="fa fa-github" />
                <p className="d-lg-none"  style={{fontWeight:'600', fontSize:'15px'}}>GitHub</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://app.talento.laboratoria.la/profile/rnCtPn7MCFUKztbdTvZjLAryciA3"
                target="_blank"
                title="Conoceme en App Talento Laboratoria "
              >
                <i className="fa fa-code"/>
                <p  className="d-lg-none" style={{fontWeight:'600', fontSize:'15px'}}>APP Talento</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://api.whatsapp.com/send?phone=56932700688"
                target="_blank"
                title="Comuniquemonos por whatsapp "
              >
                <i className="fa fa-whatsapp"/>
                <p  className="d-lg-none" style={{fontWeight:'600', fontSize:'15px'}}>Whatsapp</p>
              </NavLink>
            </NavItem>

            <NavItem>
             
                     <Button
              href= "https://www.canva.com/design/DAEQCbEUxvI/G8DyPpphtG6bELfsmZsFug/view?website#4"
              
              className="btn-round mr-1"
              color= 'neutral'
              target="_blank"
              outline
              size='sm'
              style={{marginTop: '25px', color: '#c395d5', border: 'solid', fontWeight:'600', fontSize:'15px'}}
            >
        
           Ver CV
            </Button>
          
            
            </NavItem>
           
            
            
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarPage;
