import styled, {css} from "styled-components";

const PassedProps = () => {
    // Create an Input component that'll render an <input> tag with some styles
    const Input = styled.input`
        padding: 0.5em;
        margin: 0.5em;
        color: ${props => props.$inputColor || "#BF4F74"};
        background: papayawhip;
        border: none;
        border-radius: 3px;
    `;

    // Render a styled text input with the standard input color, and one with a custom input color
    return (<div>
        <Input defaultValue="@probablyup" type="text"/>
        <Input defaultValue="@geelen" type="text" $inputColor="rebeccapurple"/>
    </div>);
};

export default PassedProps;