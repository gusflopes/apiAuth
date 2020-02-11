import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
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

const ImageGrid = styled(Grid)({
  backgroundImage: `url(https://source.unsplash.com/random)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const AuthGrid = styled(Grid)({
  // height: '100%',
  // display: 'flex',
  // flex: 1,
  // flexDirection: 'column',
});

export default function AuthLayout({ children }) {
  return (
    <RootGrid container component="main">
      <CssBaseline />
      <ImageGrid item boxshadow={6} xs={false} sm={4} md={7} lg={8} />

      <AuthGrid
        boxshadow={6}
        item
        xs={12}
        sm={8}
        md={5}
        lg={4}
        elevation={6}
        component={PaperDiv}
      >
        {children}
      </AuthGrid>
    </RootGrid>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
