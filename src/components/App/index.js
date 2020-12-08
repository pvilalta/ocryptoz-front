// == Import npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// == Import
import SignIn from 'src/containers/SignIn';
import SignUp from 'src/containers/SignUp';

import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Router>
      <Switch>
        <Route path="/" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  </div>
);

// == Export
export default App;
