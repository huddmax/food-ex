import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { AuthProvider } from './hooks/auth';
import { Routes } from './routes' ;

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        
      
      {/* o authProvider é o contexto que vai ser passado para as rotas */}
      <AuthProvider>
      <Routes />
      </AuthProvider>


      
    </ThemeProvider>
  </StrictMode>,
)
