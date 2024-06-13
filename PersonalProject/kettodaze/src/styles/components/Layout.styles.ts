import styled, { css } from "styled-components";

interface NavbarItemProps {
    isActive: boolean;
}

export const NavbarContainer = styled.div`
    text-align: center;
    width: 100%;
    background: white;
    border-radius: 8px;
    position: sticky;
    margin: 10px 0 10px 0;

`;

export const NavbarList = styled.ul`
    list-style-type: none;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 40px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const NavbarItem = styled.li<NavbarItemProps>`
    padding: 10px;
    cursor: pointer;

    ${({ isActive }) => isActive &&
            css`
                background-color: red;
                color: white;
                border-radius: 4px;
            `}
`;