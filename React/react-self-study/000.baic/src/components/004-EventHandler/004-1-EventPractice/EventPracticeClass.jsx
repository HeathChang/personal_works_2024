import React from "react";

class EventPractice extends React.Component {
    // 클래스 필드 선언 구문
    state = {
        //'message' 속성을 빈 문자열로 초기화한 초기 상태 객체를 할당. 없어도 되나, 이때 onClick 이벤트 발생하면 에러 발생
        // 없을 경우, onClick 이벤트 실행 시, Uncaught TypeError: Cannot read properties of null (reading 'message')
        username: '',
        message: ''

    };

    // constructor(props) {
    //     super(props);
    //     // Constructor 사용 이유
    //     // (클래스의 멤버로 취급되므로 클래스 내부에서 this.handleChange & this.handleClick 와 같이 호출)
    //     // 함수가 호출될 때 this 는 호출부에 따라 결정.
    //     // 클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서 메서드와 this 관계가 끊어져버림.
    //     // > 임의 메서드가 이벤트로 등록되어도 this 를 컴포넌트 자신으로 제대로 가리키기 위해서는 메서드를 this 와 바인딩해야 하지만...
    //     // 이 때, 화살표 함수를 사용하면 바벨의 transform-class-properties 문법을 사용되어 constructor 를 없애도 됨
    // 	   // this 가 컴포넌트 인스턴스를 가르킴(이는 화살표 함수가 자신이 선언된 컨텍스트에서 this 를 캡처)

    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = e => {
        this.setState({
            // 객체 안에서 key 를 []로 감싸면, 안에 넣은 레퍼런스가 가리키는 실제 값이 key 가 됨.
            [e.target.name]: e.target.value
        })
    }
    handleClick = () => {
        alert('message:: ' + this.state.message + ', name :: ' + this.state.username);
        this.setState({message: '', name: ''});
    };
    render = () => {
        return (
            <div>
                <h1>Event Practice</h1>
                <input type="text" name="username" placeholder="User Name" value={this.state.username} onChange={this.handleChange}/>
                <input type="text" name="message" placeholder="Enter Anything" value={this.state.message} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    };
}

export default EventPractice;