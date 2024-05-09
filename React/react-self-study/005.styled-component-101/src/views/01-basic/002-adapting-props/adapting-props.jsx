import styled, {css} from "styled-components";


const AdaptingProps = () => {
    const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background: ${props => props.$primary ? "#BF4F74" : "white"};
        color: ${props => {return props.$primary ? "white" : "#BF4F74" }};
        // 해당 버튼이 $primary prop을 가지고 있는지 여부를 나타냄

        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid #BF4F74;
        border-radius: 3px;
    `;
    return (<div>
        <Button>Normal</Button>
        <Button $primary>Primary</Button> {/* 여기서 $primary 로 전달 */}
    </div>);
};

export default AdaptingProps;