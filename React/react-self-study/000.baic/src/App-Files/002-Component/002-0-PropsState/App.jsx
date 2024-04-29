import React from "react";
import PropsExampleFunc from "./components/002-component/props-exmaple/props-example-func";
// import Counter from "./components/002-component/state-example-func.jsx/state-example-class"; // Class Component
import Counter from "./components/002-component/state-example-func.jsx/state-example-func"; // Func Component

const App = () => {
    const name = "React";
    return (

        <div>
            <div>
                <h1>Props Example</h1>
                0번째와 1번째 사이
                <PropsExampleFunc name={name}/>
                1번째와 2번째 사이
                <PropsExampleFunc name="React Native"/>
                2번째와 3번째 사이
                <PropsExampleFunc/>
                3번째와 4번째 사이
                {/*<PropsExampleFunc name={3}/>*/}
            </div>
            ===================================================
            <div>
                <h1>State Example</h1>
                <Counter/>
            </div>
        </div>);
};

export default App;
