import './App.css';
import People from "./pages/people/people";



const App = () => {
    return (
        <div className="App">
            <header>Star Wars API</header>
            <div className="body-wrapper">
                <People/>
            </div>
        </div>
    );
};

export default App;
