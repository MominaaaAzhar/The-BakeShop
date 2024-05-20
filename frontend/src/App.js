import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Routes from './routes';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
