import React from "react";

import { Container } from "reactstrap";
import './IndexHeader.css'

const IndexHeader = () => {
  return (
    <>
      <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("../assets/img/lady3.jpg") + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="title-brand">
              <h1 className="presentation-title">HOLA MUNDO!!!</h1>
              <div className="fog-low">
                <img alt="..." src={require("../assets/img/fog-low.png")} />
              </div>
              <div className="fog-low right">
                <img alt="..." src={require("../assets/img/fog-low.png")} />
              </div>
            </div>
            <h2 className="presentation-subtitle text-center">
             Lady Pino Ramirez
            </h2>
            <h5 className="presentation-subtitle text-center">
           Front end deveLoper
            </h5>
          </Container>
        </div>
        <div
          className="moving-clouds"
          style={{
            backgroundImage: "url(" + require("../assets/img/clouds.png") + ")",
          }}
        />
        <h6 className="category category-absolute">
          Designed and coded by Lady Pino
       
        </h6>
      </div>
    </>
  );
}

export default IndexHeader;