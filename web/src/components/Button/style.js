import styled from 'styled-components'

export const Container = styled.button`

    width: 100%;
    
    height: 56px;
    border: 0;
    padding: 0 16px;
    margin-top: 16px;
    border-radius: 10px;


    
        
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100 };
        background-color: ${ ({ theme }) => theme.COLORS.TOMATO_100 };
    
        font-family: 'Poppins', sans-serif;
        font-weight: 500; 
        font-size: 14px;
        letter-spacing: 0; 
        text-decoration: none;
        line-height: 24px;
        margin-bottom: 0px;
        text-transform: none; 

    


    
    &:disabled{
        opacity: 0.5;
    }
`;