import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { makeStyles } from '@material-ui/core/styles';

import {Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    // marginTop: `${theme.spacing(4)}px`,
    // color: `${theme.palette.primary.main}`,

  },
  container: {
    // margin: `0 ${theme.spacing(2)}px`,
  }

}));

export default function Header(props) {
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleSignOut() {
    dispatch(signOut());
  }


  return (
    <nav className={classes.wrapper}>
      <div className={classes.container}><Typography variant="h6" noWrap>

    </Typography></div>
      <div className={classes.container}><Typography variant="h6" noWrap> {process.env.REACT_APP_NAME}</Typography></div>
      <div className={classes.container}>
        <Button type="button" color="primary" variant="contained" disableElevation size="small" onClick={handleSignOut}>
          Sair do sistema
        </Button>
      </div>
    </nav>
  );
}
