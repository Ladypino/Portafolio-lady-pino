import React from "react";

// reactstrap components
import { Row, Container, NavItem, NavLink, } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <Row>
        <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://https://github.com/Ladypino"
                target="_blank"
                title="Redireccionar a GitHub Lady Pino"
                rel="noopener noreferrer"
              >
                <i className="fa fa-github" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://https://github.com/Ladypino"
                target="_blank"
                title="Redireccionar a GitHub Lady Pino"
                rel="noopener noreferrer"
              >
                <i className="nc-icon nc-briefcase-24" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                data-placement="bottom"
                href="https://https://github.com/Ladypino"
                target="_blank"
                title="Redireccionar a GitHub Lady Pino"
                rel="noopener noreferrer"
              >
                <i className="nc-icon nc-email-85" />
                <p className="d-lg-none">GitHub</p>
              </NavLink>
            </NavItem>

            
          
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
