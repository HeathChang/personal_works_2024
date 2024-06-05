import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Header from "@/components/layouts/Header";
import NavBar from "@/components/layouts/NavBar";
// import Footer from "@/components/layouts/Footer";
import Home from "@/pages/Home/Home";
import {AppContainer} from "@/styles/AppStyles"; // Adjust the path as necessary

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
                </header>
                <div className="App-Body">
                    <div className="app-nav-bar">
                        <NavBar activeItem={activeItem}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                        />
                    </div>
                    <div className="app-router">
                        <Router>
                            <Routes>
                                <Route path="*" element={<Home/>}/>
                            </Routes>
                        </Router>
                    </div>
                </div>
            </div>
        </AppContainer>
    );
}

export default App;
