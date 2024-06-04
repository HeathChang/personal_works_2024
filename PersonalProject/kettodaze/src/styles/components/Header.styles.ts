import styled from "styled-components";

export const HeaderMain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 15px;
`;


export const Logo = styled.div`
    position: relative;
    width: 230px;
    height: 80px;
    //flex: 0.6;
    
    
   h1{
       // font design
       width: 100%;
       color: white;
       // font 위치
       display: flex;
       justify-content: center;
       text-align: center;
       align-items: center;
   }
`

export const SearchInputs = styled.div`
    width: 300px;
    height: 32px;
    display: flex;

`

export const SearchInput = styled.div`
    width: 260px;
    height: 100%;
    background: white;
    flex: 1;
    border: 0.5px solid black;
`;

export const SearchInputBtn = styled.div`
    margin-left: 10px;
    width: 30px;
    height: 100%;
    background: black;
    border: 0.5px solid white;
`


export const UlButtons = styled.ul`
    flex: 2;
    padding-left: 0;

    div {
        list-style-type: none;
        color: white;
        display: flex;
        align-items: center;
        justify-content: right;
        margin-right: 40px;
        gap: 40px;
    }

`



export const NavItem = styled.li`
    display: inline-block; /* Display list items horizontally */
`;
