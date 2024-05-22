import styled from "styled-components";

export const HeaderMain = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
`;


export const Logo = styled.div`
    width: 100px;
    height: 100px;
    background: white;
`

export const UlButtons = styled.ul`
    flex-grow: 1;
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

export const SearchInput = styled.div`
    width: 300px;
    height: 30px;
    border: 1px solid blue;
`

export const NavItem = styled.li`
    display: inline-block; /* Display list items horizontally */
`;
