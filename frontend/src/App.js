import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Home from './pages/Home'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';

import reducers from './_reducers/index';

export default (props) => {
  return (
    <Provider store={createStore(reducers, {})}>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/dashboard" component={Dashboard} />
        {props.children}
      </BrowserRouter>
    </Provider>
  )
};
