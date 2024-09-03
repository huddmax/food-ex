import { styled } from 'styled-components';

export const Container = styled.footer`


    width: 100%;
    height: 104px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 123px;

`;

export const Explorer = styled.div`

    display: flex;
    align-items: center;
    fill: ${ ({ theme }) => theme.COLORS.LIGHT_700};
    

    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        
        margin-left: 16px;
        line-height: 24px;

        h2 {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_700};

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;

        }

    }

    svg {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        fill: ${ ({ theme }) => theme.COLORS.LIGHT_700};
        color: ${ ({ theme }) => theme.COLORS.LIGHT_700};

    }

`;


export const Corp = styled.div`


    width: 240px;
    height: 22px;
    margin-left: 10px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 160%;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};







`;