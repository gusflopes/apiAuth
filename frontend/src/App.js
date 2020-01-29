import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route} from 'react-router-dom';

export default () => {
  return (
    <BrowserRouter>
        <Header />
        <p>Is this working?</p>
        <p>https://www.youtube.com/watch?v=BerEJPQOwOE&list=PLSpJkDDmpFZ7GowbJE-mvX09zY9zfYatI&index=14</p>
    </BrowserRouter>
  )
};