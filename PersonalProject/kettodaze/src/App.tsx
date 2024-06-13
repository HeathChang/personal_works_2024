import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "@/components/layouts/Header";
import NavBar from "@/components/layouts/NavBar";
import Home from "@/pages/Home/Home";
import {AppContainer} from "@/styles/AppStyles";
import Gotcha from "@/pages/Gotcha/Gotcha.pages"; // Adjust the path as necessary

const App: React.FC = () => {
    const [activeItem, setActiveItem] = useState<string>('인기 갓챠');

    const handleMouseEnter = (item: string) => {
        setActiveItem(item);
    }

    const handleMouseLeave = () => {
        setActiveItem('');
    }

    return (
        <AppContainer>
            <div className="App">
                <header className="App-header">
                    <Header/>
                    <NavBar activeItem={activeItem}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    />
                </header>
                <div className="App-Body">
                    <div className="app-event"></div>
                    <div className="app-router">
                            <Routes>
                                <Route path="*" element={<Home/>}/>
                                <Route path="/gotcha" element={<Gotcha/>}/>
                                <Route path="/popular" element={<Gotcha/>} />
                            </Routes>
                    </div>
                </div>
            </div>
        </AppContainer>
    );
}

export default App;
