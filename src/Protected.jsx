import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux/';

  const ProtectedRoute = ({children}) => {

    const user = useSelector((state) => state.auth.token);
    console.log(user);
    console.log(children)

    if(!user){
      return <Navigate to="/login" />
    } else {
      return children;
    }
  };

export default ProtectedRoute;
