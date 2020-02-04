import React from 'react';
import { useDispatch } from 'react-redux';
import { signOut } from '~/store/modules/auth/actions';

import { makeStyles } from '@material-ui/core/styles';

import {Button, Drawer} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: `${theme.spacing(4)}px`,
    color: `${theme.palette.primary.main}`,

  },
  wrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#15a',
    maxHeight: `${theme.spacing(6)}px`,
    alignItems: 'center',
  },
  container: {
    margin: `0 ${theme.spacing(2)}px`,
  }

}));

export default function Header() {
  const dispatch = useDispatch();
  const classes = useStyles();

  function handleSignOut() {
    dispatch(signOut());
  }


  return (
    <nav className={classes.wrapper}>
      <div className={classes.container}>Esquerda</div>
      <div className={classes.container}>Centro</div>
      <div className={classes.container}>
        <Button type="button" variant="outlined" size="small" onClick={handleSignOut}>
          Sair do sistema
        </Button>
      </div>
    </nav>
  );
}
