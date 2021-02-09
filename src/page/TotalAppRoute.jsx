import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AppContext } from "../AppContext";

const TotalAppRoute = ({ component: Component, ...rest }) => {

  const user = useContext(AppContext);
  console.log(user)

  return (
    <Route
      {...rest}
      render={props => user ? (
        <Component {...props} />
      ) : (
          <Redirect to='/login' />
        )
      }
    />
  )
}

export default TotalAppRoute;