import React from 'react';
// import { useDispatch } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import styled from 'styled-components';

import PieChart from '~/components/PieChart';

// import { Container } from './styles';
const HeaderGrid = styled(Grid)`
  width: '100%';
`;

export default function Home() {
  // const dispatch = useDispatch();

  return (
    <>
      <HeaderGrid sm={12} md={12} lg={12}>
        <Typography variant="h6" noWrap align="center">
          Dashboard**
        </Typography>
      </HeaderGrid>

      <div style={{ height: '100%' }}>
        <h1 style={{ textAlign: 'center', alignSelf: 'center' }}>Dashboard</h1>

        <p> Testando </p>
        <div style={{ height: '300px', flex: 1 }}>
          <h2 style={{ textAlign: 'center' }}>Faturamento por Cliente</h2>
          <PieChart />
        </div>
      </div>
    </>
  );
}
