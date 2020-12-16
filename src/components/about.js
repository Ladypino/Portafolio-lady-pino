
import React from "react";
import './about.css';
import {NavItem,NavLink,Nav,TabContent,TabPane,Container,Row,Col,} from "reactstrap";
import GalleryPhotos from './gallery.js'




const AboutMe = (props) => {

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

      <div className="section profile-content1">
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
              <h2 className="title">
               Lady Pino Ramirez <br />
              </h2>
              <h4 className="description">FrontEnd Developer</h4>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="10">
              <p className="descriptionAbout">
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
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                 Pasatiempos y Familia
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
            
          
                <div>
 
    
        <GalleryPhotos/>
      
    </div>
               
             
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
                               <div>
    
    </div>
              
            </TabPane>
          </TabContent>
        </Container>
      </div>
    
    </>
  );
}



export default AboutMe;
