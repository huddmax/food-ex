import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import GlobalStyle from './styles/global';
import theme  from './styles/theme';
import { ThemeProvider } from 'styled-components';

import { Home } from './pages/Home';
import { HomeAdmin } from './pages/HomeAdmin';
import { SignUp } from './pages/SignUp';
import { SignIn } from './pages/SignIn';
import { DishPage } from './pages/DishPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ThemeProvider theme={theme}>

      <GlobalStyle/>
        
      {/* <SignIn/> */}
      {/* <SignUp/> */}
      {/* <Home /> */}
      <HomeAdmin/>
      {/* <DishPage/> */}

    </ThemeProvider>

  </StrictMode>,
)
