import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Dashboard, Preferences, Login } from './components';
import useToken from './components/App/useToken';

import './App.css';

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

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
