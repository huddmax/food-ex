import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './style/global.js';

import theme from './style/theme.js'

import { AuthProvider } from '../src/hooks/auth';

import { Routes } from './routes';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <AuthProvider>
        <Routes />
      </AuthProvider>
      
    </ThemeProvider>

  </React.StrictMode>,
)
