// == Import npm
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// == Import
import SignIn from 'src/containers/SignIn';
import SignUp from 'src/containers/SignUp';
import Dashboard from 'src/components/Dashboard';

import './styles.css';

// == Composant
const App = ({ loggedData }) => (
  <div className="app">
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={loggedData.email === undefined ? SignIn : Dashboard}
        />
        <Route path="/signup" exact component={SignUp} />
      </Switch>
    </Router>
  </div>
);
App.propTypes = {
  loggedData: PropTypes.object.isRequired,
};

// == Export
export default App;
