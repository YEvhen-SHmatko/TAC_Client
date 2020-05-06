import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
export default function TimerItem(props) {
  const { name, description, dateCreate, time, id } = props.item;
  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid className="timerSection-item" item xs={12}>
        {name}
      </Grid>
      <Grid className="timerSection-item" item xs={12}>
        {description}
      </Grid>
      <Grid className="timerSection-item" item xs={12}>
        {dateCreate}
      </Grid>
      <Grid className="timerSection-item" item xs={12}>
        {time}
      </Grid>
      <Grid className="timerSection-item" item xs={6}>
        ||
      </Grid>
      <Grid className="timerSection-item" item xs={6} id={id}>
        X
      </Grid>
    </Grid>
  );
}
