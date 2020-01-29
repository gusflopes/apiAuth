import React from 'react';
import { useDispatch } from 'react-redux';

// import { Container } from './styles';
import { signOut } from '~/store/modules/auth/actions';

export default function Home() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p> Testando </p>
      <button type="button" onClick={handleSignOut}>
        Sair do sistema
      </button>
    </div>
  );
}
