import { SnackbarProvider } from 'notistack';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as Styled from './App.styles';
import { Header, Navbar } from './components';
import GlobalStyle, { theme } from './GlobalStyle';
import Routes from './routes';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <GlobalStyle />
          <Router>
            <Header>
              <Navbar />
            </Header>
            <Styled.PageContainer>
              <Routes />
            </Styled.PageContainer>
          </Router>
        </SnackbarProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
