import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "@/components/layouts/Header";
import NavBar from "@/components/layouts/NavBar";
// import Footer from "@/components/layouts/Footer";
import Home from "@/pages/Home/Home";
import { AppContainer } from "@/styles/AppStyles"; // Adjust the path as necessary


function App() {
    return (
        <AppContainer>
            <div className="App">
                <header className="App-header">
                    <Header/>
                </header>
                <div className="App-Body">
                    <NavBar/>
                    <Router>
                        <Routes>
                            <Route path="*" element={<Home/>}/>
                        </Routes>
                    </Router>
                </div>
                {/*<div className="App-Footer">*/}
                {/*    <Footer/>*/}
                {/*</div>*/}
            </div>
        </AppContainer>
    );
}

export default App;
