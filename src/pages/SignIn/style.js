import styled from 'styled-components';
import theme from '../../styles/theme';

export const Container = styled.div`
    height:100vh;

    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    align-content: center;
    flex-wrap: wrap;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_400};

`;

export const Form = styled.form`

    width: 476px;
    height: 540px;

    padding: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 16px;
    gap: 32px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_700};


    h2 {
        color: ${({theme})=> theme.COLORS.LIGHT_100};
        text-align: center;
        font-family: Poppins;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;

    }

    > p {
        font-size: 14px;
        color: ${({theme})=> theme.COLORS.LIGHT_100};

        cursor: pointer;
    }




    

    
`;

export const Background = styled.div`
    
    display: flex;
    align-items: center;
    gap: 19px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_400};


    font-family: 'Roboto', sans-serif;
    letter-spacing: 0; 
    font-weight: bold; 
    text-decoration: none;
    font-size: 28px;
    line-height: auto;
    margin-bottom: 0px;
    text-transform: none; 

    h1 {
        color: ${({theme})=> theme.COLORS.LIGHT_100};
    }
    
    svg {
        color: ${({theme})=> theme.COLORS.CAKE_100};

    }

    `;