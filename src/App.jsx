import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { TotalApp, SignUp, Login, TotalAppRoute } from "./page/index";
import { AppProvider } from "./AppContext";

const App = () => {
  return (
  <AppProvider>
    <Router>
      <Switch>
        <TotalAppRoute exact path='/' component={TotalApp} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </Router>
  </AppProvider>
  )
}

export default App;