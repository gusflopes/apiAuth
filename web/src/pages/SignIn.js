import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { CustomInput } from './styles';
import { signInRequest } from '~/store/modules/auth/actions';

// import logo from '~/assets/logo.png';

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

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
});

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img
        src="http://www.lscont.com.br/wp-content/uploads/2018/09/lscont2-logo.png"
        alt="GymPoint"
      />

      <Form schema={schema} onSubmit={handleSubmit}>
        <TextField
          label="E-mail"
          name="email"
          placeholder="exemplo@email.com"
          className={classes.textField}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          placeholder="*********"
          className={classes.textField}
        />

        <Button type="submit" className={classes.button}>
          {loading ? 'Carregando...' : 'Entrar no Sistema'}
        </Button>
      </Form>
      <div>
        <p>Third Party Login</p>
        <div style={{ marginTop: '20px' }}>
          <button type="button">Facebook</button>
        </div>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <button type="button">Google</button>
        </div>
      </div>
    </>
  );
}
