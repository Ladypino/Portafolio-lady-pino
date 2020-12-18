import React from "react";
import './skills.css'
// reactstrap components
import {
  NavItem,NavLink,Nav,TabContent,TabPane,Row,Col,} from "reactstrap";



function Skills() {
  const [activeTab, setActiveTab] = React.useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
     
        
            <Col md="50">
              <div className="title">
                <h3>Metodologias y habilidades de trabajo</h3>
              </div>
              <div className="nav-tabs-navigation">
                <div className="nav-tabs-wrapper">
                  <Nav id="tabs" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={activeTab === "1" ? "active" : ""}
                        onClick={() => {
                          toggle("1");
                        }}
                      >
                   Metodologia agil
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={activeTab === "2" ? "active" : ""}
                        onClick={() => {
                          toggle("2");
                        }}
                      >
             Habilidades tecnicas
                      </NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
              <TabContent activeTab={activeTab} className="text-center">
                <TabPane tabId="1">
                  <p>
                  Mi metodologia de trabajo se basa en Scrum  mediante 
                  <ul className='textUl'>
                    <li>
Planificación de la iteración (Sprint Planning)

</li>
<li>
Ejecución de la iteración (Sprint)

</li>
<li>
Reunión diaria de sincronización del equipo (Daily)

</li>
<li>
Demostración de los requisitos completados (Code Review)

</li>
<li>
Retrospectiva (Proyects Feedbacks)

</li>
<li>
Refinamiento de la lista de requisitos y cambios en el proyecto
</li>
                  </ul >
                 <p>
                   Todo esto logrado con la organizacion mediante:

                   <ul className='textUl'>
                    <li>
                    Tablero de tareas

                    </li>
                    <li>
                    Historias de usuario y criterios de aceptación

                    </li>
                    <li>
                    Planning Poker


                    </li>
                    <li>
                    Velocidad del equipo

                    </li>
                    <li>
                    Principios de Lean Software Development

                    </li>
                  </ul>
                 </p>
                    <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}}
                src={require("../assets/img/SKILLS/l1 (3).png")}
              />
               <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}}
                src={require("../assets/img/SKILLS/l1 (6).png")}
              />
               <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}}
                src={require("../assets/img/SKILLS/l1 (11).png")}
              />
               <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}}
                src={require("../assets/img/SKILLS/l1 (12).png")}
              />
                 
                  </p>
                </TabPane>
                <TabPane tabId="2">
                  <p>habilidades puestas en marcha en cada uno de mis trabajos, siendo fundamental mis pilares HTML.CSS,JAVASCRIPT ,posteriormente adquiriendo fortalezas con frameworks  en React JS y Hooks  de igual forma en el Backend con Node JS ,siempre de la mano con la vanguardia creando Movil First con flex-box  y asu vez utilizando variadas bibliotecas logrando un trabajo de exelencia, de igual forma el manejo en equipo siempre a sido fundamental para mi utilizando un sistema de version como Git , para finalizar con testeos unitarios como Jest y Mocha. </p>
                  <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}}
                src={require("../assets/img/SKILLS/l1 (1).png")}
              />
               <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (2).png")}
              />
             
                <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (4).png")}
              />
                <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (5).png")}
              />
              
                <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (7).png")}
              />
                <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (8).png")}
              />
                 <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (9).png")}
              />
                 <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (10).png")}
              />
          
                 <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (13).png")}
              />
                 <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (14).png")}
              />
                 <img
                alt="..."
                className="img-thunbail img-no-padding img-responsive" style={{width:'5rem', margin:'4px'}} 
                src={require("../assets/img/SKILLS/l1 (15).png")}
              />
                </TabPane>
              
                 
              </TabContent>
            </Col>
           
        
    </>
  );
}

export default Skills;
