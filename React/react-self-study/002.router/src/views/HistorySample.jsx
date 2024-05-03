import React from "react";
import {useHistory, useNavigate} from 'react-router-dom'; // 설치한 패키지


const HistorySample = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    };

    const goBack = () => {
        navigate(-1); // Navigates back in history
    };

    const goForward = () => {
        navigate(1); // Navigates forward in history
    };

    const goToAboutPage = () => {
        navigate('/about');
    };

    return (
        <div>
            <h1>History Page</h1>
            <button onClick={goHome}>Go Home</button>
            <button onClick={goBack}>Go Back</button>
            <button onClick={goForward}>Go Forward</button>
            <button onClick={goToAboutPage}>Go to About Page</button>
        </div>
    );

}


export default HistorySample;