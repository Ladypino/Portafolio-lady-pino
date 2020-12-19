import React from "react";
import "../components/Styles/Footer.css";
import { Row, Container, Button } from "reactstrap";

const Footer = () => {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
          <nav className="footer-nav">
            <div className="social-line text-center">
              <Button
                className="btn-neutral btn-just-icon mr-1"
                href="https://www.linkedin.com/in/ladypino"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-linkedin" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon mr-1"
                href="https://app.talento.laboratoria.la/profile/rnCtPn7MCFUKztbdTvZjLAryciA3"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-code" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon mr-1"
                href="https://api.whatsapp.com/send?phone=56932700688"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-whatsapp" />
              </Button>

              <Button
                className="btn-neutral btn-just-icon"
                href="https://github.com/Ladypino"
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
};

export default Footer;
