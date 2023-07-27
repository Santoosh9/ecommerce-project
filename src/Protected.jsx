import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/';

<<<<<<< HEAD
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.token);
  console.log(user);
=======
  export const ProtectedRoute = ({children}) => {
>>>>>>> 1952cd89cab44df5ea366eb9bc83c6ecc8b1531c

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

  export const PreventedRoute = ({children}) => {

    const user = useSelector((state) => state.auth.token);

    if(user){
      console.log("user")
      return <Navigate to="/mycourse"/>
    } else {
      console.log(" no user")
      return children;
    }
  };

