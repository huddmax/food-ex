import { styled } from 'styled-components';

export const Container = styled.div`

    width: 304px;
    min-height: 462px;

    flex-shrink: 0;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;



    gap: 15px;
    padding: 24px;

    margin-left: 13.5px;
    margin-right: 13.5px;


    border-radius: 8px;
    border: 1px solid ${({theme})=> theme.COLORS.DARK_300};
    background: ${({ theme }) => theme.COLORS.DARK_200};

    position: relative;
    
    img:first-child {
        max-width: 24px;
        height: 24px;

        position: absolute;
        right: 18px;
        top: 16px;
     
    }


`;

export const DishImage = styled.img`

cursor: pointer;

width: 176px;
height: 176px;
flex-shrink: 0;
/* object-fit: cover; */

/* background: lightgray 50% / cover no-repeat; */

`;

export const DishName = styled.div`

    cursor: pointer;

    width: 256px;
    min-height: 34px;

    p {

    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 140%;
    }

`;

export const DishDescription = styled.div`

    cursor: pointer;

    min-height: 44px;

    p {

        color: ${({theme})=>theme.COLORS.LIGHT_400};
        text-align: center;
        
        
        font-family: Roboto;
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
    }

`;

export const DishValue = styled.div`
    min-height: 52px;
    p {

        color: ${({theme})=>theme.COLORS.CAKE_200 };
        text-align: center;
        
        font-family: Roboto;
        font-size: 32px;
        font-weight: 400;
        line-height: 160%;
    }

`;

export const CardButtons = styled.div`

    

    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 16px;

    button {

        padding: 12px 24px;
        width: 92px;
        height: 48px;
    }

`;