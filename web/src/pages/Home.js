import React from 'react';
import { useDispatch } from 'react-redux';

import PieChart from '~/components/PieChart';

// import { Container } from './styles';

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: '#7159c1' }}>
      <h1>Home Page</h1>

      <p> Testando </p>
      <div style={{ height: '500px', flex: 1 }}>
        <h2 style={{ textAlign: 'center' }}>Faturamento por Cliente</h2>
        <PieChart />
      </div>
    </div>
  );
}
