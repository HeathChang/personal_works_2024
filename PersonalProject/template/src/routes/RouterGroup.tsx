import React from 'react';
import { Route, Routes as RoutesGroups } from "react-router-dom";
import HomePage from "../pages/Home";



export const RouterGroup = () => {

    return (
        <RoutesGroups>
            <Route path="" element={<HomePage/>}/>

        </RoutesGroups>
    );
};