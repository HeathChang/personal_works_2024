import styled, {ThemeProvider} from 'styled-components';

const BasicTheming = () => {
    const Button = styled.button`
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;

        /* Color the border and Text with Theme.main*/
        color: ${props => props.theme.color};
        border: ${props => props.theme.borderSize} solid ${props => props.theme.color};
    `;

    // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
    Button.defaultProps = {
        theme: {
            color: "#BF4F74",
            borderSize: "4px"
        }
    }


    const theme = {
        color: "mediumseagreen",
        borderSize: "1px"
    };

    return (
        <div>
            <Button> Normal</Button>
            <ThemeProvider theme={theme}>
                <Button>Themed</Button>
            </ThemeProvider>
        </div>
    );
};

export default BasicTheming;