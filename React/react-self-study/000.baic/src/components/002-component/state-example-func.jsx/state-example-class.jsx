import React, { Component } from "react";

class Counter extends Component {
    constructor(props) {
        // 이 함수가 호출되면, 현재 클래스형 컴포넌트가 상속받고 있는 리액트 Component 클래스가 지닌 생성자 함수를 호출하여 , this.state 값에 초기값을 설정해줌
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount = (prevCount) => {
        this.setState({count: this.state.count + 1}, () => {
            console.log("callBack() 함수 호출", this.state);
        });
    };

    render() {
        return (<div>
            <h2>Counter</h2>
            <p>Count: {this.state.count}</p>
            <button onClick={this.incrementCount}>Increment</button>
        </div>);
    }
}

export default Counter;
