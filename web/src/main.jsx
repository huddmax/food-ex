import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './styles/global';
import theme  from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider theme={theme}>

      <GlobalStyle/>
        
      <SignIn/>
      {/* <SignUp/> */}
      {/* <Home /> */}

    </ThemeProvider>

  </StrictMode>,
)
