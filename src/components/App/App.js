import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import routes from '../../routes/routes';
const Loader = <div>...</div>;
const App = () => {
  return (
    <Container maxWidth="sm">
      <Switch>
        <Suspense fallback={Loader}>
          <Route
            exact
            path={routes.HomePage.path}
            component={routes.HomePage.component}
          />
          <Route
            path={routes.SignUpPage.path}
            component={routes.SignUpPage.component}
          />
          <Route
            path={routes.SignInPage.path}
            component={routes.SignInPage.component}
          />
          <Route
            path={routes.AuthConfirmPage.path}
            component={routes.AuthConfirmPage.component}
          />
        </Suspense>
      </Switch>
    </Container>
  );
};

export default App;
