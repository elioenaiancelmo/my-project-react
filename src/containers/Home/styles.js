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

export const InputLabel = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 22px;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 900;
    font-size: 18px;
    line-height: 21px;
    padding-left: 15px;
    margin-bottom: 50px;
`;
