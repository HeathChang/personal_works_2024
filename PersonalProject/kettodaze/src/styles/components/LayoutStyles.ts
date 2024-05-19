import styled from "styled-components";

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    width: 100px;
    height: 100%;
    /* Add responsive styles */
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;