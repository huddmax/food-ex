import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    
    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        background: transparent;
        border-radius: 12px;
        /* border: none;  */
        

        /* &:placeholder{
            color: ${({theme})=> theme.COLORS.LIGHT_500};
        } */
    }


    
    > svg {
        margin-left: 16px;
    }

    

`;