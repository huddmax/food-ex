import { styled } from 'styled-components';
import image from '/src/assets/backgroundHome.png';


export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Brand = styled.div`

    min-width: 1120px;
    max-width: 1120px;
    min-height: 260px;
    background: ${ ({ theme }) => theme.COLORS.GRADIENT_200 };
    border-radius: 8px;
    
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;

    margin-top: 164px ;
    margin-bottom: 62px;
    
    .text {
        margin-right: 100px;
        margin-left: 8px;
        margin-bottom: 92px;
        min-width: 422px;
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
        margin-bottom: 92px;
    }

    img {
        border: none;
        outline: none;
        box-shadow: none;
    }
    
    border: none;
    outline: none;
    box-shadow: none;
`;

export const Img = styled.div`    
    min-width: 632px;
    min-height: 406px;
    
    opacity: 0.8;
    flex-shrink: 0;
    background: url(${image}) 0px 0px / 100% 197.562% no-repeat;

    transform: scaleX(-1);
    
    


`;

export const Menu = styled.div`
    display: flex;
    width: 1122px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 23px;
    margin-bottom: 46px;

    div {

        display: flex;
        gap: 24px;

    }

    h2 {
        color: ${ ({theme}) => theme.COLORS.LIGHT_300 };
        
        font-family: Poppins;
        font-size: 32px;
        font-weight: 500;
        line-height: 140%;
    }

    .splide {
        min-width: 1121px;
        max-width: 1122px;
        
    }

    .splide__slide {        
        div {
            justify-content: center;
        }
    
    }

        
        .is-visible{
            opacity: 0.25;
        }

        .is-active + .is-visible ~ .is-visible {
            opacity: 1;
        }

        .is-active + .is-visible{
            opacity: 1;
        }

        [aria-hidden="true"] {
            opacity: 0.25;
        }



`;

