import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    box-sizing: border-box;
    margin: 0 auto;
    width: 410px;
    padding: 20px;
    gap: 20px;
    background-color: #b7d2d0;
`;

export const Item = styled.li`
    box-sizing: border-box;
    width: 175px;
    background-color: #78a3a4;
    padding: 12px 0;
    &:last-child {
        width: 100%;
    }
`;

export const Txt = styled.p`
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    font-family: Arial;
`;
