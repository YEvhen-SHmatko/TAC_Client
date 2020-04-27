import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import * as SEND from '../../../services/sendToDb';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    padding: '10px 20px',
    background: 'rgb(63, 81, 181)',
    color: 'rgb(255, 255, 255)',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
}));
const Title = props => {
  const classes = useStyles();
  return <h2 className={classes.title}>{props.title}</h2>;
};
const Link = props => {
  const classes = useStyles();
  return (
    <NavLink to={props.to} className={classes.link} replace>
      {props.text}
    </NavLink>
  );
};
const INIT_STATE = {
  title: 'Test',
  to: 'Test',
  text: 'Test',
};
class ConfirmSection extends Component {
  state = { ...INIT_STATE };
  componentDidMount() {
    const { pathname } = this.props.location;
    console.log(pathname);
    SEND.confirm(pathname)
      .then(res => {
        console.log(res.data);
        if (res.data.confirm) {
          this.setState({
            title: 'Email Confirmed',
            to: '/auth/login',
            text: 'Go to login',
          });
        } else {
          this.setState({
            title: `Email don't confirmed`,
            to: pathname,
            text: 'repeat confirmation',
          });
        }
      })
      .catch(alert);
  }

  render() {
    const { title, to, text } = this.state;
    return (
      <Grid container spacing={2} justify="center" alignItems="center">
        <Grid item xs={12}>
          <Title title={title} />
        </Grid>
        <Grid item xs={6}>
          <Link to={to} text={text} />
        </Grid>
      </Grid>
    );
  }
}

export default ConfirmSection;
