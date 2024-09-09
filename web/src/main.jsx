import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyle from './styles/global';
import theme  from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { Routes } from './routes' ;

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        
      <Routes />

    </ThemeProvider>
  </StrictMode>,
)
