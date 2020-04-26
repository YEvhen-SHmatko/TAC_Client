import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import * as SEND from '../../services/sendToDb';

const INIT_STATE = {
  formData: {
    username: 'test',
    password: 'test123',
  },

  disableSabmit: false,
  errors: {
    username: {
      text: 'You have entered an invalid email address!',
      bool: null,
    },
    password: {
      text: '',
      bool: null,
    },
  },
};
export default class SignInSection extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
    location: PropTypes.shape({
      search: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }).isRequired,
  };
  state = {
    ...INIT_STATE,
  };
  handleChange = event => {
    const { name, value } = event.target;
    if (name === 'username') this.validationEmpty(name, value);
    if (name === 'password') this.validationEmpty(name, value);
    this.disableSabmit();
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };
  validationEmpty = (key, value) => {
    const bool = value.length > 0 ? false : true;
    const { errors } = this.state;
    this.setState({ errors: { ...errors, [key]: { ...errors[key], bool } } });
  };
  disableSabmit = () => {
    const { errors } = this.state;
    const disabled =
      Object.keys(errors).filter(
        key => errors[key].bool || errors[key].bool === null,
      ).length > 0;
    this.setState({ disableSabmit: disabled });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state.formData;
    const { path } = this.props.match;
    const body = { username, password };
    SEND.login(path, body)
      .then(res => {
        if (res.data.error) throw res.data.error;
        console.log(res);
      })
      .catch(alert);
  };
  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Name/Email Address"
              value={this.state.formData.username}
              onChange={this.handleChange}
              name="username"
              autoComplete="username"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              type="password"
              required
              fullWidth
              id="password"
              label="Password"
              value={this.state.formData.password}
              onChange={this.handleChange}
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="flex-end">
              <Grid item xs={12} md={6}>
                <Button
                  disabled={this.state.disableSabmit}
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to="/auth/register" className="auth-link" replace>
                  You don't account? Sign up
                </NavLink>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}
