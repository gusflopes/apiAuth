import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import '~/config/ReactotronConfig';

import Routes from './routes';
import history from '~/services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

const theme = createMuiTheme({
  spacing: 8
});

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <GlobalStyle />
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
          <ToastContainer autoClose={3000} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
