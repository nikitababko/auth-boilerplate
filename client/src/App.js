import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Dashboard, Preferences } from './components';

import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <h1>Auth boilerplate</h1>
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/preferences" component={Preferences} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
