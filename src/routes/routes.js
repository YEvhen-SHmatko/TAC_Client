import React from 'react';
const HomePage = React.lazy(() =>
  import('../Page/HomePage' /* webpackChunkName: "HomePage" */),
);
const AboutPage = React.lazy(() =>
  import('../Page/AboutPage' /* webpackChunkName: "AboutPage" */),
);
const LoginPage = React.lazy(() =>
  import('../Page/LoginPage' /* webpackChunkName: "AboutPage" */),
);
const CreatePage = React.lazy(() =>
  import('../Page/CreatePage' /* webpackChunkName: "CreatePage" */),
);
const repositori = '';
const routes = {
  HomePage: {
    lable: 'Home',
    path: repositori + '/',
    component: HomePage,
  },
  AboutPage: {
    lable: 'About',
    path: repositori + '/about',
    component: AboutPage,
  },
  LoginPage: {
    lable: 'Login',
    path: repositori + '/auth/login',
    component: LoginPage,
  },
  CreatePage: {
    lable: 'Create',
    path: repositori + '/create',
    component: CreatePage,
  },
  AuthConfirm: {
    lable: 'AuthConfirm',
    path: repositori + '/create',
    component: CreatePage,
  },
};
export default routes;
