import React, { useRef } from 'react';

function MyComponent() {
    const buttonRef = useRef(null); // useRef를 사용하여 버튼의 참조를 보관

    const handleClick = () => {
        // 버튼의 텍스트를 변경
        buttonRef.current.innerText = 'Button clicked!';
    };

    return (
        <div>
            <button ref={buttonRef} onClick={handleClick}>
                Click me
            </button>
        </div>
    );
}

export default MyComponent;