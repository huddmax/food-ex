import { styled } from 'styled-components';

export const Container = styled.div`

`;

export const Content = styled.div`

    max-width: 1120px;
    margin: 40px auto 116px;

    #divGoBackButton {

        Button:first-child {
        
            display: flex;
            background: none;
            width: 106px;
            height: 34px;
            padding: 0;
            margin-top: 41px;
            /* margin-left: 123px; */
            margin-bottom: 24px;
            
            font-family: Poppins;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 140%;
        }

    }

input, select, textarea {
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.DARK_800};
    border: none;

}

h2 {
    /* margin-left: 123px; */
}
`;

export const Main = styled.div`

    display: flex;
    width: 1120px;
    flex-direction: column;
    align-items: flex-end;
    gap: 32px;
    margin-top: 32px;

    label, select {
        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        
        height: 16px;
    }

`;

export const DishesInfo = styled.div`

    width: 1120px;
    height: 80px;
    display: flex;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;

    div {
        min-height: 80px;
        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    #Upload {
        button {
            width: 229px;
            display: flex;
            padding: 12px 32px;
            gap: 8px;

            background: ${({ theme }) => theme.COLORS.DARK_800};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-family: Poppins;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
            
        }
    }

   #dishName {
    width: 463px;
    align-items: flex-start;
    
    input {
        padding: 12px 14px;
        width: 100%;
        height: 48px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

   }

   #category {

    .selectWrapper{

        position: relative;
        display: inline-block;
        width: 100%;
        gap: 0;
        min-height: 48px;
        max-height: 48px;
        /* display: flex;
        flex-direction: row;
        
        min-height: 48px;
        
        border-radius: 8px;
        background: ${({ theme }) => theme.COLORS.DARK_800}; */
    }
    
    select {
        display: flex;
        flex-wrap: wrap;
        align-content: center;
        
        width: 364px;
        height: 48px;
        padding: 16px;


        /* width: 294px;
        height: 22px; */

        font-size: 14px;
        line-height: 160%;

        /* -webkit-appearance: none;  */
        /* -moz-appearance: none;     */
        appearance: none;
    }
   }

   .selectIcon {
       position: absolute;
       z-index: 1;
       pointer-events: none;
       transform: translateY(-50%);
       right: 12px;
       top: 50%;
    }

`;



export const TagsAndPrice = styled.div`

   width: 1120px;
   height: 80px;

   display: flex;
   gap: 32px;
   flex-direction: row;

   input {
    width: 251px;
}

    .price {
    }
    
    div:only-child {
       display: flex;
       flex-direction: column;
       gap: 16px;
       
       label {
           margin: 0;
           
       }
   }

`;

export const Description = styled.div`
    width: 1120px;
    height: 204px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;

 textarea {
    resize: none;
    width: 100%;
    min-height: 172px;
    padding: 14px;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
 }

`;

export const FinalButtons = styled.div`
    min-height: 48px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    gap: 32px;
   
    .saveButton{
        display: flex;
        justify-content: center;
        align-items: center;
        
        min-width: 180px;
        max-height: 48px;
        
        margin: 0;
        padding: 12px 24px;
        border-radius: 5px;
    
        font-family: Poppins;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
        text-align: center;

        border: none;
    
        background: ${({ theme }) => theme.COLORS.TOMATO_400};
    }

`;