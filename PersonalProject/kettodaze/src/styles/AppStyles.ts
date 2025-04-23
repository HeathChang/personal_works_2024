import styled from "styled-components";

export const AppContainer = styled.div`
    
    *{
        font-family: Arial, sans-serif;
    }
    
    
    .App {
        margin: 0;
        padding: 0;
        height: auto;
        width: 100%;
        position: relative;
        min-width: 1340px;
        
        display: flex;
        flex-direction: column;
        
    }

    .App-header {
        
        width: 100%;
        min-width: 1340px;
        
        align-items: center;
        justify-content: center;
        
        position: sticky;
        top: 0;
    }

    .App-Body {
        margin: 0;
        width: 100%;
        min-width: 1340px;
        
        clear: both;
        display: flex;
        flex-direction: column;
        gap: 140px;
        .app-event{
            height: 450px;
            width: 100%;
            background: lightpink;
        }
        
        .app-router{
            width: 100%;

        }


    }

    .App-Footer {
        position: relative;
        padding: 20px;

        width: 100%; /* Use full width */
        height: 120px;
        background: green;
    }
`;
