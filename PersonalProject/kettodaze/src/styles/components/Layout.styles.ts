import styled, { css } from "styled-components";

interface NavbarItemProps {
    isActive: boolean;
}

export const NavbarContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    background: white;
    border: 1px solid lightgray;
    border-radius: 8px;
`;

export const NavbarList = styled.ul`
    list-style-type: none;
    padding: 40px 20px;
    margin: 0;
    display: flex;
    flex-direction: column;
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