import React, {useState} from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 0, text: '민지'},
        {id: 1, text: '혜린'},
        {id: 2, text: '하니'},
        {id: 3, text: '다니'},
        {id: 4, text: '혜인'},
    ]);

    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(names.length);

    const onChange = e => setInputText(e.target.value);
    const onClick = () => {
        const newName = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(newName);
        setInputText('');
    };

    const onDoubleClick = id => {
        const newNameList = names.filter(item => item.id !== id);
        setNames(newNameList);
    };


    const nameList = names.map((item) =>
        <li key={item.id} onDoubleClick={() => onDoubleClick(item.id)}>{item.text}</li>
    );


    return (
        <div>
            <input value={inputText} onChange={onChange}/>
            <button onClick={onClick}>추가</button>
            <ul>{nameList}</ul>
        </div>
    );


};

export default IterationSample;