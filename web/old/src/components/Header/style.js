import styled from 'styled-components';

export const Container = styled.header`
    height: 110px;
    width: 100%;

    border-bottom: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${ ({ theme }) => theme.COLORS.BACKGROUND_700 };

    /* background-color: red; */
    

    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-evenly;

    Button {
        width: 216px;
        height: 56px;

        p{
            color: white;
        }
        svg {
            color: white;
        }
    }

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

    > svg {
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
        color: ${ ({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 36px;
    }
`;

export const Search = styled.div`
    display: flex;
    align-items:center ;
    justify-content: center;

    width: 581px;
    height: 48px;
    border-radius: 5px;
    background-color: ${({theme})=> theme.COLORS.DARK_900};

    Input {
    width: 344px;
    height: 16px;

    margin-left: 5px;
      
    
    
    padding: 0; 
    border: none;
    border-radius: 5px; 
    color: ${({theme})=> theme.COLORS.LIGHT_100};


    &:placeholder{
            /* color: ${({theme})=> theme.COLORS.LIGHT_500}; */
            color: red;
        }






    }
    
    
`;