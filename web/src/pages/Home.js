import React from 'react';
// import { useDispatch } from 'react-redux';
import {
  CssBaseline,
  Container,
  Box,
  Grid,
  Typography,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import PieChart from '~/components/PieChart';

const HeaderGrid = styled(Grid)({
  maxWidth: '100%',
  backgroundColor: '#7159c1',
  marginBottom: '10px',
});
const FooterGrid = styled(Grid)({
  maxWidth: '100%',
  backgroundColor: '#7159c1',
  marginTop: '10px',
});
const MainGrid = styled(Grid)({
  maxWidth: '100%',
  maxHeight: '100%',

  backgroundColor: '#7159c1',

  display: 'flex',
  flex: 1,
  flexDirection: 'row',
});
const CharWrapper = styled(Grid)({
  height: '100%',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});
const ChartGrid = styled(Grid)({
  height: '45vh',
  width: '60vh',
  maxWidth: '100%',
  maxHeight: '100%',
  backgroundColor: '#789',
});

export default function Home() {
  // const dispatch = useDispatch();

  return (
    <>
      <CssBaseline />
      <HeaderGrid container spacing={1} xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h6" align="center">
          Dashboard**
        </Typography>
      </HeaderGrid>

      <MainGrid container spacing={1}>
        <CharWrapper container item xs={12} sm={6} md={6} lg={4}>
          <h1> Chart 01</h1>
          <ChartGrid>
            <PieChart />
          </ChartGrid>
          <h4>Foooter Chart 01</h4>
        </CharWrapper>

        <CharWrapper container item xs={12} sm={6} md={6} lg={4}>
          <h1> Chart 02</h1>
          <ChartGrid>
            <PieChart />
          </ChartGrid>
          <h4>Footer Chart 02</h4>
        </CharWrapper>

        <CharWrapper container item xs={12} sm={6} md={6} lg={4}>
          <h1> Chart 03</h1>
          <ChartGrid>
            <PieChart />
          </ChartGrid>
          <h4>Footer Chart 03</h4>
        </CharWrapper>

        <CharWrapper container item xs={12} sm={6} md={6} lg={4}>
          <h1> Chart 04</h1>
          <ChartGrid>
            <PieChart />
          </ChartGrid>
          <h4>Foooter Chart 04</h4>
        </CharWrapper>

        <CharWrapper container item xs={12} sm={6} md={6} lg={4}>
          <h1> Chart 05</h1>
          <ChartGrid>
            <PieChart />
          </ChartGrid>
          <h4>Footer Chart 05</h4>
        </CharWrapper>

        <CharWrapper container item xs={12} sm={6} md={6} lg={4}>
          <h1> Chart 06</h1>
          <ChartGrid>
            <PieChart />
          </ChartGrid>
          <h4>Footer Chart 06</h4>
        </CharWrapper>
      </MainGrid>
      <FooterGrid container spacing={1} xs={12} sm={12} md={12} lg={12}>
        <Typography variant="h6" color="initial" align="center">
          Footer**
        </Typography>
      </FooterGrid>
    </>
  );
}
