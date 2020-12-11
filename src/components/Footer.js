import React from "react";
import './Footer.css'
// reactstrap components
import { Row, Container, Button } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
          <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="linkedin"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-code" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                   
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-whatsapp" />
                  </Button>


                  <Button
                    className="btn-neutral btn-just-icon"
                    color="purple"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-github" />
                  </Button>
                </div>
               
          </nav>
          <div className="credits ml-auto">
            <span className="copyright">
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Creative Lady Pino Ramirez
            </span>
          </div>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
