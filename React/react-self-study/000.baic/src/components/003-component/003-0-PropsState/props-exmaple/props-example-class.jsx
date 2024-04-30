import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    render() {
        console.log("what is in props:: ", this.props);
        const { name } = this.props;
        return (
            <div>
                안녕하세요! 제 이름은 {name} 입니다.
                children 에서 컴포넌트 사이값을 보여주는
                props.children -> {this.props.children}
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: "React Default",
};

MyComponent.propTypes = {
    name: PropTypes.string.isRequired
};

export default MyComponent;
