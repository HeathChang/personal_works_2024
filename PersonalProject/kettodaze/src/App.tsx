import React, {useState} from 'react';

import Header from "@/components/layouts/Header";
import NavBar from "@/components/layouts/NavBar";
import Home from "@/pages/Home/Home";
import {AppContainer} from "@/styles/AppStyles";
import Gotcha from "@/pages/Gotcha/Gotcha.pages";
import { RouterGroup } from "@/routes/RouteGroup"; // Adjust the path as necessary

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

                        <RouterGroup/>
                    </div>
                </div>
            </div>
        </AppContainer>
    );
}

export default App;
