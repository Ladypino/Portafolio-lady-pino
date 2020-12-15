
import React from "react";
import "./WorkWhithMe.css"
// reactstrap components
import { Button, Container } from "reactstrap";

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
            <h1>Mi Informacion</h1>
            <h3>Mi CV</h3>
            <br />
            <Button
              href= "https://www.canva.com/design/DAEQCbEUxvI/G8DyPpphtG6bELfsmZsFug/view?website#4"
              
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-doc" />
              Descargar CV
            </Button>
          
          </div>
        </Container>
      </div>
    </>
  );
}

export default WorkWhithMe;

