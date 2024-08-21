import styled from 'styled-components';

export const Container = styled.div`
    /* display: flex; */
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    
    label {
        display: block; /* Faz o rótulo ocupar toda a largura disponível */
        margin-bottom: 8px; /* Espaço entre o rótulo e o input */
        font-size: 14px; /* Tamanho da fonte do rótulo */
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