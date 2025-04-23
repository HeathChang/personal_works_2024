import React from 'react';
import Home from "@/pages/Home/Home";
import Gotcha from "@/pages/Gotcha/Gotcha.pages";
import { Route, Routes} from 'react-router-dom';

export const RouterGroup = () => {

    return (
        <Routes>
            <Route path="*" element={<Home/>}/>
            <Route path="/gotcha" element={<Gotcha/>}/>
            <Route path="/popular" element={<Gotcha/>} />
        </Routes>
    );
};