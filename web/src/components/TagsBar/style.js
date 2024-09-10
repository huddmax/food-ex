import { styled } from 'styled-components';

export const Container = styled.div`

    width: 837px;
    height: 80px;
    display: flex;
    flex-direction: column;
    gap: 16px;


    border-radius: 8px;
`;

export const TagsBarDiv = styled.div`

    width: 837px;

    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 48px;
    max-height: 48px;
    padding: 4px 8px;
    gap: 16px;
    border-radius: 8px;

    background: ${({theme})=>theme.COLORS.DARK_800};

    button {

        font-family: Roboto;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;

        width: 118px;
        height: 32px;
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 10px 16px;

        border: none;
        
    }

    .seeAndRemoveTag {
        background: ${({theme})=>theme.COLORS.LIGHT_600};
        color: ${({theme})=>theme.COLORS.LIGHT_100};
    }

    .addNewTag {
        background: ${({ theme }) => theme.COLORS.DARK_800};
        color: ${({ theme }) => theme.COLORS.LIGHT_500};
        border: 1px dashed ${({ theme }) => theme.COLORS.LIGHT_500};
    }
`;