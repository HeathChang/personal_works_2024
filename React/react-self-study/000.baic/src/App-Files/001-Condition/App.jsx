import React from "react";

function App() {
    const name = "리액트";
    return (
        <div>
            {name === "리액트" ? (<h1> 리액트 입니다 </h1>) : (<h2>리액트가 아닙니다 </h2>)}
            {name === "리액트" && (<h1>리액트 입니다2</h1>)}
            {name === "뷰" && (<h1>리액트가 아닙니다</h1>)} {/* 노출되지 않음.*/}
        </div>
    );
}


export default App;
