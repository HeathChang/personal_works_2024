import styled, {css} from "styled-components";

const BasicUsage = () => {

    const Input = styled.input.attrs(props => ({
        // we can define static props
        type: "text",
        // and we can define dynamic ones
        $size: props.$size || "1em",
    }))`
        color: #BF4F74;
        font-size: 1em;
        border: 2px solid #BF4F74;
        border-radius: 3px;

        /* here we use the dynamically computed prop */
        margin: ${props => props.$size};
        padding: ${props => props.$size};
    `;

    return (<div>
        <Input placeholder="A small text input"/>
        <br/>
        <Input placeholder="A bigger text input" $size="2em"/>
    </div>);
};

export default BasicUsage;