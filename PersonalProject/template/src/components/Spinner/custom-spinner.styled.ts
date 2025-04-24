import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SpinnerCircle = styled.div`
    width: 40px;
    height: 40px;
    border: 5px solid #ccc;
    border-top-color: ${({ theme }) => theme.colors.primary};
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

export const SpinnerText = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: #555;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out infinite alternate;

    @keyframes fadeIn {
        0% {
            opacity: 0.6;
        }
        100% {
            opacity: 1;
        }
    }
`;