import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
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
        <div className="section text-center"  color="black">
          <Container>
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
              <Col md="6">
                <div className="info">
                <div className="avatar">
                
              <img
               
                className="img-thumbnail img-no-padding img-responsive "
                src={require("../assets/img/mockups/artSpace.jpeg")}
              />
            </div>
               
                 
                  <div className="description">
                    <h4 className="info-title">Art Space</h4>
                    <p className="description">
                    Art Space Red Social que viene a responder las necesidades de interacción de las personas,tendrás acceso a la mejor comunidad de artes manuales de Chile! Podrás crear una cuenta de acceso loguearte con ella; crear, editar, borrar y "likear" publicaciones y charlar con amigos
                    </p>
                    <Button className="btn-round" color="purple" href="https://fabianesantos.github.io/SCL014-social-network/src/index.html#/inicio-sesion">
                      Prototipo
                    </Button><Button className="btn-round" color="purple" href="https://github.com/Ladypino/SCL014-social-network">
                     Repositorio
                    </Button>

                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                <div className="avatar">
                
                
                <img className="img-thumbnail img-no-padding img-responsive "
                  src={require("../assets/img/mockups/burguerQueen.png")}
                />
              </div>
                  <div className="description">
                    <h4 className="info-title">Burguer Queen</h4>
                    <p>
                    Burger Queen es un software Gastronómico ,con una interfaz para  tomar pedidos usando una tablet (ver responsive IPad) ,dejando atrás las comandas escritas ,perdida o información incomprensible optimizando la organización del trabajo  automatizando los procesos del pedido.
                    </p>
                    <Button className="btn-round" color="purple" href="https://burger-queen-5875a.web.app/">
                    Prototipo
                    </Button>
                    <Button className="btn-round" color="purple" href="https://github.com/Ladypino/burger-queen">
                  Repositorio
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="8">
                <div className="info">
                <img
                 
                 className="img-thumbnail img-no-padding img-responsive "
                 src={require("../assets/img/mockups/cpT.png")}
               />
                  <div className="description">
                    <h4 className="info-title">Comida Para todos</h4>
                    <p>
                    "Comida para todos”  Fundación que nace de organizaciones sociales,que busca salvaguardar la Seguridad Alimentaria, en Chile y el mundo,se resuelve problemática de los diferentes tipos de donación aplicando, firebase , hooks se estructura pagina completa en diseño y funcionalidad
                    </p>
                    <Button className="btn-round" color="purple" href="https://comida-para-todos-28f10.web.app/">
                      Prototipo
                    </Button> 
                   
                    <Button className="btn-round" color="purple" href="https://github.com/Ladypino/comida-para-todos">
                      Repositorio
                    </Button>
                  </div>
                </div>
              </Col>
        
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Let's talk about us</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        // src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        <h6 className="card-category">Product Manager</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      Teamwork is so important that it is virtually impossible
                      for you to reach the heights of your capabilities or make
                      the money that you want without becoming very good at it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        // src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        <h6 className="card-category">Designer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A group becomes a team when each member is sure enough of
                      himself and his contribution to praise the skill of the
                      others. No one can whistle a symphony. It takes an
                      orchestra to play it.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        // src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        <h6 className="card-category">Developer</h6>
                      </div>
                    </a>
                    <p className="card-description text-center">
                      The strength of the team is each individual member. The
                      strength of each member is the team. If you can laugh
                      together, you can work together, silence isn’t golden,
                      it’s deadly.
                    </p>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      className="btn-just-icon btn-neutral"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-twitter" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-google-plus" />
                    </Button>
                    <Button
                      className="btn-just-icon btn-neutral ml-1"
                      color="link"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                  </CardFooter>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section landing-section">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Keep in touch?</h2>
                <Form className="contact-form">
                  <Row>
                    <Col md="6">
                      <label>Name</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-single-02" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Name" type="text" />
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <label>Email</label>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="nc-icon nc-email-85" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Email" type="text" />
                      </InputGroup>
                    </Col>
                  </Row>
                  <label>Message</label>
                  <Input
                    placeholder="Tell us your thoughts and feelings..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                      <Button className="btn-fill" color="danger" size="lg">
                        Send Message
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
     
    </>
  );
}

export default Proyects;
