import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Home from '../pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/auth/signup" exact component={SignUp} />
      <Route path="/auth/forgotpassword" exact component={ForgotPassword} />

      <Route path="/home" exact component={Home} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
