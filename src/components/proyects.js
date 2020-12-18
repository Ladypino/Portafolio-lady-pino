

import Carrousel2 from './carrousel2.js'
 import './proyects.css'
import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


// reactstrap components
import {

  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components




const Proyects =() => {

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setIsClose] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  const toggle2 = () => setIsOpen(!isOpen);
  const toggle3 = () => setIsOpen(!isOpen);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
     
        <div className="section section-dark text-center">

        <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Mis Trabajos</h2>
                <h5 className="description">
                Encontraras un extracto de mi trabajo, el cual fue 
                 realizado con mucho cariño y esfuerzo para lograr siempre un impacto positivo
                  en la vida de mi usuario, empatizando  con sus dolores, buscando la mejor solucion para ellos,
                   diseñando y desarrollando una aplicacion personalizada para cada uno, creando una experiencia unica,
                   gratificante y por sobre todo lograr un resultado deseable y preminente.
                </h5>
                <br />
                <div  className='btnMoreInfo'>
                    <Button onClick={toggle} style={{ marginBottom: '5rem', width:'20rem'}}  >   <img
                   alt="..."
                className="img-thumbnail img-no-padding img-responsive "
                src={require("../assets/img/mockups/as2.png")}
              />
              </Button>
      <Collapse isOpen={isOpen}>
      <Collapse isClose={isClose}/>
        <Card>
       
        Art Space Red Social que viene a responder las necesidades de interacción de las personas,
        tendrás acceso a la mejor comunidad de artes manuales de Chile! Podrás crear una cuenta de 
        acceso loguearte con ella; crear, editar, borrar y "likear" publicaciones y charlar con amigos


        </Card>

        <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
      </Collapse>
    </div>





    <div  className='btnMoreInfo'>
                    <Button onClick={toggle2} style={{ marginBottom: '5rem',  width:'25rem'}}  >   <img
                   alt="..."
                className="img-thumbnail img-no-padding img-responsive "
                src={require("../assets/img/mockups/bq2.png")}
              />
              </Button>
      <Collapse isOpen={isOpen}>
      <Collapse isClose={isClose}/>
        <Card>
       
        Art Space Red Social que viene a responder las necesidades de interacción de las personas,
        tendrás acceso a la mejor comunidad de artes manuales de Chile! Podrás crear una cuenta de 
        acceso loguearte con ella; crear, editar, borrar y "likear" publicaciones y charlar con amigos


        </Card>

        <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
      </Collapse>
    </div>



    <div  className='btnMoreInfo'>
                    <Button onClick={toggle3} style={{ marginBottom: '5rem',  width:'30rem' }}  >   <img
                   alt="..."
                className="img-thumbnail img-no-padding img-responsive "
                src={require("../assets/img/mockups/cpt2.png")}
              />
              </Button>
      <Collapse isOpen={isOpen}>
        <Card style={{ backgroundcolor:'white' }} >
       
        Art Space Red Social que viene a responder las necesidades de interacción de las personas,
        tendrás acceso a la mejor comunidad de artes manuales de Chile! Podrás crear una cuenta de 
        acceso loguearte con ella; crear, editar, borrar y "likear" publicaciones y charlar con amigos


        </Card>

        <Row>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Beautiful Gallery</h4>
                    <p className="description">
                      Spend your time generating new ideas. You don't have to
                      think of implementing.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">New Ideas</h4>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Statistics</h4>
                    <p>
                      Choose from a veriety of many colors resembling sugar
                      paper pastels.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-sun-fog-29" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Delightful design</h4>
                    <p>
                      Find unique and handmade delightful designs related items
                      directly from our sellers.
                    </p>
                    <Button className="btn-link" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
      </Collapse>
    </div>


              </Col>
            </Row>
            <br />
            <br />
            
          </Container>
        </div>
       
         








          {/* <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Mis Trabajos</h2>
                <h5 className="description">
                 Encontraras un extracto de mi trabajo, el cual fue 
                 realizado con mucho cariño y esfuerzo para lograr siempre un impacto positivo
                  en la vida de mi usuario,empatizando  con sus dolores,buscando la mejor solucion para ellos,
                   diseñando y desarrollando una aplicacion personalizada para cada uno, creando una experiencia unica,
                   gratificante y por sobre todo lograr un resultado deseable y preminente.
                </h5>
                <br />
                <h2 className="title">
                Conoce mas
                </h2>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                <div className="avatar">
                
              <img
               
                className="img-thumbnail img-no-padding img-responsive "
                src={require("../assets/img/mockups/artSpace.jpeg")}
              />
                 <img
               
               className="img-thumbnail img-no-padding img-responsive "
               src={require("../assets/img/mockups/as2.png")}
             />
                 <img
               
               className="img-thumbnail img-no-padding img-responsive "
               src={require("../assets/img/mockups/as3.png")}
             />
            </div>
               
                 
                  <div >
                    <h4 className="info-title">Art Space</h4>
                    <p className="description">
                    Art Space Red Social que viene a responder las necesidades de interacción de las personas,tendrás acceso a la mejor comunidad de artes manuales de Chile! Podrás crear una cuenta de acceso loguearte con ella; crear, editar, borrar y "likear" publicaciones y charlar con amigos
                    </p>
                    <Button className="btn-round" color='info' href="https://fabianesantos.github.io/SCL014-social-network/src/index.html#/inicio-sesion">
                      Prototipo
                    </Button>','
                    <Button className="btn-round" color="info"    margin= '13px' href="https://github.com/Ladypino/SCL014-social-network">
                     Repositorio
                    </Button>

                  </div>
                </div>
              </Col>
              <Col md="4">
                <div >
                <div >
                
                
                <img className="img-thumbnail img-no-padding img-responsive "
                  src={require("../assets/img/mockups/burguerQueen.png")}
                />
                     <img
               
               className="img-thumbnail img-no-padding img-responsive "
               src={require("../assets/img/mockups/bq2.png")}
             />
                  <img
               
               className="img-thumbnail img-no-padding img-responsive "
               src={require("../assets/img/mockups/bq3.png")}
             />
              </div>
                  <div >
                    <h4 className="info-title">Burguer Queen</h4>
                    <p className="description">
                    Burger Queen es un software Gastronómico ,con una interfaz para  tomar pedidos usando una tablet (ver responsive IPad) ,dejando atrás las comandas escritas ,perdida o información incomprensible optimizando la organización del trabajo  automatizando los procesos del pedido.
                    </p>
                    <Button className="btn-round" color="info" href="https://burger-queen-5875a.web.app/">
                    Prototipo
                    </Button>','
                    <Button className="btn-round" color="info" href="https://github.com/Ladypino/burger-queen">
                  Repositorio
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                <img
                 
                 className="img-thumbnail img-no-padding img-responsive "
                 src={require("../assets/img/mockups/cpT.png")}
               />
                    <img
               
               className="img-thumbnail img-no-padding img-responsive "
               src={require("../assets/img/mockups/cpt2.png")}
             />
            
                  <div >
                    <h4 className="info-title">Comida Para todos</h4>
                    <p className="description">
                    "Comida para todos”  Fundación que nace de organizaciones sociales,que busca salvaguardar la Seguridad Alimentaria, en Chile y el mundo,se resuelve problemática de los diferentes tipos de donación aplicando, firebase , hooks se estructura pagina completa en diseño y funcionalidad
                    </p>
                    <Button className="btn-round" color="info"  href="https://comida-para-todos-28f10.web.app/">
                      Prototipo
                    </Button> ','
                   
                    <Button className="btn-round" color="info"  href="https://github.com/Ladypino/comida-para-todos">
                      Repositorio
                    </Button>
                  </div>
                </div>
              </Col>
        
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Habilidades Y Conocimientos</h2>
               <Carrousel2 />
                
                    </Col>
                  </Row>
               
            
          
          </Container> */}
   
      
     
    </>
  );
}

export default Proyects;
