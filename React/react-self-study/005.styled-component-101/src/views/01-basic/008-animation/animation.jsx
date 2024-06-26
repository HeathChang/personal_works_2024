import styled, {css, keyframes} from "styled-components";

const Animation = () => {
    // Create the keyframes
    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    `;

    // Here we create a component that will rotate everything we pass in over two seconds
    const Rotate = styled.div`
        display: inline-block;
        animation: ${rotate} 2s linear infinite;
        padding: 2rem 1rem;
        font-size: 1.2rem;
    `;

    return (<Rotate>&lt; 💅🏾 &gt;</Rotate>);
};

export default Animation;