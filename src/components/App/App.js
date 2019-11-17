import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from '../Header';
import Auth from '../Auth';

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Router>
        <Switch>
          <Route path="/login" component={Auth} exact />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
