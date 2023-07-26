import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.token);
  console.log(user);

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
