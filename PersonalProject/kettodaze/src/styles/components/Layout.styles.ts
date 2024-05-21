import styled from "styled-components";

export const NavbarContainer = styled.div`
    text-align: center;
    width: 240px;
    height: 100%;
    background: white;
    
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li{
        margin-bottom: 8px; 
    }


    @media (max-width: 768px) {
        flex-direction: column;
    }
`;