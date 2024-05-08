import logo from './logo.svg';
import './App.css';
import GettingStarted from "./views/001-getting-started/getting-started";
import AdaptingProps from "./views/002-adapting-props/adapting-props";
import ExtendingProps from "./views/003-extending-props/extending-props";
import StylingAnyComponent from "./views/004-styling-any-component/styling-any-component";
import PassedProps from "./views/005-passed-props/passed-props";
import Animation from "./views/008-animation/animation";

function App() {
    return (
        <div className="App">
            <GettingStarted/>
            <AdaptingProps/>
            <ExtendingProps/>
            <StylingAnyComponent/>
            <PassedProps/>

            <Animation/>
        </div>
    );
}

export default App;
