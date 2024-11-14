import { styled } from 'styled-components';

export const Container = styled.div`

    display: flex;
    width: 100px;
    height: 32px;
    justify-content: center;
    align-items: center;
    gap: 14px;

    p {
        
        color: ${({theme}) => theme.COLORS.LIGHT_300};
        
        font-family: Roboto;
        font-size: 20px;
        font-weight: 700;
        line-height: 160%;
    }

    svg {
        cursor: pointer;
    }

`;