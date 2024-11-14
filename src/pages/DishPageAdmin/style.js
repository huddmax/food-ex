import { styled } from 'styled-components';

export const Container = styled.div`

    /* width: 1368px; */
    /* height: 824px; */

`;
export const All = styled.div`

    div {

        Button:first-child {
            display: flex;
            

            background: none;
            width: 106px;
            height: 34px;
            padding: 0;
            margin-top: 25px;
            margin-left: 123px;

            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
                
        }

    }
`;
export const Main = styled.div`
    display: flex;
    width: 687px;
    flex-direction: row;
    align-items: flex-start;
    
    img {
        margin: 42px 48px 110px 122px;
        width: 342px;
    }

    h2 {
        font-family: Poppins;
        font-size: 40px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%;
    }

    p {
        font-family: Poppins;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
    }

`;
export const DishInfo = styled.div`
    min-width: 687px;
    height: 204px;
    display: flex;
    flex-direction: column;

    margin-top: 87px;
    gap: 24px;

    /* div:first-child */
    .tags {
        display: flex;
        gap: 12px;
    }

    
    .buttonEditDiv {

        margin: 0;
        margin-top: 24px;
        padding: 0;
        display: flex;
        
        
        Button:only-child {
            margin: 0;
            width: 131px;
            height: 48px;
            padding: 12px 24px;
    
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            
            color: ${({theme})=>theme.COLORS.LIGHT_100};
            background: ${({theme})=>theme.COLORS.TOMATO_100};
          

        }
    

    }
`;

