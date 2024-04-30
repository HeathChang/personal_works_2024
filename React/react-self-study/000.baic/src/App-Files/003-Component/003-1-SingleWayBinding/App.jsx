// ParentComponent.js
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const App = () => {
    const [data, setData] = useState('');

    const handleEventFromChild = (dataFromChild) => {
        // 부모 컴포넌트에서 이벤트를 처리하는 로직
        console.log('Received data from child:', dataFromChild);
        setData(dataFromChild);
    };

    return (
        <div>
            <ChildComponent onDataReceived={handleEventFromChild} />
            <p>Data from child: {data}</p>
        </div>
    );
};

export default App;