// ChildComponent.js
import React, { useState } from 'react';

const ChildComponent = ({ onDataReceived }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const sendDataToParent = () => {
        // 자식 컴포넌트에서 부모 컴포넌트로 데이터 전달
        onDataReceived(inputValue);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={sendDataToParent}>Send Data</button>
        </div>
    );
};

export default ChildComponent;