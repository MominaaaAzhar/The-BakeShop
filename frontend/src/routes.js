import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Contact from './components/Contact';
import About from './components/About';
import Profile from './components/Profile';
import Products from './pages/Products';
import ProductManagement from './pages/ProductManagement';
import UserManagement from './pages/UserManagement';
import Admin from './pages/Admin';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<PrivateRoute component={HomePage} />} />
      <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<PrivateRoute component={Profile} />} />
      <Route path="/products" element={<Products />} />
      <Route path="/admin" element={<PrivateRoute component={Admin} adminOnly />}>
        <Route path="product-management" element={<PrivateRoute component={ProductManagement} adminOnly />} />
        <Route path="user-management" element={<PrivateRoute component={UserManagement} adminOnly />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
