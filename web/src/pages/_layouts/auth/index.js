import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

const RootGrid = styled(Grid)({
  height: '100%',
});

const PaperDiv = styled(Paper)({
  margin: '8, 4',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const useStyles = makeStyles(theme => ({
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

const ImageGrid = styled(Grid)({
  backgroundImage: `url(https://source.unsplash.com/random)`,
  backgroundRepeat: 'no-repeat',

  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export default function AuthLayout({ children }) {
  //         <img alt="123" src="https://source.unsplash.com/random" />

  const classes = useStyles;
  return (
    <RootGrid container component="main" className={classes.root}>
      <CssBaseline />
      <ImageGrid item xs={false} sm={4} md={7} className={classes.image}>
        <h1 className={classes.texto}>Teste</h1>
      </ImageGrid>
      <Grid item xs={12} sm={4} md={5}>
        <Paper elevation={6}>{children}</Paper>
      </Grid>
    </RootGrid>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
