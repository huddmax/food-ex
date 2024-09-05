import { styled } from 'styled-components';

export const Container = styled.div`

    width: 304px;
    min-height: 462px;

    display:flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;


    gap: 15px;
    padding: 24px;


    border-radius: 8px;
    border: 1px solid ${({theme})=> theme.COLORS.DARK_300};
    background: ${({ theme }) => theme.COLORS.DARK_200};

    position: relative;
    
    > FavoriteIcon {
        position: absolute;
        right: 18px;
        top: 16px;
    }


`;

export const DishImage = styled.img`
width: 176px;
height: 176px;
flex-shrink: 0;
/* object-fit: cover; */

/* background: lightgray 50% / cover no-repeat; */

`;

export const DishName = styled.div`

    width: 256px;

    p {

    text-align: center;
    font-family: Poppins;
    font-size: 24px;
    font-weight: 700;
    line-height: 140%;
    }

`;

export const DishDescription = styled.div`

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

    display: flex;
    align-items: center;
    gap: 16px;

`;