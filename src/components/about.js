
import React, { useState, useEffect }from "react";
import './Carousel.css';
import carrousel from '../assets/img/carrousel'
import {
  Button,
  Label,
  FormGroup,
  Input,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import Carousel from './Carousel.js'

import axios from 'axios';


const AboutMe = (props) => {

  const [imgList, setImgList] = useState([]);

  useEffect(() => {
    axios.get('carrousel')
    .then((resp) => {
      setImgList(resp.data.images);
    }).catch((err) => {
      console.log('Unable to Fetch Image from splashbase', err);
    });
  }, []);

  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>

      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("../assets/img/carrousel/profileLady.jpg")}
              />
            </div>
            <div className="name">
              <h4 className="title">
               Lady Pino Ramirez <br />
              </h4>
              <h6 className="description">FrontEnd Developer</h6>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              Frontend y Traductora Bilingue con especialidad en writing and reading documents,
              Me desenvuelvo Gratamente en grupos de trabajo integrándome rápidamente,
              me motivan los desafíos de aprendizaje continuo desarrollando webs pioneras en diseños y
               funciones enfocadas en dar soluciones que impacten positivamente la vida de las personas
                busco un sector donde pueda desenvolverme en el área Frontend.en un ambiente horizontal,
                 Integrando un equipo de trabajo de desarrollo y diseño de soluciones con un excelente 
                 entorno laboral para trabajar. siendo fundamental el trato y el entusiasmo por el diseño y
                  desarrollo web.
              </p>
              <br />
              <h2>
                 Conoce mas
              </h2>
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Habilidades
                  </NavLink>
                </NavItem>
                
                
                <NavItem>
                 
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                  Pasatiempos
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="17">
                <div>
 
      {imgList.length === 0 && <div>Loading...</div>}
      {imgList.length > 0 &&
        <Carousel imgList={imgList} img_width={400} img_height={300}
        visibleImages={3} duration={750}/>
      }
    </div>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
                               <div>
      
      {imgList.length === 0 && <div>Loading...</div>}
      {imgList.length > 0 &&
        <Carousel imgList={imgList} img_width={400} img_height={300}
        visibleImages={3} duration={750}/>
      }
    </div>
              
            </TabPane>
          </TabContent>
        </Container>
      </div>
    
    </>
  );
}



export default AboutMe;
