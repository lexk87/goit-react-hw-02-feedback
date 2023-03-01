import styled from 'styled-components';

export const BtnList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin: 0 auto;
    padding-top: 20px;
    width: 410px;
    background-color: #b7d2d0;
`;

export const BtnListItem = styled.li`
    width: 110px;
`;

export const Btn = styled.button`
    padding: 12px 15px;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    background-color: #78a3a4;
    color: #fff;
    transition: 250ms ease-in-out background-color;
    &:hover,
    &:focus {
        background-color: #365658;
    }
`;
