import React from 'react';
import PAGE from './PAGE';
import SignUpSection from '../components/auth/SignUpSection/SignUpSection';
const SignUpPage = props => {
  return (
    <PAGE>
      <SignUpSection
        history={props.history}
        location={props.location}
        match={props.match}
      />
    </PAGE>
  );
};
export default SignUpPage;
