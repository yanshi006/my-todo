import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TotalApp, SignUp, Login } from "./page/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/app' component={TotalApp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
  )
}

export default App;