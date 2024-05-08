import styled, {keyframes, css} from 'styled-components';

const Animation2 = () => {
    // Create the keyframes
    const rotate = keyframes`
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    `;

    // ❌ This will throw an error!
    // const styles = `
    //   animation: ${rotate} 2s linear infinite;
    // `

    // ✅ This will work as intended
    const styles = css`
        animation: ${rotate} 2s linear infinite;
    `;

    // Here we create a component that will rotate everything we pass in over two seconds
    const Rotate = styled.div`
        display: inline-block;
        ${styles}
        padding: 2rem 1rem;
        font-size: 1.2rem;
    `;

    return (<Rotate>&lt; 💅🏾 &gt;</Rotate>);

};

export default Animation2;