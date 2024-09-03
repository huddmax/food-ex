import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;

    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
    align-content: center;
    flex-wrap: wrap;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_400};

`;

export const Form = styled.form`

    width: 476px;
    height: 621px;

    padding: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 16px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_700};


    > h2 {
        font-size: 24px;
        margin-bottom: 32px;

    }

    > p {
        font-size: 14px;
        height: 24px;
        color: ${ ({ theme }) => theme.COLORS.RED};

    }

    > a {
        margin-top:32px;
        text-decoration: none;

    }

    
     > div {
        margin-bottom: 32px;

        input {
            border: none;
            background-color: ${({theme})=> theme.COLORS.DARK_900};
        }
    }

    button {
        /* height: 48px; */
    }


    
`;

export const Background = styled.div`
    

    
    display: flex;
    align-items: center;
    gap: 19px;

    background-color: ${ ({ theme }) => theme.COLORS.DARK_400};


    font-family: 'Roboto', sans-serif;
    letter-spacing: 0; 
    font-weight: bold; 
    text-decoration: none;
    font-size: 28px;
    line-height: auto;
    margin-bottom: 0px;
    text-transform: none; 



    `;