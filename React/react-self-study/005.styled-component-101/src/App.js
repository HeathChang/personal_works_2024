import logo from './logo.svg';
import './App.css';
import GettingStarted from "./views/01-basic/001-getting-started/getting-started";
import AdaptingProps from "./views/01-basic/002-adapting-props/adapting-props";
import ExtendingProps from "./views/01-basic/003-extending-props/extending-props";
import StylingAnyComponent from "./views/01-basic/004-styling-any-component/styling-any-component";
import PassedProps from "./views/01-basic/005-passed-props/passed-props";
import Animation from "./views/01-basic/008-animation/animation";
import Animation2 from "./views/01-basic/008-animation/animation2";
import ComingFromCss from "./views/01-basic/006-coming-from-css/coming-from-css";
import AttachingAdditionalProps from "./views/01-basic/007-attaching-additional-props/attaching-additional-props";
import {Wrapper, H1, Main} from "./app.styles";

const App = () => {
    return (
        <Main className="App">
            <Wrapper>
                <H1>Basic Usage</H1>
                <br/>
                <GettingStarted/>
                <AdaptingProps/>
                <ExtendingProps/>
                <StylingAnyComponent/>
                <PassedProps/>
                <ComingFromCss/>
                <AttachingAdditionalProps/>
                <Animation/>
                <Animation2/>
            </Wrapper>
            <Wrapper>
                <H1> Advanced Usage</H1>
            </Wrapper>

        </Main>
    );
}

export default App;
