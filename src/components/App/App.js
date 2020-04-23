import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import SignUpPage from "../../Page/SignUpPage";
import SignInPage from "../../Page/SignInPage";
class App extends Component {
  state = {};
  render() {
    return (
      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={SignUpPage} />
          <Route path="/auth/register" component={SignUpPage} />
          <Route path="/auth/login" component={SignInPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
