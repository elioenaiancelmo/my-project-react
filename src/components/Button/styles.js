import styled from "styled-components";

export const Button = styled.button`
    width: 342px;
    height: 68px;
    margin-bottom: 25px;
    margin-top: 50px;
    background: ${props => props.isBack ? 'rgba(255, 255, 255, 0.14)' : '#D93856'};
    border-radius: 6px;
    font-style: normal;
    font-weight: 900;
    font-size: 17px;
    line-height: 2px;
    cursor: pointer;
    border: none;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;