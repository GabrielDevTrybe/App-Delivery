import React from 'react';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/" render={ () => <Redirect to="/login" /> } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/register" component={ Register } />
    </Switch>
  );
}

export default App;
