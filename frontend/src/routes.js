import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<PrivateRoute component={HomePage} />} />
      <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      {/* Add other routes here */}
    </Routes>
  );
};

export default AppRoutes;
