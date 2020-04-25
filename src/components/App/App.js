import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import SignUpPage from '../../Page/SignUpPage';
import SignInPage from '../../Page/SignInPage';
import authConfirm from '../../services/auth-confirm';
class App extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={SignUpPage} />
          <Route path="/auth/register" component={SignUpPage} />
          <Route path="/auth/login" component={SignInPage} />
          <Route path="/auth/confirm" component={authConfirm} />
        </Switch>
      </Container>
    );
  }
}

export default App;
