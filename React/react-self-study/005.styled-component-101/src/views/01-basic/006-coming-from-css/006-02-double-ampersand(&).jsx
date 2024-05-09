import styled, {css} from "styled-components";

// double ampersand refers to an instance of the component;
// this is useful if you're doing conditional styling overrides and don't want a style to apply to all instances of a particular component:
const DoubleAmpersand = () => {
    const Input = styled.input.attrs({type: "checkbox"})``;

    const Label = styled.label`
        align-items: center;
        display: flex;
        gap: 8px;
        margin-bottom: 8px;
    `;

    const LabelText = styled.span`
        ${(props) => {
            switch (props.$mode) {
                case "dark":
                    return css`
                        background-color: black;
                        color: white;

                        ${Input}:checked + && {
                            color: blue;
                        }
                    `;
                default:
                    return css`
                        background-color: white;
                        color: black;

                        ${Input}:checked + && {
                            color: red;
                        }
                    `;
            }
        }}
    `;

    return (
        <div>
            <Label>
                <Input defaultChecked/>
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input/>
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked/>
                <LabelText>Foo</LabelText>
            </Label>
            <Label>
                <Input defaultChecked/>
                <LabelText $mode="dark">Foo</LabelText>
            </Label>
        </div>
    );
};

export default DoubleAmpersand;
