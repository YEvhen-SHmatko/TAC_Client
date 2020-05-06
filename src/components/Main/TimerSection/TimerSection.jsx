import React, { Component } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import * as SEND from '../../../services/sendToDb';
const INIT_STATE = {
  createTask: {
    name: '',
    description: '',
  },
};
export default class SignUpSection extends Component {
  state = {
    ...INIT_STATE,
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      createTask: {
        ...this.state.createTask,
        [name]: value,
      },
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { name, description } = this.state.createTask;
    const body = {};
    console.log(body);
    // SEND.task(body)
    //   .then(res => {
    //     if (res.data.error) throw res.data.error;
    //     console.log(res);
    //   })
    //   .catch(alert);
  };
  render() {
    return (
      <form noValidate onSubmit={this.handleSubmit}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12}>
            <TextField
              autoComplete="name"
              variant="outlined"
              required
              fullWidth
              id="name"
              name="name"
              value={this.state.createTask.name}
              onChange={this.handleChange}
              label="Name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              multiline
              required
              fullWidth
              id="description"
              name="description"
              value={this.state.createTask.description}
              onChange={this.handleChange}
              label="Description"
            />
          </Grid>
          <Grid item xs={12}>
            <Grid item xs={12} md={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Create
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}
