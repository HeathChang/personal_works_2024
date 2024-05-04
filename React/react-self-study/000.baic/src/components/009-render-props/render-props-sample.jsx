import React from "react";

const RenderPropsSample = (props) => {
    return <div>{props.children(5)}</div>
}

export default RenderPropsSample;