
import React from "react";
import "./WorkWhithMe.css"
// reactstrap components
import { Button, Container } from "reactstrap";
import {
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

// core components

function WorkWhithMe() {
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
    <>
      <div


       style={{
         backgroundImage:
           "url(" + require("../assets/img/ladyheader2.jpg") + ")",
      }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >


        <div className="filter" />
        <Container>

       
          
          <div className="motto text-center">
          
        
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="text-center">Trabaja conmigo</h2>
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
                    placeholder="Trabajemos en equipo..."
                    type="textarea"
                    rows="4"
                  />
                  <Row>
                    <Col className="ml-auto mr-auto" md="4">
                    <button    className="btn-round mr-1" type='submit' className='btn btn-primary'     color="neutral"
                   size='lg'  
                  
              outline >Send</button>
                     
                  Enviar Mensaje
                     
                      <Button
              href= "https://www.canva.com/design/DAEQCbEUxvI/G8DyPpphtG6bELfsmZsFug/view?website#4"
              
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
              size='lg'
            >
              <i className="fa fa-doc" />
              Descargar CV
            </Button>
                    </Col>
                  </Row>
                </Form>
              </Col>
            </Row>
            
          
          </div>
        </Container>
      </div>
    </>
  );
}

export default WorkWhithMe;

