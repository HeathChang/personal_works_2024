import './App.css';
import Header from "./components/header";
import {Routes, Route} from "react-router-dom";
import NotesList from "./containers/notesList";
import AddNotes from "./containers/addNotes";

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route  path="/" element={<NotesList/>}/>
                <Route path="/add-new-note" element={<AddNotes/>}/>
            </Routes>
        </div>
    );
};

export default App;
