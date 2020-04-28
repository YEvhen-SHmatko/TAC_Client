import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import PAGE from '../../Page/PAGE';
import SignUpSection from '../auth/SignUpSection/SignUpSection';
import ConfirmSection from '../auth/ConfirmSection/ConfirmSection';
import SignInSection from '../auth/SignInSection/SignInSection';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
const App = () => {
  let history = useHistory();
  let location = useLocation();
  let match = useRouteMatch();
  return (
    <Container maxWidth="sm">
      <Switch>
        <Route exact path="/">
          Home
        </Route>
        <Route path="/auth/register">
          <PAGE
            children={
              <SignUpSection
                history={history}
                location={location}
                match={match}
              />
            }
          />
        </Route>
        <Route path="/auth/confirm">
          <PAGE
            children={
              <ConfirmSection
                history={history}
                location={location}
                match={match}
              />
            }
          />
        </Route>
        <Route path="/auth/login">
          <PAGE
            children={
              <SignInSection
                history={history}
                location={location}
                match={match}
              />
            }
          />
        </Route>
      </Switch>
    </Container>
  );
};

export default App;
