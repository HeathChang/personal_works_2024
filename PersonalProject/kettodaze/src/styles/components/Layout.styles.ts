import styled from "styled-components";

export const NavbarContainer = styled.div`
    text-align: center;
    width: 100%;
    height: 100%;
    background: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    
    
    ul {
        list-style-type: none;
        padding: 40px 20px;
        margin: 0;
        gap: 40px ;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;