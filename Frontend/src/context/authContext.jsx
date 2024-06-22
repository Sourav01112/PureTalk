import Cookies from "js-cookie";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuthenticated = (value) => {
    setIsAuthenticated(value);
  };

  const token = document.cookie;
  // .split("; ")
  // .find((row) => row.startsWith("authToken="))
  // .split("=")[1];
  console.log("authToken>>>>>>>:", token);

  const checkAuth = () => {
    const token = Cookies.get("authToken");
    console.log("{ token }", token);

    if (token !== null && token !== undefined) {
      console.log("Token exists. Setting authenticated to true.");
      setAuthenticated(true);
      console.log(isAuthenticated);
    } else {
      console.log("Token does not exist. Setting authenticated to false.");
      setAuthenticated(false);
    }
  };

  const logout = () => {
    Cookies.remove("authToken");
    setAuthenticated(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    console.log("Authentication state changed:", isAuthenticated);
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, checkAuth, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
