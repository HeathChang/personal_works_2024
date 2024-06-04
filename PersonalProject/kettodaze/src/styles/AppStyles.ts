import styled from "styled-components";

export const AppContainer = styled.div`
    
    *{
        font-family: Arial, sans-serif;
    }
    
    
    .App {
        margin: 0;
        padding: 0;
        height: auto;
        width: 100vw;
        position: relative;
        min-width: 1340px;
        
        display: flex;
        flex-direction: column;
        
        gap: 10px;
    }

    .App-header {
        margin: 0;
        width: 100%;
        min-width: 1340px;
        height: 100px;
        
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgb(215, 35, 31);
    }

    .App-Body {
        margin: 0;
        width: 100%;
        min-width: 1340px;
        height: 100%;
        clear: both;
        display: flex;
        
        .app-nav-bar{
            flex: 0;
            padding: 1em;
            min-width: 200px;
            max-width: 200px;

        }

        .app-router{
            padding: 1em;
            height: 100%;
            

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
