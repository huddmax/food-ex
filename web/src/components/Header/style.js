import styled from 'styled-components';

export const Container = styled.header`
    grid-area: header;

    height: 105px;
    width: 100%;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_700 };
    

    display: flex;
    justify-content: space-between;

    padding: 0 80px;

`;

export const Profile = styled.div`
    
    display: flex;
    align-items: center;
    

    div {
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        
        margin-left: 16px;
        line-height: 24px;

        span {
            font-size: 14px;
            color: ${ ({ theme }) => theme.COLORS.GRAY_100}
        }

        strong {
            font-size: 18px;
            color: ${ ({ theme}) => theme.COLORS.WHITE}
        }
    }

    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;

    }

    cursor: pointer;



`;

export const Logout = styled.button`

    background: none;
    border: none;

    
    > svg {
        color: ${ ({ theme }) => theme.COLORS.GRAY_100};
        font-size: 36px;
    }
`;