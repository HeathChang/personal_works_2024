import React from 'react';

class ScrollBox extends React.Component {
    // DOM 직접 조작 예시
    // 1. 특정 input에 Focus
    // 2. 스크롤 박스 조작하기
    // 3. Canvas 요소에 그림 그리기 등...


    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight
    }
    scrollToTop = () => {
        this.box.scrollTop = 0
    }

    render() {
        const outerStyle = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative '
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        };

        return (
            <div style={outerStyle} ref={(ref) => this.box = ref}>
                <div style={innerStyle}></div>
            </div>
        );
    }
}

export default ScrollBox;