import { styled } from 'styled-components';

export const Container = styled.header`

    /* min-width: 1368px; */
    width: 100%;
    min-height: 104px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 24px 123px;
    

    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-evenly;

    Button {

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        width: 216px;
        height: 48px;
        
    }

    > svg {
        cursor: pointer;
    }

    position: relative;
    
    `;

export const Search = styled.label`

    width: 581px;
    height: 48px;
    background-color: ${({theme})=> theme.COLORS.DARK_900};
    border-radius: 5px; 
    padding: 12px 14px;
    gap: 14px;

    display: flex;
    align-items: center;
    justify-content: center;


    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        width: 24px;
        height: 24px;
    }

    Input {

        width: 254px;
        height: 16px;
        
        margin-left: 5px;
        margin-bottom: 0;

        padding-block: 0;
        padding-inline: 0;

        
        line-height: normal;

        padding: 0px; 
        border: none;
        border-radius: 0;

        color: ${({theme})=> theme.COLORS.LIGHT_100};
        background-color: ${({theme})=> theme.COLORS.DARK_900};

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        ::placeholder {
            color: ${({theme})=>theme.COLORS.LIGHT_500};
        }
    }

`;

export const Explorer = styled.div`

    min-width: 197px;
    height: 39px;
    display: flex;
    align-items: flex-start;
    

    div {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        
        margin-left: 10px;
        line-height: 24px;

        h2 {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100};

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;

        }

    }

    span {
        margin-top: -5px;
        font-family: Roboto;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 160%;
        color:${({theme})=> theme.COLORS.CAKE_200};
    }

    > svg {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: ${({theme})=> theme.COLORS.CAKE_100};

    }

    /* cursor: pointer; */

`;


export const Dropdown = styled.div`
    position: absolute;
    top: 100%; /* Para alinhar logo abaixo da barra de busca */
    left: 0;
    width: 100%; /* Faz o dropdown ter a mesma largura da barra de busca */
    background: #1f1f1f; /* Ajuste a cor de fundo para combinar com o tema */
    border: 1px solid #333; /* Borda suave para dar destaque */
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
    padding: 8px 0;

    .dropdown-item {
        padding: 10px;
        cursor: pointer;
        color: #fff; /* Cor do texto para ficar visível */
        
        &:hover {
            background: #333; /* Cor de fundo ao passar o mouse */
        }
    }
`;


