
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
// pages
import Index from "views/Index.js";

import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from './pages/helloWorld'
import About from './pages/about';
import Proyects from './pages/proyects';
import ContactMe from './pages/contactMe';
import WorkWhithMe from './pages/workWhithMe';
import index from "views";

export const ShowContext = React.createContext(null);

function App() {
  const [formToShow, setFormToShow] = useState('Huertas');
  const [positionScrollForm, setPositionScrollForm] = useState(0);

  return (
    <Router>
      <Switch>
        <Route path="/" exact >
          <ShowContext.Provider
            value={{
              formToShow: [formToShow, setFormToShow],
              positionScrollForm: [positionScrollForm, setPositionScrollForm]
            }}
          >
            <index/>
          </ShowContext.Provider>
        </Route>
        <Route path="/AboutMe" exact >
          <ShowContext.Provider
            value={{
              formToShow: [formToShow, setFormToShow],
              positionScrollForm: [positionScrollForm, setPositionScrollForm]
            }}
          >
            <Profile/>
          </ShowContext.Provider>
        </Route>
        <Route path="/Proyects" exact >
          <ShowContext.Provider>
            <Proyects />
          </ShowContext.Provider>
        </Route>
        <Route path="/WorkWhithMe" exact >
          <WorkWhithMe/>
        </Route>
        <Route path="ContactMe" exact>
          <ContactMe />
        </Route>
      </Switch>
    </Router >
  );
}
export default App;