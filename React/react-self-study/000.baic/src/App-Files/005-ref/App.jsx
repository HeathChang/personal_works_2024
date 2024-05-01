import React from 'react';
import ScrollBox from "./components/005-ref/ScrollBoxClass";


class App extends React.Component{
    render(){
        const onClickTop = () => {
            this.scrollBox.scrollToTop();
        }

        const onClickBottom = () => {
            this.scrollBox.scrollToBottom();
        }
        return (
            <div>
                {/* ScrollBox 컴포넌트에 ref 속성을 사용하여, this.scrollBox에 참조를 할당 */}
                <ScrollBox ref={ref => this.scrollBox = ref}/>
                <button onClick={onClickTop}>맨 위로</button>
                <button onClick={onClickBottom}>맨 밑으로</button>
            </div>
        );
    }


};

export default App;