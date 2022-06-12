import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    background: #0A0A10;
    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 11px;
`;

export const Order = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 342px;
    height: 101px;
    margin-bottom: 20px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;


    button{
        display: flex;
        align-items: right;
        background: none;
        border: none;
        cursor: pointer;
    }

    img{
        padding-right: 13px;
    }

`;

export const Paragrafos = styled.p`
    display: flex;
    flex-direction: column;
    padding-top: 13px;
    padding-bottom: 13px;
    padding-left: 13px;
    gap: 15px;
`;