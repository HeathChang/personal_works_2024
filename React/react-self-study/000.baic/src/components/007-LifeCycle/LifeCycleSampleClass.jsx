import React from 'react';

class LifeCycleSample extends React.Component {
    state = {
        number: 0,
        color: null
    };

    myRef = null; // ref 설정 부분


    // constructor: 컴포넌트 처음 구성 시, 실행
    constructor(props) {
        super(props);
        console.log("constructor");
    }

    // getDerivedStateFromProps : 마운트 & 업데이트
    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("getDerivedStateFromProps");
        if (nextProps.color !== prevState.color) {
            return {color: nextProps.color};
        }
        return null;
    }

    // componentDidMount : 첫 렌더링 마친 후, 실행
    componentDidMount() {
        console.log("componentDidMount");

    }

    // shouldComponentUpdate : 리렌더링 시작 여부 파악
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("shouldComponentUpdate");
        return nextState.number % 10 !== 4;
    }

    // componentWillUnmount : 제거 시, 실행
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}


export default LifeCycleSample;