import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CssBaseline, Paper } from '@material-ui/core';
// import { Wrapper, Content } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(https://source.unsplash.com/random)`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark'
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function AuthLayout({ children }) {
  //         <img alt="123" src="https://source.unsplash.com/random" />

  const classes = useStyles;
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <h1>Teste</h1>
      </Grid>
      <Grid item xs={12} sm={4} md={5} component={Paper} elevation={6} square>
        {children}
      </Grid>
    </Grid>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
