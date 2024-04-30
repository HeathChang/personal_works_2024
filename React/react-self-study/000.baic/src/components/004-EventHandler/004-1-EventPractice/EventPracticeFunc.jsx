import React from "react";

const EventPractice = () => {
    const [form, setForm] = React.useState({
        username: '',
        message: ''
    });
    const {username, message} = form;

    const onChange = e => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        };
        setForm(nextForm);
    };

    const onClick = () => {
        alert('message:: ' + message + ', name :: ' + username);
        setForm({
            username: '',
            message: ''
        });
    };

    const onKeyDown = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>Event Practice</h1>
            <input type="text" name="username" placeholder="User Name" value={username} onChange={onChange}/>
            <input type="text" name="message" placeholder="Enter Anything" value={message} onChange={onChange} onKeyDown={onKeyDown}/>
            <button onClick={onClick}>확인</button>
            {/*<input type="text" name="message" placeholder="Enter Anything" onChange={handleChange}/>*/}
            {/*<button onClick={handleButton}>확인</button>*/}
        </div>
    );


};


export default EventPractice;