import styled from "styled-components";

export const AppContainer = styled.div`
    * {
        font-size: 1rem;
    }

    .App {
        margin: 0;
        padding: 0;
        height: 100vh; /* Use viewport height for full height */
        font-family: Arial, sans-serif;
        position: relative;
    }
    
    .App-header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 120px;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
    
    .App-Body {
        position: absolute;
        top: 120px;
        left: 0;
        right: 0;
        bottom: 120px; 
        display: flex;
        background: red;
        height: 100%;
    }
    
    .App-Footer {  
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%; /* Use full width */
        height: 120px;
        background: green;
    }
`;
