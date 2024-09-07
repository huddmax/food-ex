import { styled } from 'styled-components';

export const Container = styled.header`

    /* min-width: 1368px; */
    width: 100%;
    min-height: 104px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    padding: 24px 123px;
    

    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-evenly;

    Button {

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        width: 216px;
        height: 56px;
        
    }

    > svg {
        cursor: pointer;
    }

    
    `;

export const Search = styled.div`

    width: 581px;
    height: 48px;
    background-color: ${({theme})=> theme.COLORS.DARK_900};
    border-radius: 5px; 
    padding: 12px 14px;
    gap: 14px;

    display: flex;
    align-items: center;
    justify-content: center;


    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        width: 24px;
        height: 24px;
    }

    Input {

        width: 254px;
        height: 16px;
        
        margin-left: 5px;
        margin-bottom: 0;

        padding-block: 0;
        padding-inline: 0;

        
        line-height: normal;

        padding: 0px; 
        border: none;
        border-radius: 0;

        color: ${({theme})=> theme.COLORS.LIGHT_100};
        background-color: ${({theme})=> theme.COLORS.DARK_900};

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 100%;

        ::placeholder {
            color: ${({theme})=>theme.COLORS.LIGHT_500};
        }
    }

`;

export const Explorer = styled.div`

display: flex;
    align-items: center;
    

    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        
        margin-left: 16px;
        line-height: 24px;

        h2 {
            color: ${ ({ theme }) => theme.COLORS.LIGHT_100};

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 700;
            font-size: 24px;
            line-height: 28px;

        }

    }

    > svg {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        color: ${({theme})=> theme.COLORS.CAKE_100};

    }

    /* cursor: pointer; */

`;




