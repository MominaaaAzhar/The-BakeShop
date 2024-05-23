import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { loadUser } from './redux/actions/authActions';
import setAuthToken from './utils/setAuthToken';
import Navbar from './components/Navbar';
import Routes from './routes';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Routes />
    </Router>
  );
};

export default App;
