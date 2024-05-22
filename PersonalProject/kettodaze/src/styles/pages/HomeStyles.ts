import styled from "styled-components";

export const HomeMain = styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    border: 1px solid black;

    display: flex;
    align-items: center;
    justify-content: center;
    
    flex-direction: column;
    padding: 10px;
    gap: 10px;
`;

export const HomeHeader = styled.div`
    flex: 1;
    border: 1px solid red;
    width: inherit;


`;


export const HomeBody = styled.div`
    flex: 1;
    border: 1px solid green;
    width: 100%;
`;


export const HomeFooter = styled.div`
    flex: 1;
    border: 1px solid blue;
    width: 100%;
`;