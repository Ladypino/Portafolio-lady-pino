
import React from "react";
import './about.css';
import {Container,Row,Col,} from "reactstrap";


import Skills from "./Skills.js";




const AboutMe = (props) => {

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
              
            </Col>
          </Row>
         
         
                <div>
 
    
        <Skills/>
      
    </div>
           </Container>    
     </div>       
      
       
        
    
  
    
    </>
  
  );
}



export default AboutMe;
