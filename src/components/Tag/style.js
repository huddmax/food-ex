import { styled } from 'styled-components';

export const Container = styled.div`

    width: 85px;
    height: 32px;
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    border-radius: 5px;
    padding: 4px 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    strong {
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        color: ${({theme})=>theme.COLORS.LIGHT_100 };
    }

`;