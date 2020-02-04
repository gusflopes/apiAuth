import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import * as Yup from 'yup';
import { Formik} from 'formik'

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { signInRequest } from '~/store/modules/auth/actions';

import {GoogleLogin} from 'react-google-login';
import FacebookLogin from 'react-facebook-login';

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: `${theme.spacing(4)}px`,
    color: `${theme.palette.primary.main}`,

  },
  linebreaker: {
    margin: `${theme.spacing(4)}px 0`,
    alignSelf: 'center',
    width: '60%'
  },
  textField: {
    margin: `${theme.spacing(2)}px ${theme.spacing(8)}px ${theme.spacing(2)}px ${theme.spacing(8)}px `,
  },
  button: {
    margin: `${theme.spacing(2)}px 0`,
    width: '60%',
    alignSelf: 'center'
  },
  span: {
    color: 'red'
  },
  container: {
    width: '100%',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    backgroundColor: `${theme.palette.background.default}`

  }

}));

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string()
    .required('A senha é obrigatória')
    .min(6, 'Senha deve conter ao menos 6 caracteres'),
});

export default function SignIn(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  const responseGoogle = (response) => {
    console.log(response);
  }

  const responseFacebook = (response) => {
    console.log(response);
  }


  return (
    <div className={classes.container} >
      <h2 className={classes.title}>ACESSAR SUA CONTA</h2>
      <Formik
        className={classes.form}
        initialValues={{ email: '', password: ''}}
        // onSubmit here ##########
        onSubmit={(values) => handleSubmit(values)}
        validationSchema={schema}
        validateOnChange={true}
        validateOnBlur={true}
        >
          {({
            values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
            <div style={{display: 'flex', flexDirection: "column"}}>

        <TextField
          // type="email"
          name="email"
          label="E-mail"
          onChange={handleChange}
          value={values.email}
          placeholder="exemplo@email.com"
          className={classes.textField}
          error={errors.email && touched.email && errors.email ? true : false}
        />
        {<span className={classes.span}>{errors.email && touched.email && errors.email}</span>}
        <TextField
          type="password"
          name="password"
          label="Password"
          onChange={handleChange}
          value={values.password}
          placeholder="*********"
          className={classes.textField}
          error={errors.password && touched.password && errors.password ? true : false}
        />
        {<span className={classes.span}>{errors.password && touched.password && errors.password}</span>}

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={loading ? true : false}
          size="medium"
          className={classes.button}
          >
          {loading ? 'Carregando...' :'Entrar no Sistema'}
        </Button>
        <Button
          variant="outlined"
          color="primary"
          disabled={loading ? true : false}
          size="medium"
          className={classes.button}
          onClick={() => alert('Navegar para SignUp')}
          >Não é cliente? Criar Conta
        </Button>
        </div>


            </form>
          )}
        </Formik>

        <hr className={classes.linebreaker} />
      <div>
        <strong>Acessar com Redes Sociais</strong>
        <div style={{ marginTop: '20px' }}>
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_CLIENT_ID}
            autoLoad={true}
            fields="name,email"
            callback={responseFacebook}
            icon="fa-facebook"
            cssClass="fb-button"
          />
        </div>
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login com Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
}
