import React from 'react';
const HomePage = React.lazy(() =>
  import('../Page/HomePage' /* webpackChunkName: "HomePage" */),
);
const SignUpPage = React.lazy(() =>
  import('../Page/SignUpPage' /* webpackChunkName: "SignUpPage" */),
);
const SignInPage = React.lazy(() =>
  import('../Page/SignInPage' /* webpackChunkName: "SignInPage" */),
);
const AuthConfirmPage = React.lazy(() =>
  import('../Page/AuthConfirmPage' /* webpackChunkName: "AuthConfirmPage" */),
);
const repositori = '';
const routes = {
  HomePage: {
    path: repositori + '/',
    component: HomePage,
  },
  SignUpPage: {
    path: repositori + '/auth/register',
    component: SignUpPage,
  },
  SignInPage: {
    lable: 'Login',
    path: repositori + '/auth/login',
    component: SignInPage,
  },
  AuthConfirmPage: {
    path: repositori + '/auth/confirm',
    component: AuthConfirmPage,
  },
};
export default routes;
