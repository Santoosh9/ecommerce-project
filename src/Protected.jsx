import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux/';

export const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.token);

  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const PreventedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.token);

  if (user) {
    return <Navigate to="/mycourse" />;
  } else {
    return children;
  }
};



