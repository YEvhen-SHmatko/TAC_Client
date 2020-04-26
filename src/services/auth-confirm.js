import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
const authConfirm = ({ history, location }) => {
  const query = queryString.parse(location.search);
  console.log(query);
  // http://178.20.156.208/auth/confirm/?key=h2ujogc2z3cdp2kgkn4rn8&id=10
  return <div>auth confirm</div>;
};
authConfirm.propstypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.string.isRequired,
  }).isRequired,
};
export default authConfirm;
