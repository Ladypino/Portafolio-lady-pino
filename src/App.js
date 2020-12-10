
import React from "react";


 */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HelloWorld from './views/HelloWorld'




function App() {


  return (
    <Router>
      <Switch>
        <Route path="/" exact >
         
        
            <HelloWorld/>
        {/* 
        </Route>
        <Route path="/AboutMe" exact >
       <ProfilePage/>
        
        </Route>
     
        <Route path="/WorkWhithMe" exact >
          <LandingPage/>
        </Route>
        <Route path="Footer" exact>
          <Footer /> */}
        </Route>
      </Switch>
    </Router >
  );
}
export default App;