import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Header from '../Header';
import Auth from '../Auth';

class App extends Component {
  render() {
    return (
      <Router>
        <Container maxWidth="lg">
          <Header />
          <Switch>
            <Route path="/login" exact component={Auth} />
            <Route path="/" component={test} />

          </Switch>
        </Container>
      </Router>
    );
  }
}

const test = () => <h1>min</h1>

export default App;
