import { styled } from 'styled-components';

export const Container = styled.header`

    width: 100%;
    height: 104px;
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    

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

    }

    /* cursor: pointer; */

`;

