import React, { createContext, useState, useEffect } from "react";
import firebase from "./config/Firebase";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setUser(user)
      console.log(user)
    })
  }, []);

  return (
    <AppContext.Provider value={user}>
      {children}
    </AppContext.Provider>
  )
};

export {
  AppContext,
  AppProvider
};