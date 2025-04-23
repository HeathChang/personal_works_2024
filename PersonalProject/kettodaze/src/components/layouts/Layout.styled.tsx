import styled from "styled-components";


export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    font: ${(props) => props.theme.colors.primary};
`;

export const Header = styled.header`
    background-color: ${(props) => props.theme.colors.wordle};
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    padding: 1rem;
    font-size: 1.5rem;
    justify-content: center;
`;

export const HeaderFont = styled.div`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
    flex: 2;
    text-align: center;
`;

export const Body = styled.main`
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
`;
