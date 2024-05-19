import styled from "styled-components";


export const AppContainer = styled.div`
    * {
        font-size: 1rem; /* Adjust font size based on your design */

    }
    
    .App-header{
        width: 100%;
        min-height: 60px; /* Ensure consistency with specified height */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        border: 1px solid red; 
    }
    
    .App-Body{
        display: flex;
        flex-direction: row;
        border: 1px solid blue;
        width: 100vw; /* 100% of the viewport width */
        height: 100vh; /* 100% of the viewport height */
        margin: 0; /* Remove default margin */
        padding: 0; /* Remove default padding */
    }
    
    .App-Footer{
        width: 100%;
        min-height: 50px; /* Ensure consistency with specified height */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid green;
    }

`;