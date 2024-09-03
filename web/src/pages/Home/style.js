import { styled } from 'styled-components';
import image1 from '../../assets/image1.png';


export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Brand = styled.div`

    margin-top: 164px ;
    width: 1120px;
    height: 260px;
    background: ${ ({ theme }) => theme.COLORS.GRADIENT_200 };
    border-radius: 8px;

    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    display: flex;
    position: relative;

    div {
        width: 422px;
        height: 80px;
        margin-right: 100px;
    }

    span,h2 {
        color: ${({theme}) =>theme.COLORS.LIGHT_300 }
    }

    h2 {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 500;
        font-size: 40px;
        line-height: 140%;
    }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;
    }

`;

export const Menu = styled.div`

`;

export const Img = styled.div`    
    background: url(${image1});
    background-size: cover;
    width: 656px;
    height: 412px;
    left: 130px;
    top: 129px;

    position: absolute;
    z-index: 1;
`;

