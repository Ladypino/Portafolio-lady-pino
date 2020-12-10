import React, { Component } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import WorkWhithMe from '../components/WorkWhithMe.js';
import Proyects from  '../components/proyects.js'
import AboutMe from "../components/about.js";
import ContactMe from "../components/contactMe.js";
import IndexHeader from "./IndexHeader.js"
import './IndexNavbar.css'


class NavbarPage extends Component {

    constructor(props) {
      super(props);
      this.scrollToTop = this.scrollToTop.bind(this);
    }
  
    componentDidMount() {
  
      Events.scrollEvent.register('begin', function () {
        console.log("begin", arguments);
      });
  
      Events.scrollEvent.register('end', function () {
        console.log("end", arguments);
      });
  
    }
    scrollToTop() {
      scroll.scrollToTop();
    }
    scrollTo() {
      scroller.scrollTo('scroll-to-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      })
    }
    scrollToWithContainer() {
  
      let goToContainer = new Promise((resolve, reject) => {
  
        Events.scrollEvent.register('end', () => {
          resolve();
          Events.scrollEvent.remove('end');
        });
  
        scroller.scrollTo('scroll-container', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        });
  
      });
  
      goToContainer.then(() =>
        scroller.scrollTo('scroll-container-second-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          containerId: 'scroll-container'
        }));
    }
    componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    }
    render() {
      return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top"  color="info-color" dark expand="md" style={{ marginTop: "20px"}}>
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav"  style={{ marginTop: "20px", color:"purple", width:'6em', height:'21em'}}>
                  <li><Link activeClass="active" className="test0" to= "IndexHeader"    spy={true} smooth={true} duration={500} > <h5 className='t1'>Inicio</h5></Link></li>
                    <li><Link activeClass="active" className="test1" to= "AboutMe"    spy={true} smooth={true} duration={500} >Acerca de mi </Link></li>
                     <li><Link activeClass="active" className="test2" to="Proyects" spy={true} smooth={true} duration={500}><h5 className='t2'>Inicio</h5></Link></li> 
                    <li><Link activeClass="active" className="test3" to="WorkWhithMe" spy={true} smooth={true} duration={500} >Trabajemos juntos</Link></li>
                     <li><Link activeClass="active" className="test4" to="ContactMe" spy={true} smooth={true} duration={500}>Contactame</Link></li>
                 {/*    <li><Link activeClass="active" className="test5" to="test5" spy={true} smooth={true} duration={500} delay={1000}>Test 5 ( delay )</Link></li>
                    <li><Link activeClass="active" className="test6" to="anchor" spy={true} smooth={true} duration={500}>Test 6 (anchor)</Link></li>  */}
                    
                  </ul>
                </div>
              </div>
            </nav>
            
          
            <Element name="IndexHeader" className="element" >
            <IndexHeader/>
          </Element>
 
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
  {/* 
            <Element name="test5" className="element">
              test 5
          </Element>
   
            <div id="anchor" className="element">
              test 6 (anchor)
          </div> */}
  
            
          
  
  
            <a onClick={this.scrollToTop}>Inicio</a>
        </div>
      );
    }
  };
  








/* 
    <MDBContainer>
      <MDBNavbar color="info-color" dark expand="md" style={{ marginTop: "20px" }}>
        <MDBNavbarBrand>
          <strong className="white-text">MDBNavbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="envelope" className="mr-1" />Contact</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon icon="cog" className="mr-1" />Settings</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="mr-1" />Profile
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default" right>
                  <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
   
    </MDBContainer> */
 

export default NavbarPage;