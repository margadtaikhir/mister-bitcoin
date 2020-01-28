import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

import './App.css';

import Home from './pages/Home';
import Contacts from './pages/Contacts';
import ContactDetails from './pages/ContactDetails';
import NotFound from './pages/NotFound';
import NavBar from './cmps/NavBar'

function App() {
  return (
    <Router history={history}>
      <NavBar></NavBar>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/contact/:id" component={ContactDetails} exact />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
