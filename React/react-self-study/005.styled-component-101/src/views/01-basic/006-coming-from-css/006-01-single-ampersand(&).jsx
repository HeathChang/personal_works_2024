import styled from "styled-components";

// single ampersand (&) refers to all instances of the component; it is used for applying broad overrides:
const SingleAmpersand = () => {
    const Thing = styled.div.attrs((/* props */) => ({tabIndex: 0}))`
        color: blue;

        &:hover {
            // <Thing> when hovered
            // Pretty nice day today 제외 전체
            color: red;
        }

        & ~ & {
            // <Thing> as a sibling of <Thing>, but maybe not directly next to it
            // Dont' you think 에 해당
            background: tomato; 
        }

        & + & {
            // <Thing> next to <Thing>
            // How ya doing 에 해당
            background: lime; 
        }

        &.something {
            // <Thing> tagged with an additional CSS class ".something"
            // The Sun is Shining... 에 해당
            background: orange;
        }

        .something-else & {
            // <Thing> inside another element labeled ".something-else"
            // splendid에 해당
            border: 1px solid; 
            background: white;
        }
    `;

    return (
        <div>
            <Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>
        </div>
    );
};

export default SingleAmpersand;
