import React from 'react';
import PAGE from './PAGE';
import ConfirmSection from '../components/auth/ConfirmSection/ConfirmSection';
const AuthConfirmPage = props => {
  return (
    <PAGE>
      <ConfirmSection
        history={props.history}
        location={props.location}
        match={props.match}
      />
    </PAGE>
  );
};
export default AuthConfirmPage;
