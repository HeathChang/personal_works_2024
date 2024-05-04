import React from 'react';
import logo from './logo.svg';
import './App.css';
import RenderPropsSample from "./components/009-render-props/render-props-sample";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <RenderPropsSample>
                    {value => value * 2}
                </RenderPropsSample>
            </div>
        );
    }


};

export default App;