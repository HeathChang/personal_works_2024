import styled, {createGlobalStyle} from "styled-components";

// && a double ampersand alone has a special behavior called a "precedence boost";
// this can be useful if you are dealing with a mixed styled-components and vanilla CSS environment where there might be conflicting styles:
const DoubleAmpersand2 = () => {
    const Thing = styled.div`
        && {
            color: blue;
        }
    `;

    const GlobalStyle = createGlobalStyle`
        div${Thing} {
            color: red;
        }
    `;

    return (
        <div>
            <GlobalStyle/>
            <Thing>
                I'm blue, da ba dee da ba daa
            </Thing>
        </div>
    );
};

export default DoubleAmpersand2;
