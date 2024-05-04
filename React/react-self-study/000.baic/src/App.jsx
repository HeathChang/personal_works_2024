import React from 'react';
import './App.css';
import RenderPropsSample from "./components/009-render-props/render-props-sample";
import MouseTracker from "./components/009-render-props/mouse-tracker";

const App = () => {
    return (
        <div className="App">
            <RenderPropsSample>
                {value => value * 2}
            </RenderPropsSample>

            <MouseTracker>
                {(position) => {
                    // console.log('position: ', position)
                    return <p>Mouse position: {position.x}, {position.y}</p>;
                }}
            </MouseTracker>
        </div>
    );


};

export default App;