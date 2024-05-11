import styled, {ThemeProvider} from 'styled-components';

const FunctionThemes = () => {
    const Button = styled.button`
        color: ${props => props.theme.fg};
        border: 2px solid ${props => props.theme.fg};
        background: ${props => props.theme.bg};

        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border-radius: 3px;
    `;


    // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
    Button.defaultProps = {
        theme: {
            color: "#BF4F74",
            borderSize: "4px"
        }
    };


    const theme = {
        fg: "#BF4F74",
        bg: "white"
    };

    // Functional Theme
    const invertTheme = ({fg, bg}) => ({fg: bg, bg: fg});

    return (
        <div>
            <ThemeProvider theme={theme}>
                <div>
                    <Button>Default Theme</Button>

                    <ThemeProvider theme={invertTheme}>
                        <Button>Inverted Theme</Button>
                    </ThemeProvider>
                </div>
            </ThemeProvider>
        </div>
    );
};

export default FunctionThemes;