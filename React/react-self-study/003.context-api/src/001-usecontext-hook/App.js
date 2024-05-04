import React from "react";
import {ColorProvider} from "./color";
import ColorBox from "./ColorBox";


function App() {
    return (
        <div className="App">
           <ColorProvider>
               <div>
                   <ColorBox/>
               </div>
           </ColorProvider>
        </div>
    );
}

export default App;
