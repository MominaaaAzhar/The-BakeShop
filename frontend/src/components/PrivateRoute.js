import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, adminOnly }) => {
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);

  if (loading) return <div>Loading...</div>;

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (adminOnly && (!user || !user.isAdmin)) {
    return <Navigate to="/home" />;
  }

  return <Component />;
};

export default PrivateRoute;
