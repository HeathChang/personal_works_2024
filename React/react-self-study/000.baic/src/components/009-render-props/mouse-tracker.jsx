import React, {useState} from 'react';

const MouseTracker = ({children}) => {
    // children은 부모 컴포넌트의 열린 태그와 닫힌 태그 사이의 내용을 나타내는 특별한 prop
    // <MouseTracker> 태그 사이의 내용인 (position) => (...) 함수가 MouseTracker 컴포넌트의 children prop 로 전달
    // 컴포넌트는 자식(children)으로 전달된 함수를 실행하면서 현재 마우스의 위치를 받아오고, 이를 JSX로 렌더링하는 방식으로 구현
    // children prop 로 전달된 함수가 MouseTracker 컴포넌트 내부에서 실행되기 때문에 해당 클로저 함수 (App.jsx에 위치한 position)는 MouseTracker 컴포넌트 내부에서 실행

    const [position, setPosition] = useState({x: 0, y: 0});
    const handleMouseMove = (event) => {
        setPosition({x: event.clientX, y: event.clientY});
    };

    return (
        <div style={{height: '100vh'}} onMouseMove={handleMouseMove}>
            {children(position)}
        </div>
    );
};


export default MouseTracker;