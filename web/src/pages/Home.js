import React from 'react';
import { useDispatch } from 'react-redux';

import PieChart from '~/components/PieChart';

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
      <div style={{ height: '500px', flex: 1 }}>
        <h2 style={{ textAlign: 'center' }}>Faturamento por Cliente</h2>
        <PieChart />
      </div>
      <div style={{ marginTop: '100px' }}>
        <button type="button" onClick={handleSignOut}>
          Sair do sistema
        </button>
      </div>
    </div>
  );
}
