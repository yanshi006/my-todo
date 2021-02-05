import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import { TotalApp, SignUp, Login } from "./page/index";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/App'>
          <TotalApp />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;