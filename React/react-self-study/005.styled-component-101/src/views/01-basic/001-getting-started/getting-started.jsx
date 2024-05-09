import styled, {css} from "styled-components";

const GettingStarted = () => {
    // Create a Wrapper component that'll render a <section> tag with some styles
    const Wrapper = styled.section`
        padding: 4em;
        background: papayawhip;
    `;

    // Create a Title component that'll render an <h1> tag with some styles
    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: #BF4F74;
    `;


    // Use Title and Wrapper like any other React component – except they're styled!
    return (
        <Wrapper> {/*위에서 설정된 Section Tag 로 설정 */}
            <Title> {/*위에서 설정된 h1 Tag 로 설정 */}
                Hello World!
            </Title>
        </Wrapper>);
};

export default GettingStarted;