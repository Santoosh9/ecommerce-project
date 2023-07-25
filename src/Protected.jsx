import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";



  const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
    console.log(Comp, loggedIn, path)
    return (
      // <Route
      //   path={path}
      //   {...rest}
      //   render={(props) => {
      //     return loggedIn ? <Comp {...props} /> : <Navigate to="/login" />;
      //   }}
      // />
      <p>Rote</p>
    );
  };

export default ProtectedRoute;
