import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ Component, ...rest }) => {
  // authentication logic
  const isAuthenticated = Cookies.get("userToken");
  //const isAuthenticated = true;

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
