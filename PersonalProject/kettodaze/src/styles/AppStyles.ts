import styled from "styled-components";

export const AppContainer = styled.div`
    * {
        //font-size: 1rem;
    }

    .App {
        margin: 0;
        padding: 0;
        height: 100vh; /* Use viewport height for full height */
        width: 100%;
        font-family: Arial, sans-serif;
        position: relative;
        max-width: calc(100% - 40px);
        min-width: 1200px;
    }
    
    .App-header {
        padding: 20px;
        width: 100%;
        height: 40px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        
        position: relative;
        background: #000000;

    }
    
    .App-Body {
        padding: 20px;
        position: relative;
        
        width: 100%;
        height: 100%;
        clear: both;

        gap: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        

    }
    
    .App-Footer {
        position: relative;
        padding: 20px;

        width: 100%; /* Use full width */
        height: 120px;
        background: green;
    }
`;