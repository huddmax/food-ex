import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        
    }

    body {
        background-color: ${ ({ theme }) => theme.COLORS.DARK_400};
        color: ${ ({ theme }) => theme.COLORS.WHITE };
    
        letter-spacing: 0; 
        text-decoration: none;
        margin-bottom: 0px;
        text-transform: none;
        
    }

    body, textarea {

        font-family: 'Poppins', sans-serif;
        font-weight: 400; 
        font-size: 14px;
        line-height: 160%;

    }

    input {

        padding: 12px 14px;

        font-family: 'Poppins', sans-serif;
        font-weight: 400; 
        font-size: 14px;
        line-height: 160%;


    }

    h2 {
        
        font-family: 'Poppins', sans-serif;
        font-weight: 400; 
        font-size: 32px;
        line-height: 140%;

    

    }

    button {
        font-family: 'Poppins', serif;
        font-size: 14px;
        font-weight: 100;
        font-style: normal;
        border-radius: 5px;

        color: ${ ({ theme }) => theme.COLORS.LIGHT_100 };

    }


    a {
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100 };
    
        font-family: 'Poppins', sans-serif;
        font-weight: 500; 
        font-size: 14px;
        line-height: 24px;

      
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    
    }

`;