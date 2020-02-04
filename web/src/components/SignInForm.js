import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: '30px',
    marginRight: '30px',
  },
  button: {
    marginTop: '20px',
    marginBottom: '20px',
  },
}));


export default function SignInForm(props) {
  const {loading} = props;
  const classes = useStyles();

  return (
    <form onSubmit={() => {console.log('Submit!')}}>
        <TextField
          id="email"
          name="email"
          label="E-mail"
          placeholder="exemplo@email.com"
          className={classes.textField}
          fullWidth
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder="*********"
          className={classes.textField}
        />

        <Button
          type="submit"
          fullWidth
          variant="raised"
          color="primary"
          className={classes.button}
        >
          {loading ? 'Carregando...' : 'Entrar no Sistema'}
        </Button>
    </form>
  );
}
