import React from "react";
import { Overlay, SpinnerCircle, SpinnerText } from "./custom-spinner.styled";

const CustomSpinner = () => {
    return (
        <Overlay>
            <SpinnerText>Loading..</SpinnerText>
            <SpinnerCircle/>
        </Overlay>
    );
};


export default CustomSpinner;