import React from 'react';
import PAGE from './PAGE';
import SignInSection from '../components/auth/SignInSection/SignInSection';
const SignInPage = props => {
  return (
    <PAGE>
      <SignInSection
        history={props.history}
        location={props.location}
        match={props.match}
      />
    </PAGE>
  );
};
export default SignInPage;
