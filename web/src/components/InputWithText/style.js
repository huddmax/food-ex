import styled from 'styled-components';

export const Container = styled.div`
    /* display: flex; */
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    
    label {
        display: block; 
        margin-bottom: 8px; 
        font-size: 14px; 
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        text-align: left;
    }

    input {
    background: transparent;
    padding: 12px 14px; 
    border: 1px solid ${({theme})=> theme.COLORS.LIGHT_100}; 
    border-radius: 5px; 
    width: 100%; 
    color: ${({theme})=> theme.COLORS.LIGHT_100};


    &:placeholder{
            /* color: ${({theme})=> theme.COLORS.LIGHT_500}; */
            color: red;
        }

    }
   

`;