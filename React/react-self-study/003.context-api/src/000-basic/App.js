import React from "react";
import ColorBox from "./000.basic/ColorBox";
import ColorContext from "./000.basic/color";

const App = () => {
    return (
        <div className="App">
            {/* Provider 를 사용하면 Context 의 value 를 변경 */}
            {/* Provider 를 사용하는 경우, 반드시 value를 명시  */}
            <ColorContext.Provider value={{color: 'red'}}>
                <ColorBox/>
            </ColorContext.Provider>
        </div>
    );
}

export default App;
