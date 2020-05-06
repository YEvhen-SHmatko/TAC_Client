import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '99vh',
  },
}));

const ConfirmPage = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.root}>{children}</div>;
};
ConfirmPage.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ConfirmPage;
